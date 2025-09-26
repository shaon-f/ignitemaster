import AboutBanner from "@/components/aboutus/Banner";
import IgniteAboutCard from "@/components/aboutus/IgniteAboutCard";
import WhyChooseUs from "@/components/aboutus/WhyChooseUs";
import Timeline from "@/components/aboutus/Timeline";
import MeetOurFounders from "@/components/aboutus/MeetOurFounders";
import { useEffect, useRef } from "react";
import TutoringHeroSection from "@/components/aboutus/BottomSub";
import MarqueeBanner from "@/components/aboutus/MarqueeBanner";
import LifeAtIgniteCarousel from "@/components/aboutus/LifeAtIgniteCarousel";

const About = () => {
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);

  useEffect(() => {
    let scroll;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!scrollRef.current) return;

      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
        // optional:
        getDirection: true,
        getSpeed: true,
        multiplier: 1,
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

  return (
    <div ref={scrollRef} className="overflow-hidden" data-scroll-container>
      <section data-scroll-section>
        <AboutBanner />
      </section>
      <section data-scroll-section>
        <IgniteAboutCard />
      </section>
      <section data-scroll-section>
        <WhyChooseUs />
      </section>
      <section data-scroll-section>
        <Timeline />
      </section>
      <section data-scroll-section>
        <MeetOurFounders />
      </section>
      <section data-scroll-section>
        <MarqueeBanner />
      </section>
      <section data-scroll-section>
        <LifeAtIgniteCarousel />
      </section>
      <section data-scroll-section>
        <TutoringHeroSection />
      </section>
    </div>
  );
};

export default About;