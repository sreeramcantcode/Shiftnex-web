export default function WhatWeCreate() {
  return (
    <section className="bg-black px-4 sm:px-8 md:px-12 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-start">
        <div className="w-full md:w-2/5 shrink-0">
          <img
            src="/images/yellow-porsche.png"
            alt="Yellow sports car driving on a forest road"
            className="w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover rounded-2xl"
          />
        </div>
        <div className="w-full md:w-3/5">
          <h2 className="heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-6 tracking-wide">
            WHAT WE CREATE
          </h2>
          <p className="text-steel sub text-base sm:text-2xl leading-relaxed text-justify">
            From cinematic visuals and editorial features to social
            campaigns and digital commercials, we create automotive content
            designed to leave a lasting impression. Every project is shaped
            with intention, balancing emotion, design, and technical accuracy
            to tell stories people genuinely connect with. Whether it's
            celebrating an icon or introducing something new, our work is
            crafted to make every vehicle feel unforgettable long after the
            screen goes dark.
          </p>
        </div>
      </div>
    </section>
  );
}
