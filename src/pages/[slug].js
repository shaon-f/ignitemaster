'use client';

import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useRef, useState } from 'react';


// Fetcher function for SWR to handle API requests
const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        const error = new Error('Failed to fetch data');
        error.info = await res.json();
        error.status = res.status;
        throw error;
    }
    return res.json();
};

// Helper function to create a URL-friendly slug from a string
const slugify = (text) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')       // Replace spaces with -
        .replace(/[^\w-]+/g, '')      // Remove all non-word chars
        .replace(/--+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')          // Trim - from start of text
        .replace(/-+$/, '');          // Trim - from end of text
};

// Component to display the table of contents
const TableOfContents = ({ toc }) => {
    if (!toc || toc.length === 0) {
        return null;
    }
    return (
        <div className="card my-4 shadow-sm">
            <div className="card-body">
                <h5 className="card-title text-primary">Table of Contents</h5>
                <nav>
                    <ul className="list-unstyled mb-0 toc-list">
                        {toc.map(({ text, id }) => (
                            <li key={id} className="toc-item py-1">
                                <a href={`#${id}`} className="text-decoration-none">
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

// Component to handle rendering the post content with the TOC inserted
const TOCPostContent = ({ content, toc }) => {
    if (!content) return null;

    // We'll insert the TOC right before the first h2 tag.
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    const firstH2 = tempDiv.querySelector('h2');
    if (firstH2) {
        const tocWrapper = document.createElement('div');
        tocWrapper.id = 'toc-container';
        firstH2.parentNode.insertBefore(tocWrapper, firstH2);
    }

    const tocElement = <TableOfContents toc={toc} />;
    
    // Convert tempDiv's innerHTML back to a string for dangerouslySetInnerHTML
    let newContent = tempDiv.innerHTML;
    if (firstH2) {
        // Find the placeholder and inject the TOC component's HTML
        // This is a bit of a hacky way to do it since we can't directly inject a React component.
        // A better long-term solution might be to use a library to process the HTML.
        // For this example, we'll manually replace the placeholder.
        const tocPlaceholder = `<div id="toc-container"></div>`;
        const tocHtml = `<div class="my-4"><div class="card-body"><h5 class="toc-title">Table of Contents</h5><nav><ul class="list-unstyled mb-0 toc-list">${toc.map(({ text, id }) => `<li class="toc-item py-1"><a href="#${id}" class="text-decoration-none">${text}</a></li>`).join('')}</ul></nav></div></div>`;
        newContent = newContent.replace(tocPlaceholder, tocHtml);
    }

    return (
        <div
            className="post-content lh-lg text-secondary"
            dangerouslySetInnerHTML={{ __html: newContent }}
        />
    );
};


export default function PostDetail() {
    const router = useRouter();
    const { slug } = router.query;
    const [toc, setToc] = useState([]);
    
    const postApiUrl = slug ? `https://ignitetraininginstitute.com/wp-json/wp/v2/posts?slug=${slug}&_embed` : null;
    const { data, error, isLoading } = useSWR(postApiUrl, fetcher);

    // Refs for Locomotive Scroll
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    // useEffect for initializing Locomotive Scroll
    useEffect(() => {
        let scroll;
        const initScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) return;
            scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1,
            });
            scrollInstanceRef.current = scroll;
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return () => {
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
        };
    }, []);

    // New useEffect to generate the TOC
    useEffect(() => {
        if (data && data[0]?.content?.rendered) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data[0].content.rendered;
            
            const headings = Array.from(tempDiv.querySelectorAll('h2'));
            const generatedToc = headings.map(heading => {
                const text = heading.textContent;
                const id = slugify(text);
                // Add the id attribute to the h2 tag itself for linking
                heading.id = id;
                return { text, id };
            });

            // Re-render the content with the updated heading ids
            data[0].content.rendered = tempDiv.innerHTML;
            setToc(generatedToc);

            // Update Locomotive Scroll instance after content changes
            if (scrollInstanceRef.current?.update) {
                scrollInstanceRef.current.update();
                console.log("✅ LocomotiveScroll updated after content change (detail page)");
            }
        }
    }, [data]);

    // Handle loading state
    if (router.isFallback || isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // Handle error state
    if (error) {
        return <div className="alert alert-danger my-5 p-4">Failed to load post. Please try again later.</div>;
    }

    const post = data?.[0];

    // Handle case where no post is found
    if (!post) {
        return (
            <div className="text-center text-muted h4 py-5">
                <h1>404 - Post Not Found</h1>
                <p>The blog post you are looking for does not exist.</p>
                <button onClick={() => router.push('/')} className="btn btn-primary mt-3">
                    Go to Homepage
                </button>
            </div>
        );
    }

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

    // Get the author name
    const authorName = post._embedded?.author?.[0]?.name || 'N/A';
    
    // Get published date
    const publishedDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A';
    
    // Get updated date (if available)
    const updatedDate = post.modified ? new Date(post.modified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : null;

    return (
        <div ref={scrollRef} data-scroll-container>
            <section className="post-detail-section py-5" data-scroll data-scroll-section>
                <div className="container">
                    <h1 className="mb-4 display-4 main-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    
                    <div className="mb-2 post-date">
                            <span>Published on {publishedDate} </span>
                            <span>|</span>
                            {updatedDate && (
                                <span>Updated on {updatedDate}</span>
                            )}
                    </div>

                    <div className="mb-2 post-author">
                            <span>By Sumit Advani</span>
                    </div>


                    {featuredImage && (
                        <div className="text-center mb-5 image-feature">
                            <img
                                src={featuredImage}
                                alt={post.title.rendered}
                                className="img-fluid    "
                                style={{ objectFit: 'cover', width: '100%' }}
                                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/1200x500/E0F2F7/333333?text=No+Image`; }}
                                onLoad={() => scrollInstanceRef.current?.update && scrollInstanceRef.current.update()}
                            />
                        </div>
                    )}
                    
                    {/* Render the Table of Contents and Post Content */}
                    <TOCPostContent content={post.content.rendered} toc={toc} />
                </div>
            </section>
        </div>
    );
}