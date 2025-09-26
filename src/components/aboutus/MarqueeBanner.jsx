import React from "react";

const items = [
    "EXPERT GUIDANCE",
    "TAILORED STUDY RESOURCES",
    "PROGRESS TRACKING",
    "PROVEN REAL RESULTS",
    "GRADE IMPROVEMENT"
];

const MarqueeBanner = () => {
    return (
        <section>
            <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section bannerScroll1"
                style={{ animationDelay: "0.4s" }}
            >
                <div className="scrollContent1">
                    {/* Repeat twice for infinite effect */}
                    {[...Array(2)].map((_, i) =>
                        items.map((text, idx) => (
                            <div className="scrollItem1" key={`${i}-${idx}`}>
                                <span className="dot">●</span> {text}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default MarqueeBanner;
