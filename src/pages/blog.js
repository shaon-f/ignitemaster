'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import useSWR from 'swr';
import Image from 'next/image';

// Fetcher function for SWR
const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10);
    return { data, totalPages };
};

const Blogpg = () => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    // --- Start of Blog Content State and Hooks (from WpPosts) ---
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [tagsMap, setTagsMap] = useState({});
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [hasMore, setHasMore] = useState(true);

    // Debounce effect for search term
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    const postsApiUrl = `https://ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&page=${page}&_embed${selectedCategories.length > 0 ? `&categories=${selectedCategories.join(',')}` : ''}${debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''}`;

    const { data, error, isLoading, isValidating } = useSWR(postsApiUrl, fetcher);

    // Effect to accumulate posts and determine if more are available
    useEffect(() => {
        if (data && data.data) {
            if (page === 1) {
                setPosts(data.data);
            } else {
                setPosts(prevPosts => [...prevPosts, ...data.data]);
            }
            setHasMore(page < data.totalPages);

            // Update Locomotive Scroll instance after content changes
            const timer = setTimeout(() => {
                if (scrollInstanceRef.current && typeof scrollInstanceRef.current.update === 'function') { // Safely call update
                    scrollInstanceRef.current.update();
                    console.log("✅ LocomotiveScroll updated after content change");
                }
            }, 50); // Small delay to ensure DOM is updated

            return () => clearTimeout(timer); // Cleanup timer
        }
    }, [data, page]);

    // Fetch tags on component mount
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const res = await fetch('https://ignitetraininginstitute.com/wp-json/wp/v2/tags?per_page=100');
                const tags = await res.json();
                const map = {};
                tags.forEach(tag => (map[tag.id] = tag.name));
                setTagsMap(map);
            } catch (err) {
                console.error("Failed to fetch tags:", err);
            }
        };
        fetchTags();
    }, []);

    // Fetch categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('https://ignitetraininginstitute.com/wp-json/wp/v2/categories?per_page=100');
                const cats = await res.json();
                setCategories(cats);
            } catch (err) {
                console.error("Failed to fetch categories:", err);
            }
        };
        fetchCategories();
    }, []);

    const handleCategoryClick = useCallback((categoryId) => {
        setPosts([]);
        setPage(1);
        setSearchTerm('');
        setDebouncedSearchTerm('');
        setHasMore(true);

        setSelectedCategories(prevSelected => {
            if (prevSelected.includes(categoryId)) {
                return prevSelected.filter(id => id !== categoryId);
            } else {
                return [...prevSelected, categoryId];
            }
        });
    }, []);

    const handleAllCategoriesClick = useCallback(() => {
        setPosts([]);
        setSelectedCategories([]);
        setPage(1);
        setSearchTerm('');
        setDebouncedSearchTerm('');
        setHasMore(true);
    }, []);

    const handleSearchChange = useCallback((event) => {
        setPosts([]);
        setSearchTerm(event.target.value);
        setPage(1);
        setSelectedCategories([]);
        setHasMore(true);
    }, []);

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy link.');
        }
    };

    // Function to limit words
    const limitWords = (text, limit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };
    // --- End of Blog Content State and Hooks (from WpPosts) ---


    // Locomotive Scroll setup
    useEffect(() => {
        const initScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) {
                console.log("Locomotive Scroll: scrollRef.current is null, cannot initialize.");
                return;
            }

            scrollInstanceRef.current = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1,
            });

            // Initial update after scroll is ready - Added safe check here
            if (scrollInstanceRef.current && typeof scrollInstanceRef.current.update === 'function') {
                scrollInstanceRef.current.update();
                console.log("✅ LocomotiveScroll initialized and updated");
            }
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return () => {
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
        };
    }, []);

    // Error message rendering (from WpPosts)
    if (error) {
        return (
            <div ref={scrollRef} data-scroll-container style={{ minHeight: 'calc(100vh - 200px)' }}>
                <section className="ibdpBanner" data-scroll data-scroll-section>
                    <div className="alert alert-danger my-5 p-4">Oh no babe, the API broke again 😭</div>
                </section>
            </div>
        );
    }

    // Determine current breadcrumb path
    const getBreadcrumbPath = () => {
        let path = [{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }];

        if (selectedCategories.length > 0) {
            const selectedCategoryNames = selectedCategories.map(id => {
                const category = categories.find(cat => cat.id === id);
                return category ? category.name : '';
            }).filter(Boolean); // Filter out any undefined/null names

            if (selectedCategoryNames.length > 0) {
                path.push({ name: selectedCategoryNames.join(', '), href: '#' });
            }
        } else if (debouncedSearchTerm) {
            path.push({ name: `Search: "${debouncedSearchTerm}"`, href: '#' });
        }

        return path;
    };

    const breadcrumbPath = getBreadcrumbPath();

    return (
        <>
            <div ref={scrollRef} data-scroll-container style={{ minHeight: 'calc(100vh - 200px)' }}>
                <section className="ibdpBanner" data-scroll data-scroll-section>
                    {/* Image with Wrapper */}
                    <div className="full-width-image-wrapper" data-scroll-section>
                        <img
                            src="/images/blogbanner.jpg"
                            className="img-fluid"
                            onLoad={() => scrollInstanceRef.current?.update && scrollInstanceRef.current.update()}
                            alt="Blog Banner"
                        />
                        <h1 className="banner-text">Blog</h1>
                        {/* Breadcrumb added here */}
                        <nav aria-label="breadcrumb" className="blog-breadcrumb">
                            <ol className="breadcrumb">
                                {breadcrumbPath.map((item, index) => (
                                    <li key={index} className={`breadcrumb-item ${index === breadcrumbPath.length - 1 ? 'active' : ''}`}>
                                        {index === breadcrumbPath.length - 1 ? (
                                            item.name
                                        ) : (
                                            <a href={item.href}>{item.name}</a>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                    {/* End Image with Wrapper */}

                    {/* Loading spinner always within the container */}
                    {isLoading && posts.length === 0 && (
                        <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '300px' }}>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                    {/* Only render blog content if not loading or if posts are available */}
                    {(!isLoading || posts.length > 0) && (
                        <>
                            {/* Blog Search */}
                            <div className="mb-4 p-4 bg-white searchBox rounded ">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        placeholder="SEARCH"
                                        className="form-control rounded-pill pe-5 searchbar"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    <button
                                        className="btn btn-primary position-absolute end-0 h-100 rounded-pill"
                                        onClick={() => setDebouncedSearchTerm(searchTerm)}
                                        style={{ zIndex: 2 }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Category List */}
                            <div className=" p-4 bg-white rounded categoryList ">
                                <div className="d-flex flex-wrap category-buttons-container justify-content-center gap-3">
                                    <button
                                        className={`btn category-button ${selectedCategories.length === 0 && !searchTerm ? 'category-button-selected' : ''}`}
                                        onClick={() => handleAllCategoriesClick()}
                                    >
                                        All Categories
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            className={`btn category-button ${selectedCategories.includes(category.id) ? 'category-button-selected' : ''}`}
                                            onClick={() => handleCategoryClick(category.id)}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Posts List */}
                            {posts.length === 0 && !isValidating && !isLoading ? (
                                <div className="text-center text-muted h4 py-5">No posts found for this category or search term.</div>
                            ) : (
                                <div className="mb-4 p-4 postsList ">
                                    {posts.map((post) => {
                                        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                                        const postTags = post.tags.map(tagId => tagsMap[tagId]).filter(Boolean);
                                        const postLink = post.link.replace;
                                        const postSlug = post.slug;
                                        const postTitle = encodeURIComponent(post.title.rendered);

                                        return (
                                            <div className="col" key={post.id}>

                                                <div className="card h-100 border-0 position-relative overflow-hidden">

                                                    {featuredImage && (
                                                        <img
                                                            src={featuredImage}
                                                            className="card-img-top"
                                                            alt={post.title.rendered}
                                                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                                                            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/E0F2F7/333333?text=No+Image`; }}
                                                            onLoad={() => scrollInstanceRef.current?.update && scrollInstanceRef.current.update()}
                                                        />
                                                    )}
                                                    <div className="card-body-text d-flex flex-column">


                                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                                            <p className="card-subtitle">
                                                                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                                                            </p>
                                                            <div className="d-flex gap-2">
                                                                <a
                                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${postLink}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-muted social-icon-hover"
                                                                    aria-label="Share on Facebook"
                                                                >
                                                                    <svg className="bi bi-facebook" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.953H10.5c-.984 0-1.291.739-1.291 1.245V8.05h2.17l-.354 2.326H10.5V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                                    </svg>
                                                                </a>
                                                                <a
                                                                    href={`https://twitter.com/intent/tweet?url=${postLink}&text=${postTitle}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-muted social-icon-hover"
                                                                    aria-label="Share on X (Twitter)"
                                                                >
                                                                    <svg className="bi bi-twitter-x" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.364l5.478-6.21L0 .75h5.063l3.495 4.633L12.6.75Zm-.86 13.028h1.36L4.323 2.145H2.865l9.075 11.633Z" />
                                                                    </svg>
                                                                </a>
                                                                <a
                                                                    href={`mailto:?subject=${postTitle}&body=Check out this blog post: ${postLink}`}
                                                                    className="text-muted social-icon-hover"
                                                                    aria-label="Share via Email"
                                                                >
                                                                    <svg className="bi bi-envelope-fill" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.756Z" />
                                                                    </svg>
                                                                </a>
                                                                <button
                                                                    onClick={() => copyToClipboard(postLink)}
                                                                    className="btn btn-link p-0 text-muted social-icon-hover"
                                                                    aria-label="Copy Link"
                                                                >
                                                                    <svg className="bi bi-link-45deg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.793.792a.5.5 0 0 0 .128.129 2 2 0 0 1-.861 3.337l-1.828 1.828a3 3 0 1 0 4.243-4.243L11.28 7.414a4.018 4.018 0 0 1 .128 1.287z" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <h5
                                                            className="card-title"
                                                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                        />
                                                        <div
                                                            className="card-text"
                                                            dangerouslySetInnerHTML={{ __html: limitWords(post.excerpt.rendered.replace(/<[^>]*>/g, ''), 15) }}
                                                        />

                                                        <a
                                                            href={postSlug}
                                                            className="btn btn-primary rounded-circle position-absolute m-4 d-flex align-items-center justify-content-center"
                                                            rel="noopener noreferrer"
                                                            aria-label="Read More"
                                                            style={{}}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                            </svg>
                                                        </a>
                                                    </div>

                                                    <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 524 663" fill="none" xmlns="http://www.w3.org/2000/svg" class="position-absolute">
                                                        <mask id="path-1-inside-1_1179_10211" fill="white">
                                                            <path d="M524 522C524 538.569 510.569 552 494 552H436C419.431 552 406 565.431 406 582V633C406 649.569 392.569 663 376 663H30C13.4315 663 0 649.569 0 633V30C0 13.4315 13.4315 0 30 0H494C510.569 0 524 13.4315 524 30V522Z" />
                                                        </mask>
                                                        <path d="M494 552V550H436V552V554H494V552ZM406 582H404V633H406H408V582H406ZM376 663V661H30V663V665H376V663ZM0 633H2V30H0H-2V633H0ZM30 0V2H494V0V-2H30V0ZM524 30H522V522H524H526V30H524ZM494 0V2C509.464 2 522 14.536 522 30H524H526C526 12.3269 511.673 -2 494 -2V0ZM0 30H2C2 14.536 14.536 2 30 2V0V-2C12.3269 -2 -2 12.3269 -2 30H0ZM30 663V661C14.536 661 2 648.464 2 633H0H-2C-2 650.673 12.3269 665 30 665V663ZM406 633H404C404 648.464 391.464 661 376 661V663V665C393.673 665 408 650.673 408 633H406ZM436 552V550C418.327 550 404 564.327 404 582H406H408C408 566.536 420.536 554 436 554V552ZM494 552V554C511.673 554 526 539.673 526 522H524H522C522 537.464 509.464 550 494 550V552Z" fill="url(#paint0_linear_1179_10211)" mask="url(#path-1-inside-1_1179_10211)" />
                                                        <path d="M494 552V550H436V552V554H494V552ZM406 582H404V633H406H408V582H406ZM376 663V661H30V663V665H376V663ZM0 633H2V30H0H-2V633H0ZM30 0V2H494V0V-2H30V0ZM524 30H522V522H524H526V30H524ZM494 0V2C509.464 2 522 14.536 522 30H524H526C526 12.3269 511.673 -2 494 -2V0ZM0 30H2C2 14.536 14.536 2 30 2V0V-2C12.3269 -2 -2 12.3269 -2 30H0ZM30 663V661C14.536 661 2 648.464 2 633H0H-2C-2 650.673 12.3269 665 30 665V663ZM406 633H404C404 648.464 391.464 661 376 661V663V665C393.673 665 408 650.673 408 633H406ZM436 552V550C418.327 550 404 564.327 404 582H406H408C408 566.536 420.536 554 436 554V552ZM494 552V554C511.673 554 526 539.673 526 522H524H522C522 537.464 509.464 550 494 550V552Z" fill="black" fill-opacity="0.2" mask="url(#path-1-inside-1_1179_10211)" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_1179_10211" x1="561.244" y1="647.48" x2="-152.496" y2="488.771" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.00638475" stop-color="#3F88BA" />
                                                                <stop offset="1" stop-color="#161664" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>

                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Load More Button */}
                            {hasMore && posts.length > 0 && (
                                <div className="d-flex justify-content-center mt-5">
                                    <button
                                        className="btn btn-primary px-5 py-3 rounded-pill"
                                        onClick={() => setPage(prevPage => prevPage + 1)}
                                        disabled={isValidating}
                                    >
                                        {isValidating ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Loading More...
                                            </>
                                        ) : (
                                            'Load More'
                                        )}
                                    </button>
                                </div>
                            )}

                            {posts.length === 0 && !isValidating && !isLoading && (
                                <div className="text-center text-muted h4 py-5">No posts found for this category or search term.</div>
                            )}
                        </>
                    )}
                </section>
            </div>
        </>
    );
};

export default Blogpg;