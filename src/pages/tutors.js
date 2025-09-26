import StudentAchievements from '@/components/tutors/StudentAchivement';
import { useEffect, useRef } from 'react';
import CurriculumTestsComponent from '@/components/tutors/curriculum';
import InfoCard from '@/components/tutors/infoCard';
import OurTrainers from '@/components/tutors/ourTrainers';
import SubjectsCard1 from '@/components/tutors/SubjectCard1';
import IgniteAchievements from '@/components/tutors/igniteAchivement';
import BlogSection from '@/components/tutors/BlogSection';
import UpsSection from '@/components/tutors/UspsSection';
import Accordion from '@/components/tutors/accordian';
import FAQSection from '@/components/tutors/FaqSection';
import MarqueeBanner from '@/components/tutors/MarqueeBanner';
import LifeAtIgniteCarousel from '@/components/tutors/LifeAtIgniteCarousel';
import ReviewsSection from '@/components/tutors/ReviewsSection';

const Tutors = () => {
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
        <CurriculumTestsComponent />
      </section>

      <section data-scroll-section>
        <SubjectsCard1 />
      </section>

      <section data-scroll-section>
        <ReviewsSection />
      </section>

      <section data-scroll-section>
        <MarqueeBanner />
      </section>

      <section data-scroll-section>
        <OurTrainers />
      </section>
            <section data-scroll-section>
        <IgniteAchievements />
      </section>

      <section data-scroll-section>
        <UpsSection />
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

export default Tutors;
