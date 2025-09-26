import MovingBanner from '@/components/home/MovingBanner';
import Testimonial from '@/components/home/Testimonial';
import Accordion from '@/components/ib/accordian';
import BlogSection from '@/components/ib/BlogSection';
import CourseCard from '@/components/ib/CourseCard';
import IBCurriculumStages from '@/components/ib/Curriculum';
import FAQSection from '@/components/ib/FaqSection';
import IgniteAchievements from '@/components/ib/IgniteAchievements';
import InfoCard from '@/components/ib/InfoCard';
import LifeAtIgniteCarousel from '@/components/ib/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/ib/MarqueeBanner';
import ReviewsSection from '@/components/ib/ReviewsSection';
import StudentAchievements from '@/components/ib/StudentAchivement';
import SubjectsCard from '@/components/ib/SubjectCard';
import UniImagesCard from '@/components/ib/universityCrad';
import UspsSection from '@/components/ib/UspsSection';
import { University } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Ib = () => {
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
        <UniImagesCard />
      </section>

      <section data-scroll-section>
        <StudentAchievements />
      </section>

      <section data-scroll-section>
        <IBCurriculumStages />
      </section>

      <section data-scroll-section>
        <SubjectsCard />
      </section>
      <section data-scroll-section>
        <MarqueeBanner />
      </section>

      <section data-scroll-section>
        <ReviewsSection />
      </section>

      <section data-scroll-section>
        <IgniteAchievements />
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

export default Ib;
