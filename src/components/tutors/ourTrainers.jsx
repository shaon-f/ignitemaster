

import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const trainers = [
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Chemistry & Environmental Management",
    experience: "4+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Biology, Chemistry & Physics",
    experience: "4+ YEARS",
    color: "green",
  },
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Chemistry & Environmental Management",
    experience: "4+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Biology, Chemistry & Physics",
    experience: "4+ YEARS",
    color: "green",
  },
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Chemistry & Environmental Management",
    experience: "4+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Biology, Chemistry & Physics",
    experience: "4+ YEARS",
    color: "green",
  },
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Chemistry & Environmental Management",
    experience: "4+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Biology, Chemistry & Physics",
    experience: "4+ YEARS",
    color: "green",
  },

];


export default function Trainers({ }) {

  const [isTrainersSwiper, setIsTrainersSwiper] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsTrainersSwiper(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      <section className="trainersSection">
        <div className="container">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="SubHeading trainersSubheading">OUR TRAINERS</span>
          </div>

          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section trainersTitle"
            style={{ animationDelay: "0.2s" }}
          >
            LOREM IPSUM DOLOR SIT AMET,
            CONSECTETUR <span className="trainersHighlight">ADIPISCING</span>
          </h2>

          {isTrainersSwiper ? (
            <div className="trainersSwiperWrap">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true, el: ".trainersPagination" }}
                breakpoints={{
                  0: { slidesPerView: 1.4 },
                  575: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
                className="trainersSwiper"
              >
                <button className="swiper-button-prev customNavBtn" tabIndex={0} aria-label="Previous trainer">
                  <img
                    src="/images/right-arrow-blue.png"
                    alt="Prev"
                    style={{ transform: "rotate(180deg)" }}
                    width={32}
                    height={32}
                  />
                </button>

                {trainers.map((t, i) => (
                  <SwiperSlide key={i}>
                    {({ isActive }) => (
                      <div
                        data-color={t.color}
                        className={` trainerCard ${isActive ? "activeTrainer" : "inactiveTrainer"}`}
                        style={{ animationDelay: 0.2 }}
                      >
                        <div className="trainerName">{t.name}</div>
                        <div className="trainerImgWrap">
                          <img src={t.img} alt={t.name} className="trainerImg" />
                        </div>
                        <div className="trainerSubtitle subtitleBox">
                          {t.subtitle}
                        </div>
                        <div className="trainerExp">{t.experience}</div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}

                <button className="swiper-button-next customNavBtn" tabIndex={0} aria-label="Next trainer">
                  <img
                    src="/images/right-arrow-blue.png"
                    alt="Next"
                    width={32}
                    height={32}
                  />
                </button>
              </Swiper>

              {!isMobile && <div className="trainersPagination"></div>}

              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section trainersSeeMore"
                style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
              >
                SEE MORE
              </button>
              {isMobile && <div className="trainersPagination"></div>}
            </div>
          ) : (
            <>
              <div className="trainersGrid">
                {trainers.map((t, i) => (
                  <div
                    key={i}
                    data-color={t.color}
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className="fade-in-section trainerCard"
                    style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                  >
                    <div className="trainerName">{t.name}</div>
                    <div className="trainerImgWrap">
                      <img src={t.img} alt={t.name} className="trainerImg" />
                    </div>
                    <div
                      className="trainerSubtitle"
                      style={{
                        fontSize: "19px",
                        color: "var(--black-color)",
                        opacity: 0.5,
                        marginBottom: "10px",
                        position: "absolute",
                        zIndex: 9,
                        maxWidth: "98%",
                        fontWeight: 500,
                      }}
                    >
                      {t.subtitle}
                    </div>

                    <div className="trainerExp">{t.experience}</div>
                  </div>
                ))}
              </div>

              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section trainersSeeMore"
                style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
              >
                SEE MORE
              </button>
            </>
          )}
        </div>
        <style jsx>{`

        /* Trainer Section  */
.subtitleBox {
  font-size: 19px;
  color: var(--black-color);
  opacity: 0.5;
  margin-block: 5px;
  position: absolute;
  z-index: 9;
  max-width:71%;
  font-weight: 500;
}

/* Handle responsive max-width */
@media (max-width: 768px) {
  .subtitleBox {
    max-width: 94%;
  }
}

  @media (min-width: 1536px) and (max-width: 1919px) {
  .subtitleBox {
    max-width: 88%;
  }
}
  @media (min-width: 1200px) and (max-width: 1535px) {
  .subtitleBox {
    max-width: 100%;
    font-size:17.5px;
  }
}

.trainersSection {
  padding: 100px 0 40px 0;
  background: var(--white-bg);
  text-align: center;
}
.trainersSection .trainersHeader {
  margin-bottom: 32px;
}
.trainersSection .trainersSubheading {
  font-size: 1.8vw;
}
.trainersSection .trainersIcon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.trainersSection .trainersTitle {
  font-size: 2.2vw;
  font-weight: 700;
  max-width: 60%;
  margin: 40px auto;
  line-height: 1.1;
  text-transform: uppercase;
  color: var(--blue-color);
}
.trainersSection .trainersHighlight {
  background: linear-gradient(
    to left,
    var(--green-color),
    var(--lightgreen-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.trainersSection .trainersGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px 24px;
  justify-items: center;
  margin-bottom: 36px;
}
.trainersSection .trainerCard {
  padding: 20px 0 30px 0;
  border-radius: 40px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: box-shadow 0.2s;
  overflow: hidden;
}
.trainersSection .trainerCard:nth-child(7),
.trainersSection .trainerCard:nth-child(9) {
  translate: 0 20px;
}

.trainersSection .trainerCard[data-color="blue"] {
  background: linear-gradient(var(--border-color) 0%, transparent 50%);
}
.trainersSection .trainerCard[data-color="green"] {
  background: linear-gradient(to top, var(--green-text) 0%, transparent 70%);
}
.trainersSection .trainerCard[data-color="blue"]:before {
  content: "";
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, var(--white-bg) 50%, transparent);
}
.trainersSection .trainerCard[data-color="green"]:before {
  content: "";
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, #d7f6e6 50%, transparent);
}
.trainersSection .trainerName {
  font-size: 1vw;
  font-weight: 500;
  color: var(--black-color);
  margin-bottom: 8px;
  padding: 0 10px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.trainersSection .trainerImgWrap {
  width: 100%;
  height: 370px; /* fixed uniform height */
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trainersSection .trainerImg {
  width: 100%;
  height: 100%;
  object-fit: cover; /* keeps proportions and crops */
}
}
/* Default positioning for all screens */
.trainersSection .trainerSubtitle {
    font-size: 19px !important;
    color: var(--black-color) !important;
    opacity: 0.5 !important;
    margin-bottom: 10px !important;
    position: absolute !important;
    z-index: 9 !important;
    max-width: 69% !important;
    font-weight: 500 !important;
}


.trainersSection .trainerExp {
  background: linear-gradient(to left, #3f88ba, var(--blue-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  width: 80%;
  font-size: 1.2vw;
  padding-top: 5px;
  position: absolute;
  z-index: 9;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}

/* PC Layout: Name → Image → Experience → Subtitle */
@media (min-width: 1200px) {
  .trainersSection .trainerExp {
    bottom: 73px;
  }
  .trainersSection .trainerSubtitle {
    bottom: 9px;
  }
  .trainersSection .trainerCard:nth-child(even) .trainerExp {
    bottom: 45px;
    transform: translateY(0);
  }
  .trainersSection .trainerCard:nth-child(even) .trainerSubtitle {
    bottom: 10px;
  }
}

.trainersSection .trainerCard[data-color="green"] .trainerExp {
  background: linear-gradient(
    to left,
    var(--green-color),
    var(--lightgreen-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.trainersSection .trainersSeeMore {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 5px 40px;
  border-radius: 40px;
  border: 3px solid transparent;
  background-color: var(--white-color);
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, var(--border-color), #e7f6ff) border-box;
  color: var(--blue-color);
  font-size: 1vw;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  z-index: 1;
}

.trainersSection .trainersSeeMore::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent,
    #e7f6ff 60%,
    var(--border-color) 85%,
    var(--border-color)
  );
  z-index: -1;
  transition: transform 0.6s ease-in-out;
}

.trainersSection .trainersSeeMore:hover::before {
  transform: translateX(-50%);
}

.trainersSection .trainersSeeMore * {
  position: relative;
  z-index: 1;
}

.trainersSection .trainersSeeMore:hover {
  color: var(--black-color);
  transform: scale(1.05);
}

/* Pagination dots styling - Force blue color */
.trainersSection .trainersPagination {
  margin: 32px 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 24px;
}

.trainersSection .trainersPagination :global(.swiper-pagination-bullet) {
  width: 12px !important;
  height: 6px !important;
  border-radius: 3px !important;
  background: #d1d1d1 !important;
  opacity: 1 !important;
  margin: 0 4px !important;
  transition: all 0.3s ease !important;
}

.trainersSection .trainersPagination :global(.swiper-pagination-bullet-active) {
  background: #666666 !important;
  width: 24px !important;
}

/* Additional fallback for pagination dots */
.swiper-pagination-bullet {
  width: 12px !important;
  height: 6px !important;
  border-radius: 3px !important;
  background: #d1d1d1 !important;
  opacity: 1 !important;
}

.swiper-pagination-bullet-active {
  background: #666666 !important;
  width: 24px !important;
}

.trainersSection .customNavBtn {
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  transition: none;
  padding: 0;
}
.trainersSection .customNavBtn img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: none;
}
.trainersSection .customNavBtn:after,
.trainersSection .customNavBtn:after {
  display: none;
}

@media (max-width: 1199px) {
  .trainersSection .trainerImg {
    height: 300px;
  }
  .trainersSection .trainerCard[data-color="green"] {
    margin-bottom: 20px;
  }
  /* Mobile Layout: Name → Image → Subtitle → Experience */
  .trainersSection .trainerSubtitle {
    bottom: 60px;
  }
  .trainersSection .trainerExp {
    font-size: 20px;
    bottom: 20px;
    padding-top: 10px;
  }
  .trainersSection .trainerCard[data-color="green"] .trainerExp {
    background: linear-gradient(
      to right,
      var(--lightgreen-color),
      var(--green-color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .trainersSection .trainerCard[data-color="green"]:before{
    background: linear-gradient(to top, #d7f6e6 60%, transparent);
  }
}
@media (max-width: 1100px) {
  .trainersSection .trainersGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 12px;
  }
  .trainersSection .trainersSubheading {
    font-size: 1.4rem;
  }
  .trainersSection .trainersTitle {
    font-size: 2rem;
  }
  .trainersSection .trainerName,
  .trainersSection .trainerExp,
  .trainersSection .trainersSeeMore {
    font-size: 1rem;
  }
  .trainersSection .trainerSubtitle {
    font-size: 0.9rem;
  }
}
@media (max-width: 700px) {
  .trainersSection .trainersGrid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .trainersSection .trainersSubheading {
    font-size: 1.2rem;
  }
  .trainersSection .trainersTitle {
    font-size: 1.4rem;
    max-width: 100%;
    margin: 20px 0;
  }
  .trainersSection .customNavBtn {
    width: 32px;
    height: 32px;
  }
}
        `}</style>
      </section>
    </>
  );
}