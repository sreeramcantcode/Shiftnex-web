export default function WeAreShiftnex() {
  return (
    <section className="bg-black px-4 sm:px-8 md:px-12 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="w-full md:w-2/5 shrink-0">
          <img
            src="/images/greencar.webp"
            alt="Classic green car parked on a gravel driveway"
            className="w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover rounded-2xl transition-transform duration-500 ease-out hover:scale-[1.03]"
          />
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="heading font-extrabold text-3xl sm:text-4xl md:text-7xl text-white mb-6 tracking-wide">
            WE ARE SHIFTNEX
          </h2>
          <p className="text-steel sub text-base sm:text-2xl leading-relaxed text-left sm:text-justify">
            We are Shiftnex, a digital automotive content studio built on a
            simple belief: <strong className="text-white font-semibold">every machine has a story worth telling</strong>.
            No garages, no permits, no waiting on borrowed cars. We build
            worlds frame by frame, using the tools of tomorrow to capture the
            cars that defined yesterday. What started as one Friday post is
            now a growing collective of storytellers, obsessed with
            precision, and in love with everything that moves fast.
          </p>
        </div>
      </div>
    </section>
  );
}
