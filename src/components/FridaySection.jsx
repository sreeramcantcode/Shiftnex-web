export default function FridaySection() {
  return (
    <section className="relative w-full p-20 h-[60vh] sm:h-[70vh] md:h-[80vh] bg-black overflow-hidden">
      <div className="p-20">
      <img
        src="/images/fri-car.png"
        alt="Sports car on a racetrack at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
      />
        </div>
      <h2 className="absolute left-2 sm:left-4 md:left-6 top-1/2 pt-16 -translate-y-1/2 font-display text-white/25 text-[28vw] sm:text-[22vw] md:text-[52rem] leading-none select-none">
        FRI
      </h2>
      <p className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 font-heading text-white/70 text-sm sm:text-base [writing-mode:vertical-rl] tracking-widest">
        22:00 IST
      </p>
    
    </section>
  );
}
