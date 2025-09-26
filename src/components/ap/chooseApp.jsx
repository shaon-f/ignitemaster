import React, { useEffect, useState } from 'react';

const benefits = [
    {
        title: "Earn College Credits",
        icon: "/assets/1lgo.png",
        mobileIcon: "/assets/1lgo.png",
        upbutton: "/assets/brup.svg",
        downButton: "/assets/brdown.png",
        text: `Don't miss the opportunity to gain a real edge in college admissions. Strong AP scores can help you earn credits in advance, giving you a head start on your dream university journey.`,
    },
    {
        title: "University Ready Profiles",
        icon: "/assets/2lgo.png",
        mobileIcon: "/assets/moun2.png",
        upbutton: "/assets/grup.svg",
        downButton: "/assets/grdown.png",
        text: `Studies show AP students are better prepared for university life, & we see that too. They enter with stronger skills, academic confidence, & real-world readiness that helps them thrive from day one.`,
    },
    {
        title: "Display Subject Proficiency",
        icon: "/assets/3lgo.png",
        mobileIcon: "/assets/3lgo.png",
        upbutton: "/assets/brup.svg",
        downButton: "/assets/brdown.png",
        text: `AP exams let students dive deep into subjects, building true mastery. This focused approach strengthens both academic confidence and career clarity—guiding smarter choices for the future.`,
    },
    {
        title: "Unique College Application",
        icon: "/assets/4lgo.png",
        mobileIcon: "/assets/moun4.png",
        upbutton: "/assets/grup.svg",
        downButton: "/assets/grdown.png",
        text: `Including AP scores in your application showcases dedication and academic ambition. It helps you stand out and increases your chances of earning credit or advanced placement at top universities.`,
    }
];


