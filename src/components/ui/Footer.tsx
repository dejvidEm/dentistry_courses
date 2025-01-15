import { useState, useEffect } from "react";

const Footer = () => {
  const [isNavigationOpen, setNavigationOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const pages = ["Úvod", "O nás", "Služby", "Kurzy", "Kontakt"];
  const contact = {
    phone: "+421 123 456 789",
    email: "info@dentalklinika.sk",
  };

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 768;
      setIsDesktop(isNowDesktop);
      if (isNowDesktop) {
        setNavigationOpen(true);
        setContactOpen(true);
      } else {
        setNavigationOpen(false);
        setContactOpen(false);
      }
    };

    // Nastavenie na počiatočný stav podľa veľkosti obrazovky
    handleResize();

    // Event listener pre zmenu veľkosti obrazovky
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-gray-100 p-6 border-t border-gray-300">
      <div className="md:flex md:justify-between md:items-start space-y-6 md:space-y-0">
        {/* Navigácia */}
        <div className="md:w-1/2">
          <div className="flex justify-between items-center md:block">
            <h2 className="font-semibold text-lg">Navigácia</h2>
            {!isDesktop && (
              <button
                className="text-gray-500"
                onClick={() => setNavigationOpen(!isNavigationOpen)}
              >
                <span
                  className={`transform ${
                    isNavigationOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
            )}
          </div>
          <ul
            className={`${
              isNavigationOpen ? "block" : "hidden"
            } mt-2 space-y-1 text-sm text-gray-700`}
          >
            {pages.map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div className="md:w-1/2">
          <div className="flex justify-between items-center md:block">
            <h2 className="font-semibold text-lg">Kontakt</h2>
            {!isDesktop && (
              <button
                className="text-gray-500"
                onClick={() => setContactOpen(!isContactOpen)}
              >
                <span
                  className={`transform ${
                    isContactOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
            )}
          </div>
          <ul
            className={`${
              isContactOpen ? "block" : "hidden"
            } mt-2 space-y-1 text-sm text-gray-700`}
          >
            <li>Tel: {contact.phone}</li>
            <li>Email: {contact.email}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;