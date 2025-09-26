import React from "react";

const UniversityLogosCard = () => {
  return (
    <>
      <div
        className="container-fluid py-4 d-flex justify-content-center align-items-center university-logos-container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{
          maxWidth: "90vw",
          margin: "0 auto",
          animationDelay: "0.3s",
        }}
      >
        {/* Desktop Layout - Horizontal */}
        <div className="d-none d-md-flex justify-content-between align-items-center w-100">
          {[
            { src: "/assets/uni1.png", alt: "Pearson Edexcel" },
            { src: "/assets/camb.png", alt: "University of Cambridge" },
            { src: "/assets/uni3.png", alt: "AQA Realising Potential" },
          ].map((logo, index) => (
            <div
              key={index}
              className="logo-wrapper desktop-logo fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <img src={logo.src} alt={logo.alt} className="logo-img" />
            </div>
          ))}
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="d-md-none w-100 d-flex flex-column align-items-center gap-4">
          {[
            { src: "/assets/pea.png", alt: "Pearson Edexcel" },
            { src: "/assets/camb.png", alt: "University of Cambridge" },
            { src: "/assets/aqa.png", alt: "AQA Realising Potential" },
          ].map((logo, index) => (
            <div
              key={index}
              className="logo-wrapper mobile-logo fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <img src={logo.src} alt={logo.alt} className="logo-img" />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Scoped responsive styles */}
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }

        /* Shared wrapper */
        .logo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Desktop sizes */
        .desktop-logo {
          width: 450px;
          height: 300px;
        }

        /* Mobile sizes */
        .mobile-logo {
          width: 200px;
          height: 100px;
        }

        /* Image scaling */
        .logo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .university-logos-container {
          height: 30vh; /* Desktop */
        }
        @media (max-width: 767px) {
          .university-logos-container {
            height: auto; /* Mobile */
          }
        }
          @media (min-width: 1536px) and (max-width: 1919px) {
  .desktop-logo{
    width: 390px;
    height: 300px;
}
}
          @media (min-width: 1200px) and (max-width: 1535px) {
  .desktop-logo{
    width: 350px;
    height: 280px;
}
}
      `}</style>
    </>
  );
};

export default UniversityLogosCard;
