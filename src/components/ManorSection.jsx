export default function ManorSection() {
  return (
    <section className="bg-black">
      <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[110vh] overflow-hidden">
        <img
          src="/images/manor.png"
          alt="Manor house with luxury cars parked outside at dusk"
          className="w-full h-full object-cover z-0"
        />
        <div className="absolute pt-60 top-1/2 inset-0">
        <p className="font-heading z-10 italic text-center text-white text-base sm:text-lg md:text-xl py-10 sm:py-14">
        We mean every word of it...
      </p>
      <div className="opacity-90 bottom-0 left-6 absolute  h-40 w-full ">
      <img src="images/Rectangle.png" alt="" className="absolute top-1/2 h-40 w-full"  />
       </div>
      </div>
      </div>
      
    </section>
  );
}
