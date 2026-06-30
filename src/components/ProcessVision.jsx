"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessVision() {
  const sectionRef = useRef(null);
  const theRef = useRef(null);
  const processRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [theRef.current, processRef.current, visionRef.current];

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,           
        },
      })
        .to([theRef.current, processRef.current, visionRef.current], { color: "#9a9a9a", ease: "none" })
        .to([theRef.current, processRef.current, visionRef.current], { color: "#1c1c1c", ease: "none" });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount / fast refresh
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black px-4 flex justify-center sm:px-8 pt-6 pb-10 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-full mx-auto relative">
        <div className="flex max-w-full w-full gap-1 leading-none">
          <span
            ref={theRef}
            className="font-display left-0 -mt-10 text-[20vw] tracking-tighter sm:text-[15vw] md:text-[10rem] lg:text-[40rem] text-[#1c1c1c] select-none"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            }}
          >
            THE
          </span>

          <div className="flex flex-col">
            <span
              ref={processRef}
              className="font-display text-[13vw] sm:text-[10vw] tracking-tighter md:text-[6.5rem] lg:text-[17rem] text-[#262626] select-none ml-2 sm:ml-4"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
              }}
            >
              PROCESS
            </span>

            <div className="lg:-mt-20 lg:ml-6 sm:-mt-4">
              <span
                ref={visionRef}
                className="font-display text-[16vw] tracking-tighter sm:text-[12vw] md:text-[8rem] lg:text-[23rem] text-[#262626] select-none"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
                }}
              >
                VISION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}