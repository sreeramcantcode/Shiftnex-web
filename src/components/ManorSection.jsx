export default function ManorSection() {
  return (
    <section className="bg-black">
      <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[110vh] overflow-hidden">
        <img
          src="/images/manor.png"
          alt="Manor house with luxury cars parked outside at dusk"
          className="w-full h-full object-cover z-0"
        />
        <div className="absolute pt-10 sm:pt-20 md:pt-40 top-1/2 inset-0">
        <p
          className="font-heading z-10 italic text-center text-white text-xl sm:text-2xl md:text-3xl py-10 sm:py-14"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
          }}
        >
        We mean every word of it...
      </p>
      </div>
      </div>
      
    </section>
  );
}
