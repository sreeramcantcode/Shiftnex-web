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
      <div className="relative max-w-full">
      <img src="/images/10pm.png" className=" absolute left-1/2 -translate-x-16 top-20 " alt="" />
      </div>
     
    
    </section>
  );
}
