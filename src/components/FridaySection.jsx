export default function FridaySection() {
  return (
    <section className="relative w-full p-4 sm:p-8 md:p-20 h-[60vh] sm:h-[70vh] md:h-[80vh] bg-black overflow-hidden">
      <div className="p-4 sm:p-8 md:p-20">
      <img
        src="/images/fri-car.webp"
        alt="Sports car on a racetrack at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
      />
        </div>
        
      <h2 
  style={{
    position: "absolute",
    left: "280px",
    top: "55%",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255, 255, 255, 0.25)",
    lineHeight: 1,
    userSelect: "none",
    zIndex: 10,
    width: "450px",
    height: "200px",
    fontSize: "1100px"
  }}
  className="font-display" // This brings your exact font back instantly
>
  FRI
</h2>


    <div 
  style={{
    position: "relative",
    maxWidth: "100%",
    // Explicit sizing for the image boundary wrapper:
    width: "450px", 
    height: "200px",
    margin: "0 auto" // Optional: clean manual way to keep the wrapper centered horizontally
  }}
>
  <img 
    src="/images/10pm.webp" 
    style={{
      position: "absolute",
      left: "47%",
      top: "280px", // Replaces 'top-60' (60 * 4px = 240px)
      transform: "translateX(-50%)", // Pure horizontal centering without needing manual offsets
      height: "100%", // Forces the image to match the container height
      width: "auto",
      objectFit: "contain" // Prevents the image from distorting
    }} 
    alt="10 PM" 
  />
</div>

    
    </section>
  );
}
