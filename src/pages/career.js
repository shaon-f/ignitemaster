import CareersBanner from '@/components/career/Banner';
import CareerForm from '@/components/career/CareerForm';
import IgniteCareerCard from '@/components/career/IgniteCareerCard';
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
        <CareersBanner />
      </section>
      <section data-scroll-section>
        <IgniteCareerCard />
      </section>
      <section data-scroll-section>
        <CareerForm />
      </section>
    </div>
  );
};

export default act;
