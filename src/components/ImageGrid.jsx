const images = [
  { src: "/images/grid-f1.png", alt: "Formula 1 car racing on track" },
   { src: "/images/grid-hypercar.png", alt: "Green GT3 race car on a circuit" },
  { src: "/images/grid-gt3.png", alt: "Green GT3 race car on a circuit" },
 
];

export default function ImageGrid() {
  return (
    <section className="bg-black px-4 sm:px-8 md:px-12 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="w-full h-[280px] sm:h-[420px] md:h-[460px] object-cover rounded-xl transition-transform duration-500 ease-out hover:scale-[1.03]"
          />
        ))}
      </div>
    </section>
  );
}
