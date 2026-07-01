import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tagline from "./components/Tagline";
import Stats from "./components/Stats";
import WeAreShiftnex from "./components/WeAreShiftnex";
import WhatWeCreate from "./components/WhatWeCreate";
import Digital from "./components/Digital";
import FridaySection from "./components/FridaySection";
import FridayQuote from "./components/FridayQuote";
import ProcessVision from "./components/ProcessVision";
import ImageGrid from "./components/ImageGrid";
import CoverEveryAngle from "./components/CoverEveryAngle";
import ManorSection from "./components/ManorSection";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import PrivacyPage from "./components/Privacy";
import CookieConsent from "./components/CookieConsent";
function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Tagline />
      <Stats />
      <WeAreShiftnex />
      <WhatWeCreate />
      <Digital />
      <FridaySection />
      <FridayQuote />
      <ProcessVision />
      <ImageGrid />
      <CoverEveryAngle />
      <ManorSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPage></PrivacyPage>} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;