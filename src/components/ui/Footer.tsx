import { useState, useEffect } from "react";

import { FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";


const Footer = () => {
  const [isNavigationOpen, setNavigationOpen] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const medical = "Poskytujeme vzdelávanie, ktoré pomáha zubným profesionálom zlepšovať starostlivosť o pacienta. Posúvame zubné lekárstvo vpred vďaka odbornosti, flexibilite a podpore.";
  const navigacia = ["Úvod", "O nás", "Služby", "Kurzy", "Kontakt"];
  const kurzy = ["Kurz 1", "Kurz 2", "Kurz 3"];
  const kontakt = {
    phone: "+421 123 456 789",
    email: "info@dentalklinika.sk",
  };
  

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 768;
      setIsDesktop(isNowDesktop);
      if (isNowDesktop) {
        setNavigationOpen(true);
        setCoursesOpen(true);
        setContactOpen(true)
      } else {
        setNavigationOpen(false);
        setCoursesOpen(false);
        setContactOpen(false)
      }
    };

    // Nastavenie na počiatočný stav podľa veľkosti obrazovky
    handleResize();

    // Event listener pre zmenu veľkosti obrazovky
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="p-6">
      <div className="flex justify-between border-b-2 border-gray-100 py-4">
        <img src="/src/assets/logo_footer.png" alt="logo" className="w-20"/>
        <div className="flex flex-row gap-2">
          <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center align-middle p-2 cursor-pointer">
          <FaFacebook className="text-slate-100" size={20}/>
          </div>
          <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center align-middle p-2 cursor-pointer">
          <FaInstagram className="text-slate-100" size={23}/>
          </div>
          <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center align-middle p-2 cursor-pointer">
          <FaPaperPlane className="text-slate-100" size={18}/>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-between md:items-start space-y-6 md:space-y-0 py-6">
        {/* NS Medical */}
        <div className="md:w-1/3">
          <div className="flex justify-between items-center md:block">
            <h2 className="font-semibold text-lg">Navigácia</h2>
            <ul>
            {medical}
            </ul>
          </div>
        </div>

        {/* Navigácia */}
        <div className="md:w-1/3">
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
            {navigacia.map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>
        </div>

        {/* Kurzy */}
        <div className="md:w-1/3">
          <div className="flex justify-between items-center md:block">
            <h2 className="font-semibold text-lg">Kurzy</h2>
            {!isDesktop && (
              <button
                className="text-gray-500"
                onClick={() => setCoursesOpen(!isCoursesOpen)}
              >
                <span
                  className={`transform ${
                    isCoursesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
            )}
          </div>
          <ul
            className={`${
              isCoursesOpen ? "block" : "hidden"
            } mt-2 space-y-1 text-sm text-gray-700`}
          >
            {kurzy.map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div className="md:w-1/3">
          <div className="flex justify-between items-center md:block">
            <h2 className="font-semibold text-lg">Kontakt</h2>
            {!isDesktop && (
              <button
                className="text-gray-500"
                onClick={() => setContactOpen(!isContactOpen)}
              >
                <span
                  className={`transform ${isContactOpen ? "rotate-180" : ""}`}
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
            <li>Tel: {kontakt.phone}</li>
            <li>Email: {kontakt.email}</li>
          </ul>
        </div>

        {/* Autorské práva */}
      </div>
      <div className="flex flex-row justify-between text-sm text-gray-700 px-10">
          <p>© 2024 Autorské práva vyhradené.</p>
          <p>Ochrana osobných údajov</p>
        </div>
    </footer>
  );
};

export default Footer;
