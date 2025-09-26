import Accordion from '@/components/ap/accrodian';
import BlogSection from '@/components/ap/BlogSection';
import APBenefits from '@/components/ap/chooseApp';
import CourseCard from '@/components/ap/CourseCard';
import FAQSection from '@/components/ap/FaqSection';
import IgniteAchievements from '@/components/ap/IgniteAchievements';
import InfoCard from '@/components/ap/InfoCard';
import LifeAtIgniteCarousel from '@/components/ap/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/ap/MarqueeBanner';
import ReviewsSection from '@/components/ap/ReviewsSection';
import StudentAchievements from '@/components/ap/StudentAchivement';
import SubjectsCard1 from '@/components/ap/SubjectCard1';
import UspsSection from '@/components/ap/UspsSection';
import { useEffect, useRef } from 'react';

const ap = () => {
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
    <div ref={scrollRef} className='overflow-hidden' data-scroll-container>
      <section data-scroll-section>
        <InfoCard />
      </section>

      <section data-scroll-section>
        <StudentAchievements />
      </section>

      <section data-scroll-section>
        <CourseCard />
      </section>

      {/* <section data-scroll-section>
        <SubjectsCard />
      </section> */}
      <section data-scroll-section>
        <SubjectsCard1 />
      </section>
      <section data-scroll-section>
        <APBenefits />
      </section>

      <section data-scroll-section>
        <ReviewsSection />
      </section>
      <section data-scroll-section>
        <MarqueeBanner />
      </section>

      <section data-scroll-section>
        <UspsSection />
      </section>

      <section data-scroll-section>
        <LifeAtIgniteCarousel />
      </section>

      <section data-scroll-section>
        <FAQSection />
      </section>

      <section data-scroll-section>
        <BlogSection />
      </section>
      <section data-scroll-section>
        <Accordion />
      </section>
    </div>
  );
};

export default ap;
