import React from "react";

const items = [
  "EXPERT GUIDANCE",
  "GRADE IMPROVEMENT",
  "FREE STUDY RESOURCES",
  "CAREER ADVICE",
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
                {text}
                <span className="dot">●</span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MarqueeBanner;
