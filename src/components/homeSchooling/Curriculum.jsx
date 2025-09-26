import React from "react";

export default function Curriculum() {
  return (
    <section className="curriculum-section">
      <div className="SubHeading testSubheading" style={{ marginBottom: "30px" }}>Curriculum Offerings For Private Candidates
      </div>

      <div className="curriculum-container">
        {/* IGCSE */}
        <div className="curriculum-card">
          <img
            src="/assets/igcse.jpg"
            alt="IGCSE"
            className="curriculum-img"
          />
          <a
            href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai/"
            className="curriculum-label"
            style={{ textDecoration: "none" }}
          >
            IGCSE
          </a>
        </div>

        {/* A-Levels */}
        <div className="curriculum-card">
          <img
            src="/assets/alevel.jpg"
            alt="A-Levels"
            className="curriculum-img"
          />
          <a
            href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai/"
            className="curriculum-label"
            style={{ textDecoration: "none" }}
          >
            A-LEVELS
          </a>
        </div>

        {/* AP */}
        <div className="curriculum-card">
          <img
            src="/assets/ap1.jpg"
            alt="AP"
            className="curriculum-img"
          />
          <a
            href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai/"
            className="curriculum-label"
            style={{ textDecoration: "none" }}
          >
            AP
          </a>
        </div>
      </div>

      <style jsx>{`
        .curriculum-section {
          padding: 40px 20px;
          text-align: center;
        }

        .curriculum-container {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .curriculum-card {
          border-radius: 16px;
          overflow: hidden;
          flex: 1 1 35%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .curriculum-img {
          width: 100%;
          height: 570px;
          object-fit: cover;
          border-radius: 20px;
          display: block;
          transform: scale(0.95) scaleX(-1);
        }

        .curriculum-label {
          margin-top: -40px;
          padding: 6px 48px;
          font-size: 2.187rem;
          font-weight: bold;
          color: white;
          border-radius: 8px;
          background: linear-gradient(90deg, #00a491 0%, #003e37 127.82%);
          min-width: 280px;
          z-index: 1;
          border-radius: 10px;
        }

        /* 1536px to 1919px (1920px at 125% scaling) */
        @media (max-width: 1919px) and (min-width: 1536px) {
          .curriculum-card {
            flex: 1 1 30%;
            max-width: 380px;
          }
          
          .curriculum-img {
            height: 480px;
          }
          
          .curriculum-label {
            font-size: 1.9rem;
            min-width: 250px;
            padding: 6px 42px;
          }
          
          .curriculum-container {
            gap: 35px;
          }
        }

        /* 1366px display (1200px to 1535px) */
        @media (max-width: 1535px) and (min-width: 1200px) {
          .curriculum-card {
            flex: 1 1 28%;
            max-width: 320px;
          }
          
          .curriculum-img {
            height: 420px;
          }
          
          .curriculum-label {
            font-size: 1.7rem;
            min-width: 220px;
            padding: 6px 38px;
            margin-top: -35px;
          }
          
          .curriculum-container {
            gap: 25px;
          }
        }

        /* 1366px at 125% scaling (approx 1092px) */
        @media (max-width: 1199px) and (min-width: 1024px) {
          .curriculum-card {
            flex: 1 1 30%;
            max-width: 300px;
          }
          
          .curriculum-img {
            height: 380px;
          }
          
          .curriculum-label {
            font-size: 1.5rem;
            min-width: 200px;
            padding: 6px 32px;
            margin-top: -32px;
          }
          
          .curriculum-container {
            gap: 20px;
          }
        }

        /* Tablet */
        @media (max-width: 1023px) and (min-width: 769px) {
          .curriculum-container {
            gap: 25px;
          }
          
          .curriculum-card {
            flex: 1 1 45%;
            max-width: 320px;
          }
          
          .curriculum-img {
            height: 350px;
          }
          
          .curriculum-label {
            font-size: 1.4rem;
            min-width: 190px;
            padding: 6px 28px;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .curriculum-container {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .curriculum-card {
            width: 95%;
            max-width: 95%;
          }

          .curriculum-img {
            height: 180px;
            width: 100%;
            aspect-ratio: auto;
            transform: scale(0.95) scaleX(-1);
          }
          
          .curriculum-label {
            font-size: 16px;
            padding: 10px 24px;
            margin-top: -20px;
            min-width: 180px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .curriculum-img {
            height: 150px;
          }
          
          .curriculum-label {
            font-size: 14px;
            min-width: 160px;
            padding: 8px 20px;
          }
        }
      `}</style>
    </section>
  );
}