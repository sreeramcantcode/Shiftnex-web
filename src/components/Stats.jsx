import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { val: 0 };

      gsap.to(obj, {
        val: 1400,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = `${Math.round(obj.val)}+`;
          }
        },
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
        .to(numberRef.current, { color: "#9a9a9a", ease: "none" })
        .to(numberRef.current, { color: "#1c1c1c", ease: "none" });

      gsap.fromTo(
        textRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black px-4 sm:px-8 pb-16 sm:pb-24 pt-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative h-fit">
          <h2
            className="font-display text-[18vw] sm:text-[14vw] md:text-[11rem] lg:text-[30rem] leading-none text-[#1c1c1c] select-none tracking-wider"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            }}
          >
            <span ref={numberRef}>0+</span>
          </h2>
          <p
            ref={textRef}
            className="font-display font-bold lg:absolute bottom-0 left-20 tracking-wider text-steel text-lg sm:text-2xl md:text-6xl lg:text-7xl mt-16"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            }}
          >
            INVENTORY OF AUTOMOTIVE HISTORY
          </p>
        </div>
      </div>
    </section>
  );
}
