import Accordion from '@/components/act/accrodian';
import BlogSection from '@/components/act/BlogSection';
import CourseCard from '@/components/act/CourseCard';
import FAQSection from '@/components/act/FaqSection';
import IgniteAchievements from '@/components/act/IgniteAchievements';
import InfoCard from '@/components/act/InfoCard';
import LifeAtIgniteCarousel from '@/components/act/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/act/MarqueeBanner';
import ReviewsSection from '@/components/act/ReviewsSection';
import StudentAchievements from '@/components/act/StudentAchivement';
import SubjectsCard from '@/components/act/SubjectCard';
import SubjectsCard1 from '@/components/act/SubjectCard1';
import UspsSection from '@/components/act/UspsSection';
import { useEffect, useRef } from 'react';

const act = () => {
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

      <section data-scroll-section>
        <SubjectsCard />
      </section>
      <section data-scroll-section>
        <SubjectsCard1 />
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
        <MarqueeBanner />
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

export default act;
