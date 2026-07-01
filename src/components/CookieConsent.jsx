import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl bg-panel border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
        <p className="text-white/70 text-sm leading-relaxed flex-1">
          This site uses essential cookies for basic functionality.
          We use MailerLite to deliver our newsletter, which may use
          tracking technologies in emails (e.g., open and click
          tracking). No third-party advertising cookies are used.{" "}
          <Link
            to="/privacy"
            className="text-[#d8c9c0] underline hover:text-white transition-colors"
          >
            Learn more
          </Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-white text-black text-sm font-medium px-5 py-2 rounded-lg hover:bg-white/90 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