const APBenefits = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleCard = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className='mx-auto' style={{ maxWidth: "90vw", border: "none !important", overflow: "hidden !important", marginBlock: "70px" }}>
            <div className="d-flex align-items-center justify-content-center mb-md-4 mb-3">
                <div className="SubHeading testSubheading" style={{ fontSize: isMobile ? "17.5px" : "30px", marginBottom: isMobile ? "20px" : "20px" }}>WHY DO STUDENTS CHOOSE APS?
                </div>
            </div>
            <div className="cards">
                {benefits.map((item, index) => (
                    <div
                        className={`card1 ${index % 2 === 1 ? 'greenBg' : 'blueBg'} ${openIndex === index ? 'open' : ''} `}
                        key={index}
                    >
                        <div className="icon-container">
                            <img
                                src={isMobile ? item.mobileIcon : item.icon}
                                alt="icon"
                                className="icon"
                            />                        </div>
                        <h3 className={`title ${isMobile && index % 2 === 1 ? 'mobile-even' : ''}`}>
                            {item.title}</h3>
                        <p className="text">{item.text}</p>

                        {/* Mobile toggle button */}
                        <button
                            className="toggle-btn"
                            onClick={() => toggleCard(index)}
                            aria-label="Toggle"
                        >
                            <img
                                src={openIndex === index ? item.upbutton : item.downButton}
                                alt="Toggle Icon"
                                className="toggle-icon"
                            />
                        </button>
                    </div>
                ))}
            </div>
            <style jsx>{`
    .container {
        text-align: center;
        background-color: white;
    }

    .heading {
        font-size: 28px;
        font-weight: bold;
        color: #0d1b2a;
        margin-bottom: 40px;
    }

    .cards {
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 65px;
        padding-bottom: 20px;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
    }
@media screen and (min-width: 1536px) and (max-width: 1600px) {
.cards {
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 20px;
        padding-bottom: 20px;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
    }
        
    .icon {
width: 70px !important;
    height: 70px !important;
        object-fit: contain;
        margin-bottom:22px;
        margin-top:20px;
    }

    .title {
        font-size: 20px !important;
        font-weight: 700;
margin-block: 10px;
        background: linear-gradient(to right, #161664, #3F88BA);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        line-height: 1.3;
    }
            .title.mobile-even {
        background: linear-gradient(to right, #003E37, #00A491);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }

    .text {
        font-size: 15px !important;
        line-height: 1.5;
        color: #233467;
        font-weight: 500;
        margin-block:22px;
        letter-spacing: 2px;
        flex: 2;
    }
  }
//     @media screen and (min-width: 1300px) and (max-width: 1535px {
// .cards {
//         display: flex;
//         justify-content: center;
//         flex-wrap: nowrap;
//         gap: 20px;
//         padding-bottom: 20px;
//         scrollbar-width: none; /* Firefox */
//         -ms-overflow-style: none; /* IE and Edge */
//     }
//   }
    .cards::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }

    .card1 {
        border-radius: 24px;
        padding: 35px 30px 20px 30px;
        min-width: 320px;
        width: 100%;
        text-align: left;
        flex: 1;
        /* REMOVED ANIMATION PROPERTIES */
        opacity: 1; /* Changed from 0 to 1 */
        transform: translateY(0); /* Changed from translateY(20px) */
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    /* REMOVED .card1.is-inview CLASS */

    .card1:hover {
        transform: translateY(-8px);
    }

    .blueBg {
        background-image: url('/assets/bluebg.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .greenBg {
        background-image: url('/assets/greenbg.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .icon-container {
        display: block;
    }

    .icon {
width: 100px;
    height: 100px;
        object-fit: contain;
        margin-bottom:22px;
        margin-top:20px;
    }

    .title {
        font-size: 26px;
        font-weight: 700;
margin-block: 10px;
        background: linear-gradient(to right, #161664, #3F88BA);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        line-height: 1.3;
    }
            .title.mobile-even {
        background: linear-gradient(to right, #003E37, #00A491);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }

    .text {
        font-size: 19px;
        line-height: 1.5;
        color: #233467;
        font-weight: 500;
        margin-block:22px;
        letter-spacing: 2px;
        flex: 2;
    }

    .toggle-btn {
        background: none;
        border: none;
        cursor: pointer;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        transition: background-color 0.2s ease;
    }

    .toggle-btn:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .toggle-btn:active {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .toggle-icon {
        width: 20px;
        height: 12px;
        object-fit: contain;
        flex-shrink: 0;
    }

    /* Specific optimizations for 1366×768 and similar resolutions */
    @media (max-width: 1400px) and (min-width: 1200px) {
        .cards {
            gap: 24px;
        }
        
        .card1 {
            min-width: 300px;
            padding: 32px 26px;
        }
        
        .title {
            font-size: 20px;
            margin-bottom: 20px;
            min-height: 60px;
        }
        
        .text {
            font-size: 15px;
        }
        
        .icon {
            width: 70px;
            height: 70px;
        }
    }

    @media (max-width: 1200px) {
        .cards {
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }
        .card1 {
            min-width: 280px;
            max-width: 340px;
            padding: 30px 25px;
        }
        
        .title {
            font-size: 19px;
            min-height: 56px;
        }
        
        .text {
            font-size: 14px;
        }
        
        .icon {
            width: 65px;
            height: 65px;
        }
    }

    /* Mobile optimizations to match your image */
    @media (max-width: 768px) {
        .cards {
            flex-direction: column;
            align-items: center;
            gap: 30px;
            padding: 0 20px;
        }

        .greenBg {
            background-image: url('/assets/uniap.png') !important;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
        
        .card1 {
            min-width: unset;
            width: 100%;
            max-width: 100%;
            padding: 30px 25px 50px 25px;
            text-align: center;
            border-radius: 20px;
            margin: 0;
            position: relative;
            display: block; /* Reset flex for mobile */
        }
        
        .icon-container {
            display: block;
            text-align: center;
        }
        
        .icon {
            width: 70px;
            height: 70px;
        }
        
        .title {
            font-size: 18px;
            margin-bottom: 15px;
            text-align: center;
            flex: none; /* Reset flex for mobile */
            min-height: auto;
        }
        
        .text {
            font-size: 14px;
            line-height: 1.6;
            text-align: center;
            margin-bottom: 35px;
            max-height: 3.2em;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            flex: none; /* Reset flex for mobile */
        }

        .card1.open .text {
            max-height: 300px;
            -webkit-line-clamp: unset;
        }

        .card1:hover {
            transform: none;
        }

        .toggle-btn {
            display: block;
        }
    }

    /* Extra small mobile devices */
    @media (max-width: 480px) {
        .cards {
            padding: 0 15px;
            gap: 25px;
        }

        .card1 {
            padding: 5px 15px 20px 15px;
        }
        
        .icon {
            width: 60px;
            height: 60px;
        }
        
        .title {
            font-size: 15px;
            margin-bottom: 12px;
        }
        
        .text {
            font-size: 13px;
            margin-bottom: 25px;
        }

        .toggle-icon {
            width: 18px;
            height: 10px;
        }
    }

    /* Desktop: hide toggle button */
    @media (min-width: 769px) {
        .toggle-btn {
            display: none;
        }
    }
`}</style>
        </div>
    );
};

export default APBenefits;