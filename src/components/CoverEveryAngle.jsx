"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Splits a string into an array of <span> chars, preserving spaces
 * as real spaces (so wrapping/whitespace behaves normally).
 */
function splitToChars(text) {
  return text.split("").map((char, i) => (
    <span
      className="char inline-block text-[#1c1c1c]"
      key={i}
      style={{ whiteSpace: char === " " ? "pre" : "normal" }}
    >
      {char}
    </span>
  ));
}

export default function CoverEveryAngle() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const pinTarget = pinRef.current;

    // Each block gets its own ref, its own char query, and its own
    // ScrollTrigger — this is what lets them start at different scroll
    // positions instead of all firing off one shared timeline.
    const blocks = [
      { ref: headingRef, pin: true }, // pins while the heading reveals
      { ref: paraRef, pin: false },
      { ref: line1Ref, pin: false },
      { ref: line2Ref, pin: false },
    ];

    const triggers = [];

    blocks.forEach(({ ref, pin }) => {
      const el = ref.current;
      if (!el) return;

      const chars = el.querySelectorAll(".char");
      gsap.set(chars, { color: "#1c1c1c" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
      
          start: "top 10%",
          end: "top 20%",
          
          toggleActions: "play none none none",
        
          ...(pin
            ? {
                pin: pinTarget,
                pinSpacing: true,
                anticipatePin: 1,
                end: "+=500",
              }
            : {}),
        },
      });

      tl.to(chars, {
        color: "#ffffff",
        ease: "none",
        duration: 1,
        stagger: {
          each: 1/chars.length,
          from:"start",
        },
      });

      triggers.push(tl.scrollTrigger);
    });

    return () => {
      triggers.forEach((st) => st && st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black">
      <div ref={pinRef} className="px-4 sm:px-8 py-16 sm:py-24 overflow-hidden">
        <div className="max-w-full mx-auto relative">
          <h2
            ref={headingRef}
            className="font-display text-center text-[11vw] sm:text-[7vw] md:text-[12rem] whitespace-nowrap leading-none select-none mb-8 sm:mb-10"
          >
            {splitToChars("WE COVER EVERY ANGLE")}
          </h2>

          <img
            src="images/Rectangle.png"
            alt=""
            className="opacity-85 left-6 absolute bottom-12 top-16 h-40 w-full"
          />

          <div className="w-full max-w-full flex justify-center">
            <p
              ref={paraRef}
              className="text-steel sub text-center text-base sm:text-lg leading-relaxed max-w-5xl"
            >
              {splitToChars(
                "From timeless classics and everyday icons to modern hypercars, race machines, and everything in between, our stories span the full spectrum of automotive culture. Whether it's the thrill of motorsport, the elegance of grand tourers, or the innovation behind tomorrow's performance cars, we create content that celebrates every corner of the automotive world with the same passion and attention to detail."
              )}
            </p>
          </div>

          <div className="mt-16 flex relative max-h-full flex-col items-center sm:mt-24">
            <p
              ref={line1Ref}
              className="font-display md:text-[15rem] leading-none select-none"
            >
              {splitToChars("AND WHEN WE SAY")}
            </p>
            <img
              src="images/Rectangle.png"
              alt=""
              className="opacity-90 left-6 absolute top-32 h-40 w-full"
            />

            <p
              ref={line2Ref}
              className="font-display md:text-[20rem] leading-none select-none"
            >
              {splitToChars("EVERY ANGLE")}
            </p>
            <img
              src="images/Rectangle.png"
              alt=""
              className="opacity-90 left-9 absolute bottom-0 h-40 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}