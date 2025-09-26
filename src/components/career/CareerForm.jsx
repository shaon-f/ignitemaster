"use client";
import React, { useState, useRef } from "react";

export default function CareerForm() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check file size (1MB max)
      if (selectedFile.size > 1024 * 1024) {
        alert("File size exceeds 1MB limit");
        return;
      }
      
      // Check file type
      const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!validTypes.includes(selectedFile.type)) {
        alert("Only PDF and DOC files are supported");
        return;
      }
      
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      fileInputRef.current.files = e.dataTransfer.files;
      handleFileChange({ target: { files: e.dataTransfer.files } });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <section className="career-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
    >
      {/* Title */}
      <h2 className="title fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.1s" }}
      >
        ADVANCE YOUR CAREER WITH{" "}<br />
        THE RIGHT <span>OPPORTUNITIES</span>
      </h2>

      {/* Form */}
      <div className="career-form fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.2s" }}
      >
        <label>NAME*</label>
        <input type="text" required />

        <label>EMAIL*</label>
        <input type="email" required />

        <label>CONTACT NO.*</label>
        <div className="phone-input">
          <img src="/assets/uae.png" alt="flag" width={25} height={35} />
          <select>
            <option>+971</option>
          </select>
          <img src="/assets/dropdown-arrow.png" alt="dropdown" className="dropdown-arrow" />
          <input type="tel" required />
        </div>

        <div className="two-col">
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.25s" }}
          >
            <label>CURRENT LOCATION</label>
            <input type="text" />
          </div>
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.3s" }}
          >
            <label>DEPARTMENT*</label>
            <input type="text" required />
          </div>
        </div>

        <div className="two-col">
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.35s" }}
          >
            <label>POSITION/ROLE*</label>
            <input type="text" required />
          </div>
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.4s" }}
          >
            <label className="subject">SUBJECTS*</label>
                     <input type="text" required />

          </div>
        </div>

        {/* Job type buttons */}
        <div className="job-type fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.45s" }}
        >
          <button type="button" className="outlined">Full Time</button>
          <button type="button" className="outlined">Part Time</button>
        </div>

        <div className="two-col">
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.5s" }}
          >
            <label>NOTICE PERIOD</label>
            <input type="text" />
          </div>
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.55s" }}
          >
            <label>YEARS OF EXPERIENCE*</label>
            <input type="text" required />
          </div>
        </div>

        {/* File upload */}
   <div className="file-section fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.6s" }}
        >
          <p className="file-note">
            Max Size: 1MB Support: PDF, DOC
          </p>
          <div 
            className="file-upload"
            onClick={triggerFileInput}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            Drop Your CV Here
            {file && (
              <span className="file-selected-badge">
                ✓
              </span>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
            required
          />
        </div>


        <div className="text-center"
        >
          <button
            className="btn cust-text fw-bold d-flex align-items-center mx-auto rounded-pill"
            style={{
              background: "linear-gradient(90deg,#161664, #3F88BA)",
              color: 'white',
              padding: '6px 6px 6px 27px',
              border: 'none',
              transition: 'opacity 0.3s ease',
              letterSpacing: "3px",
              fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
              marginTop: "65px"
            }}
            onMouseEnter={(e) => e.target.style.opacity = "0.9"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
          >
SUBMIT            <div
              className="custom-height rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                marginLeft: "2.5rem"
              }}
            >
              <img src="/assets/arrowright.png" alt="arrright" width={16} height={16} />
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @font-face {
          font-family: 'Monstra';
          src: url('/fonts/Monstra.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .career-section {
          max-width: 90vw;
          margin: auto;
          text-align: center;
          padding: 50px 20px;
  font-family: 'Montserrat', sans-serif;
        }

        .title {
font-size: 2.5rem;
          font-weight: 800;
          color: #161664;
          margin-bottom: 40px;
          line-height: 1.2;
          padding-inline: 12rem;
        }
        .title span {
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .career-form {
          margin-top: 30px;
          padding: 6rem;
          border-radius: 30px;
          text-align: left;
          background: linear-gradient(135deg, #e8f4f8 0%, #f0f8f0 100%);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        label {
          display: block;
          font-size: 30px;
          font-weight: 700;
          color: #161664;
          margin-top: 40px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        input, select {
          width: 100%;
          padding: 12px 0;
          border: none;
          border-bottom: 1px solid #161664;
          background: transparent;
          outline: none;
          font-size: 16px;
          color: #233467;
          font-family: 'Montserrat', sans-serif;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }
        input::placeholder {
          color: #4b4b77;
          font-size: 14px;
        }
        select {
          color: #4b4b77;
          font-size: 14px;
        }

        .phone-input {
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid #161664;
          padding-bottom: 12px;
        }
.phone-input img:first-child {
  width: 45px;
  height: 35px;
  border-radius: 8px; /* adjust value as needed */
}

        .phone-input select {
          border: none;
          background: #D9D9D980;
          border-radius: 4px !important;
          font-size: 20px;
          color: #233467;
          width: auto;
          min-width: 80px;
          padding: 4px 8px;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          font-weight: 800;
        }

        .dropdown-arrow {
          width: 10px;
          height: 10px;
          margin-left: -26px;
          pointer-events: none;
          z-index: 1;
        }

        .subject{
          position: relative;
          background-image: url('/assets/dropdown-arrow.png');
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 10px 10px;
          padding-right: 15px;
        }

        // .two-col select {
        //   position: relative;
        //   background-image: url('/assets/dropdown-arrow.png');
        //   background-repeat: no-repeat;
        //   background-position: right 10px center;
        //   background-size: 10px 6px;
        //   padding-right: 15px;
        // }
        .phone-input input {
          border: none;
          flex: 1;
          padding: 0;
          font-size: 16px;
        }

        .two-col {
          display: flex;
          gap: 100px;
          margin-top: 0;
        }
        .two-col div {
          flex: 1;
        }

        .job-type {
          margin: 25px 0;
          display: flex;
          gap: 15px;
        }
        .outlined {
          border: 1px solid #161664;
          background: transparent;
          border-radius: 25px;
          padding: 12px 30px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #161664;
  font-family: 'Montserrat', sans-serif;
        }
        .outlined:hover {
          background: linear-gradient(90deg, #3F88BA, #161664);
          color: white;
        }

        .file-section {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .file-note {
     font-size: 15px;
    color: #161664;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 600;
        }

 
        .file-upload {
          border: 1px solid #161664;
          padding: 20px 65px;
          border-radius: 20px;
          text-align: center;
          cursor: pointer;
          font-weight: 800;
          font-size: 22px;
          background: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
          color: #161664;
          min-width: 200px;
          display: inline-block;
          position: relative;
        }

        .file-selected-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #00A491;
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          border: 2px solid white;
        }
        .file-upload:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateY(-2px);
        }

        .file-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .remove-file {
          background: none;
          border: none;
          color: #ff4d4d;
          font-size: 20px;
          cursor: pointer;
          padding: 0 5px;
          margin-left: 10px;
        }

        .submit-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 35px;
        }

        .submit-btn {
          background: linear-gradient(90deg, #3F88BA, #161664);
          color: white;
          padding: 15px 35px;
          border-radius: 30px;
          border: none;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.5px;
        }
        .submit-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
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

        @media (max-width: 768px) {
          .title {
            font-size: 18.5px;
            margin-bottom: 30px;
            padding-inline: 0;
          }

          .career-form {
            padding: 30px 25px;
          }

          .two-col {
            flex-direction: column;
            gap: 0;
          }
          
          .job-type {
            flex-direction: row;
            align-items: center;
            gap: 10px;
            justify-content: flex-start;
          }
          
          .outlined {
            padding: 10px 25px;
            font-size: 14px;
          }

          label {
            font-size: 12px;
            margin-top: 15px;
          }

          input, select {
            font-size: 14px;
            padding: 10px 0;
          }

          input::placeholder {
            font-size: 12px;
          }

          select {
            font-size: 12px;
          }

          .phone-input select {
            font-size: 12px;
          }

          .phone-input input {
            font-size: 14px;
          }

          .file-note {
            font-size: 12px;
          }

        .file-upload {
            font-size: 14px;
            padding: 15px 25px;
          }

          .file-selected-badge {
            width: 18px;
            height: 18px;
            font-size: 10px;
            top: -6px;
            right: -6px;
          }
        }
          @media (max-width: 575px) {
          
        .career-section {
          max-width: 90vw;
          margin: auto;
          text-align: center;
          padding: 10px 0;
  font-family: 'Montserrat', sans-serif;
        }
          .custom-grid {
  gap: .5rem;
}
  .cust-text {
    background: linear-gradient(90deg, #161664, #3F88BA) !important;
    color: white !important;
    padding: 8px 8px 8px 13px !important;
    border: none !important;
    -webkit-transition: opacity .3s ease !important;
    -moz-transition: opacity.3s ease!important;
    -o-transition: opacity.3s ease!important;
    transition: opacity .3s ease !important;
    letter-spacing: 1px !important;
    font-size: clamp(0.7rem, 1.1vw, 1.1rem) !important;
    margin-top: 45px !important;
    font-weight:600 !important;
  }
  .phone-input select {
          border: none;
          background: #D9D9D980;
          border-radius: 4px !important;
          font-size: 14px;
          color: #233467;
          width: auto;
          min-width: 70px;
          padding: 4px 8px;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          font-weight: 800;
        }
  .custom-height {
    width: 30px !important;
    height: 30px !important;
    background: linear-gradient(90deg, #E7F6FF, #A3CAF5) !important;
    animation-delay: 0.75s !important;
    margin-left: 3rem !important;
  }
}
      `}</style>
    </section>
  );
}