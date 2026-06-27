export default function Navbar() {
  return (
    <header className="fixed backdrop-blur-lg opacity-75 top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-center  py-3 sm:py-1 px-4">
        <img
          src="/images/Shiftnextlogo.svg"
          alt="Shiftnex logo mark"
          className="max-w-16"
        />
        <img src="/images/Shiftnext-text.png" alt="" className="max-w-xs" />
        
      </div>
    </header>
  );
}
