"use client";
import React from "react";

export default function IgniteCareerCard() {
  return (
    <section className="ignite-section">
      <div className="ignite-container">
        {/* Left Content */}
        <div className="ignite-left">
          <div className="subtitle-wrapper">
            <div className="d-flex align-items-center justify-content-center mb-md-4 mb-3 fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: "0.25s" }}>
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="SubHeading testSubheading">Work With Ignite
                </div>
              </div>
            </div>
          </div>

          <h1 className="ignite-main-title fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            Educate With Passion, <br />
            Lead <span className="green-text"> With Purpose</span>
          </h1>

          <p className="ignite-description fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            At Ignite, tutoring goes beyond the classroom - it's a journey of personal growth, flexibility, & purpose. We’re always seeking passionate educators who believe in the power of teaching & learning. Join our team & grow with us as we inspire students every day.
          </p>

          <h2 className="ignite-secondary-title fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            We Shape Bright Futures <br /> With Care & Commitment
          </h2>

          <p className="ignite-short-description">
            We empower passionate trainers to shape student journeys while growing through purpose-driven initiatives & a flexible teaching environment.
          </p>
        </div>

        {/* Right Content */}
        <div className="ignite-right">
          <div className="image-container fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            <img
              src="/assets/person1.jpg"
              alt="Two professionals working together on laptop"
              className="main-image"
            />
          </div>

          {/* Separate Check items boxes */}
          <div
            className="check-boxes-container fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.3s" }}
          >
            <div className="check-box d-flex justify-content-between">

              {/* First item */}
              <div className="d-flex align-items-center gap-3">
                <img src="/assets/check.png" alt="check" className="icon-height" />
                <span>Empowering students & educators alike</span>
              </div>

              {/* Second item */}
              <div className="d-flex align-items-center gap-3">
                <img src="/assets/check.png" alt="check" className="icon-height" />
                <span className="spanText">Igniting great teaching & deeper learning</span>
              </div>


            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
      @font-face {
  font-family: 'Monstra';
  src: url('/fonts/Monstra.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.my-text {
  font-family: 'Monstra', sans-serif;
}
.icon-height{
width: 30px;
height: 30px;
}
        .ignite-section {
     padding: 20px 20px;
          max-width:88vw;
        margin: 40px auto;          
          font-family: 'Montserrat', sans-serif;
        }

        .ignite-container {
          max-width: 90vw;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: flex-start;
        }

        .ignite-left {
          padding-right: 20px;
          margin-top: 2rem;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
        
        .subtitle-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          margin-top:20px;
          margin-bottom: 20px;
        }

        .header-title {
          font-size: 30px;
          line-height:1;
          font-weight: 600;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          white-space: nowrap;
        }

        .menu-lines {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .line {
          width: 20px;
          height: 2px;
          background: #00A491;
          display: block;
        }

        .ignite-subtitle {
          font-size: 36.864px;
          font-weight: 700;
          color: #2C5F7D;
          letter-spacing: 1;
          margin: 0;
        }

        .ignite-main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #233467;
          line-height: 1.2;
          margin: 0;
        }

        .green-text {
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ignite-description {
          font-size: 1vw;
          font-weight:600;
          color: #7a8ca3;
          margin: 0 0 18px 0;
          line-height: 1.6;
         margin-block:20px;
          max-width: 90%;
        }

        .ignite-secondary-title {
          font-size: 1.5vw;
          font-weight: 800;
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;          
          line-height: 1.2;
          letter-spacing: 5%;
          margin-top: 5%;
          margin-bottom: 5%;
          margin: 0 0 15px 0;
          text-transform: uppercase;
        }

        .ignite-short-description {
      font-size: 1vw;
          font-weight:600;
          color: #7a8ca3;
          margin: 0 0 18px 0;
          line-height: 1.4;
          max-width: 90%;
        }

        .ignite-right {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        .check-boxes-container {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

 .check-box {
  background: linear-gradient(
    269.48deg,
    rgba(231, 246, 255, 0) 2.74%,
    #A3CAF5 93.4%
  );
  border-radius: 15px;
  padding: 35px 60px 35px 60px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
}

        .check-box span {
          font-size: 23px;
          color: #2C5F7D;
          font-weight: 500;
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .ignite-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .ignite-left {
            padding-right: 0;
          }

         .ignite-main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #233467;
          line-height: 1;
          margin: 0 0 25px 0;
        }

          .check-boxes-container {
            flex-direction: flex;
            gap: 15px;
          }
        }

        @media (max-width: 768px) {
          .subtitle-wrapper {
            justify-content: center;
            text-align: center;
            width: 100%;
          }

                .ignite-section {
          padding: 60px 20px;
          margin: 0 auto;
          font-family: 'Montserrat', sans-serif;
        }

          .header-title {
            font-size: 20px !important;
            white-space: nowrap;
            overflow: visible;
            padding: 0 8px;
          }

           .ignite-main-title {
          font-size: 21.4px;
          font-weight: 800;
          color: #233467;
          margin: 0 0 25px 0;
          line-height:1.2;
            text-align: center;
        }

          .ignite-secondary-title {
            font-size: 1.2rem;
            text-align: center;
          }

          .ignite-description,
          .ignite-short-description {
          font-size:15px;
            text-align: center;
          }

          .check-boxes-container {
            padding: 20px;
          }

          .line {
            width: 15px;
          }
        }

        @media (max-width: 480px) {
          .header-title {
            font-size: 19px !important;
            padding: 0 4px;
          }
             .check-box {
  background: linear-gradient(
    269.48deg,
    rgba(231, 246, 255, 0) 2.74%,
    #A3CAF5 93.4%
  );
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
}

      .check-box span {
          font-size: 17px;
          color: #2C5F7D;
          font-weight: 500;
          line-height: 1.4;
        }
            .icon-height{
width: 20px;
height: 20px;
}
   .check-box span {
          font-size: 10px;
          color: #2C5F7D;
          font-weight: 500;
          line-height: 1.4;
        }
        .ignite-section {
     padding: 5px 20px;
          max-width:100%;
        margin: 40px auto;          
          font-family: 'Montserrat', sans-serif;
        }
          .header-title img {
            width: 12px !important;
            height: 15px !important;
          }
        }
          @media screen and (min-width: 1536px) and (max-width: 1600px) {
                  .ignite-section {
     padding: 60px 20px;
          max-width:88vw;
        margin: 40px auto;          
          font-family: 'Montserrat', sans-serif;
        }
.icon-height{
width: 20px;
height: 20px;
}
        .ignite-container {
          max-width: 90vw;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: flex-start;
        }

        .ignite-left {
          padding-right: 20px;
          margin-top: 2rem;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
        
        .subtitle-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          margin-block: 15px;
        }

        .header-title {
          font-size: 25px;
          line-height:1;
          font-weight: 600;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          white-space: nowrap;
        }

        .menu-lines {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .line {
          width: 20px;
          height: 2px;
          background: #00A491;
          display: block;
        }

        .ignite-subtitle {
          font-size: 30px;
          font-weight: 700;
          color: #2C5F7D;
          letter-spacing: 1;
          margin: 0;
        }

        .ignite-main-title {
          font-size: 2rem !important;
          font-weight: 800;
          color: #233467;
          line-height: 1.2;
        }

        .green-text {
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ignite-description {
          font-size: 1vw;
          font-weight:600;
          color: #7a8ca3;
          margin: 0 0 18px 0;
          line-height: 1.6;
          margin-block:15px;
          max-width: 90%;
        }

        .ignite-secondary-title {
          font-size: 1.2vw;
          font-weight: 800;
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;          
          line-height: 1.2;
          letter-spacing: 5%;
          margin-top: 5%;
          margin-bottom: 5%;
          margin: 0 0 15px 0;
          text-transform: uppercase;
        }

        .ignite-short-description {
      font-size: 1vw;
          font-weight:600;
          color: #7a8ca3;
          margin: 0 0 18px 0;
          line-height: 1.3;
          max-width: 90%;
        }

        .ignite-right {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        .check-boxes-container {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

.check-box {
  background: linear-gradient(
    269.48deg,
    rgba(231, 246, 255, 0) 2.74%,
    #A3CAF5 93.4%
  );
  border-radius: 15px;
  padding:20px 45px 20px 45px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
}


        .check-box span {
          font-size: 15px;
          color: #233467;
          font-weight: 500;
          line-height: 1.4;
        }
      }
         @media screen and (min-width: 1200px) and (max-width: 1500px) {
                  .ignite-section {
     padding: 60px 20px;
          max-width:88vw;
        margin: 40px auto;          
          font-family: 'Montserrat', sans-serif;
        }
.icon-height{
width: 20px;
height: 20px;
}
        .ignite-container {
          max-width: 90vw;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: flex-start;
        }

        .ignite-left {
          padding-right: 20px;
          margin-top: 2rem;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
        
        .subtitle-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          margin-block: 15px;
        }

        .header-title {
          font-size: 20px;
          line-height:1;
          font-weight: 600;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          white-space: nowrap;
        }

        .menu-lines {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .line {
          width: 20px;
          height: 2px;
          background: #00A491;
          display: block;
        }

        .ignite-subtitle {
          font-size: 25px;
          font-weight: 700;
          color: #2C5F7D;
          letter-spacing: 1;
          margin: 0;
        }

        .ignite-main-title {
          font-size: 1.5rem !important;
          font-weight: 800;
          color: #233467;
          line-height: 1.2;
        }

        .green-text {
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ignite-description {
          font-size: 1vw;
          font-weight:600;
          color: #7a8ca3;
          margin: 0 0 18px 0;
          line-height: 1.6;
          margin-block:15px;
          max-width: 90%;
        }

        .ignite-secondary-title {
          font-size: 1.2vw;
          font-weight: 800;
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;          
          line-height: 1.2;
          letter-spacing: 5%;
          margin-top: 5%;
          margin-bottom: 5%;
          margin: 0 0 15px 0;
          text-transform: uppercase;
        }

        .ignite-short-description {
      font-size: 1vw;
          font-weight:600;
          color: #7a8ca3;
          margin: 0 0 18px 0;
          line-height: 1.3;
          max-width: 90%;
        }

        .ignite-right {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        .check-boxes-container {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

.check-box {
  background: linear-gradient(
    269.48deg,
    rgba(231, 246, 255, 0) 2.74%,
    #A3CAF5 93.4%
  );
  border-radius: 15px;
  padding:20px 30px 20px 30px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
}


        .check-box span {
          font-size: 12px;
          color: #233467;
          font-weight: 500;
          line-height: 1.4;
        }
      }
      `}</style>
    </section>
  );
}