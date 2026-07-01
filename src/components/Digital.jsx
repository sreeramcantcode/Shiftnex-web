import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Digital() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
        .to(headingRef.current, { color: "#9a9a9a", ease: "none" })
        .to(headingRef.current, { color: "#161616", ease: "none" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black px-4 sm:px-8 pb-16 sm:pb-20 pt-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative">
          
        <h2
          ref={headingRef}
          className="font-display text-[20vw] sm:text-[16vw] md:text-[13rem] lg:text-[25rem] w-full leading-none text-[#161616] select-none"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          }}
        >
          DIGITAL
        </h2>

         <p className="font-heading text-steel text-base sm:text-lg -mt-2 sm:-mt-4 mb-6">
          Why?
        </p>
        
        </div>
        <div>

        
        
        
        <p className="text-steel text-base sm:text-lg leading-relaxed text-justify max-w-5xl mx-auto">
          Digital production <strong className="text-white font-semibold">removes the limits</strong> of
          traditional automotive content. No transportation, no permits, no
          unpredictable weather, and no location constraints. Every detail is
          crafted with complete creative freedom, delivering premium visuals
          faster, more efficiently, and without compromising quality. It
          gives brands the flexibility to tell bigger stories, explore bolder
          ideas, and bring any vision to life wherever imagination leads.
        </p>
        </div>
      </div>
    </section>
  );
}
