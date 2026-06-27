

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

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    path: (
      <>
        <path d="M4 9h3v11H4zM5.5 3.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM10.5 9h3v1.7c.6-1 1.7-1.9 3.3-1.9 2.6 0 4.2 1.7 4.2 5.1V20h-3v-5.6c0-1.5-.6-2.6-2-2.6-1.1 0-1.8.8-2.1 1.5-.1.3-.1.6-.1 1V20h-3z" />
      </>
    ),
  },
  {
    name: "Discord",
    href: "https://discord.com",
    path: (
      <path d="M9 8.5c-3 0-5 2.5-5 6 0 2 .8 3 1.5 3.5.4-.5.7-1 .9-1.5-.4-.2-.8-.4-1-.7.2.1.5.3.8.4 1.3.5 2.7.8 4.3.8s3-.3 4.3-.8c.3-.1.6-.3.8-.4-.2.3-.6.5-1 .7.2.5.5 1 .9 1.5.7-.5 1.5-1.5 1.5-3.5 0-3.5-2-6-5-6-.2.4-.4.8-.5 1.2-.7-.1-1.4-.1-2.1 0-.1-.4-.3-.8-.5-1.2zm-.9 4.3c.6 0 1 .6 1 1.2 0 .7-.4 1.2-1 1.2s-1-.5-1-1.2c0-.6.4-1.2 1-1.2zm5.8 0c.6 0 1 .6 1 1.2 0 .7-.4 1.2-1 1.2s-1-.5-1-1.2c0-.6.4-1.2 1-1.2z" />
    ),
  },
  {
    name: "X",
    href: "https://x.com",
    path: <path d="M5 4l6.5 8.5L5.3 20H7l5.2-6 4.3 6H21l-6.8-9 6-7.5h-1.8l-5 6.3L9.7 4z" />,
  },
];

export default function Footer() {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".char");
    gsap.set(chars, { color: "#1c1c1c" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 20%",
        // play on enter, do nothing on leave / enter-back / leave-back —
        // one-shot, never reverses when scrolling back up.
        toggleActions: "play none none none",
      },
    });

    tl.to(chars, {
      color: "#ffffff",
      ease: "none",
      duration: 1,
      stagger: {
        each: 1 / chars.length,
        from: "start",
      },
    });

    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <footer className="relative bg-black px-4 sm:px-8 pt-16 sm:pt-20  overflow-hidden">
      <div className="max-w-full p-4 mx-auto relative">
        
        <h2
          ref={headingRef}
          className="font-display tracking-tight text-[16vw] sm:text-[12vw] md:text-[20rem] z-2 text-center pb-20 leading-none select-none mb-12 sm:mb-16"
        >
          {splitToChars("JOIN THE CLUB")}
        </h2>
        
        <div className="mb-24 flex flex-col gap-10">
        <div className="flex gap-4 sm:gap-5 ">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center text-black hover:scale-105 transition-transform"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {s.path}
              </svg>
            </a>
          ))}
        </div>

        <div className="max-w-xs flex whitespace-nowrap gap-4">
          <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-steel text-sm mb-3">Terms and conditions</a>
          <span className="text-white">•</span>
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-steel text-sm mb-3">Privacy Policy</a>
          <span className="text-white" >•</span>
          <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-steel text-sm mb-3">Licensing Agreement</a>
           
        </div>
        </div>

        <img
          src="/images/footerpic.png"
          alt=""
          aria-hidden="true"
          className="lg:block sm:block absolute -right-8 bottom-0 w-48 sm:w-64 md:w-80  pointer-events-none select-none"
        />
      </div>
    </footer>
  );
}