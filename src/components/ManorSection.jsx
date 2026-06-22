export default function ManorSection() {
  return (
    <section className="bg-black">
      <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] overflow-hidden">
        <img
          src="/images/manor.png"
          alt="Manor house with luxury cars parked outside at dusk"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-heading italic text-center text-white/90 text-base sm:text-lg md:text-xl py-10 sm:py-14">
        We mean every word of it...
      </p>
    </section>
  );
}
