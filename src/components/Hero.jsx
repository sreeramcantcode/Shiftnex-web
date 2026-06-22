export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[88vh] lg:h-screen pt-14 sm:pt-16 bg-black overflow-hidden">
      
      <div className="relative">
  <img
    src="/images/Heroimg.png"
    alt="Hero car speeding down a road"
    className="w-full h-full object-cover"
  />

  <img
    src="/images/Hero2.png"
    alt="overlay"
    className="absolute left-0 top-0 h-full w-auto z-10"
  />
</div>
      <img src="/images/Hero2.png" className="w-full h-full border" alt="" />
      <button
        aria-label="Scroll down"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}
