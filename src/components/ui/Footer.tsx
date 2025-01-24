import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaPaperPlane, FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

interface Kontakt {
  phone: string;
  email: string;
}

const Footer: React.FC = () => {
  const [isNavigationOpen, setNavigationOpen] = useState<boolean>(false);
  const [isCoursesOpen, setCoursesOpen] = useState<boolean>(false);
  const [isContactOpen, setContactOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const medical =
    "Poskytujeme vzdelávanie, ktoré pomáha zubným profesionálom zlepšovať starostlivosť o pacienta. Posúvame zubné lekárstvo vpred vďaka odbornosti, flexibilite a podpore.";
  const navigacia: { label: string; path: string }[] = [
    { label: "Úvod", path: "/" },
    { label: "O nás", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Kurzy", path: "/kurzy" },
    { label: "Kontakt", path: "/contact" },
  ];
  const kurzy: { label: string; path: string }[] = [
    { label: "DC/TMD Kalibračný kurz", path: "/kurzy/1" },
    { label: "Opotrebovanie zubov", path: "/kurzy/2" },
    { label: "Spánková zubná medicína", path: "/kurzy/3" },
    { label: "Estetická stomatológia", path: "/kurzy/1" },
  ];
  const kontakt: Kontakt = {
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
        setContactOpen(true);
      } else {
        setNavigationOpen(false);
        setCoursesOpen(false);
        setContactOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSection = (
    title: string,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    items: { label: string; path: string }[]
  ) => (
    <div className="md:w-1/3">
      <div className="flex justify-between items-center md:block">
        <h2 className="font-semibold text-lg">{title}</h2>
        {!isDesktop && (
          <button
            className="text-gray-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={`${title} toggle`}
          >
            <span
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaChevronDown />
            </span>
          </button>
        )}
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } mt-2 space-y-1 text-sm text-gray-700`}
      >
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="p-6">
      <div className="flex justify-between border-b-2 border-gray-100 py-4">
        <img src="/images/logo_footer.png" alt="logo" className="w-20" />
        <div className="flex flex-row gap-2">
          <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center align-middle p-2 cursor-pointer">
            <FaFacebook className="text-slate-100" size={20} />
          </div>
          <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center align-middle p-2 cursor-pointer">
            <FaInstagram className="text-slate-100" size={23} />
          </div>
          <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center align-middle p-2 cursor-pointer">
            <FaPaperPlane className="text-slate-100" size={18} />
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-between md:items-start space-y-6 md:space-y-0 py-6 px-10">
        {/* NS Medical */}
        <div className="md:w-2/3">
          <div className="flex justify-between flex-col items-center md:block">
            <h2 className="font-semibold text-lg">NS Medical</h2>
            <p className="text-center md:text-left text-sm">{medical}</p>
          </div>
        </div>

        {/* Navigácia */}
        {renderSection("Navigácia", isNavigationOpen, setNavigationOpen, navigacia)}

        {/* Kurzy */}
        {renderSection("Kurzy", isCoursesOpen, setCoursesOpen, kurzy)}

        {/* Kontakt */}
        <div className="md:w-1/3">
          <div className="flex justify-between items-center md:block">
            <h2 className="font-semibold text-lg">Kontakt</h2>
            {!isDesktop && (
              <button
                className="text-gray-500"
                onClick={() => setContactOpen(!isContactOpen)}
                aria-label="Kontakt toggle"
              >
                <span
                  className={`transform transition-transform duration-300 ${
                    isContactOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FaChevronDown />
                </span>
              </button>
            )}
          </div>
          <ul
            className={`${
              isContactOpen ? "block" : "hidden"
            } mt-2 space-y-1 text-sm text-gray-700`}
          >
            <a href="tel:+421 123 456"><li className="hover:underline">Tel: {kontakt.phone}</li></a>
            <a href="mailto:info@dentalklinika.sk"><li className="hover:underline">Email: {kontakt.email}</li></a>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-700 px-10">
        <p>© 2024 Autorské práva vyhradené.</p>
        <p>Ochrana osobných údajov</p>
      </div>
    </footer>
  );
};

export default Footer;