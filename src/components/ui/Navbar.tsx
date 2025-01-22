import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "./Button";
import { IoChevronDown } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hardcoded zoznam kurzov na dynamické vytváranie odkazov
  const kurzyData = [
    { id: "1", name: "Kurz 1" },
    { id: "2", name: "Kurz 2" },
  ];

  return (
    <nav className="bg-white mx-8 border-b-2 border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-14" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <Link to="/kurzy" className="text-gray-700 flex gap-1 items-center hover:text-[#38412b] focus:outline-none">
                Kurzy
                <IoChevronDown />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {kurzyData.map((kurz) => (
                  <Link
                    key={kurz.id}
                    to={`/kurzy/${kurz.id}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {kurz.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-[#38412b]">
              O nás
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#38412b]">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#38412b]">
              Kontakt
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <ButtonComponent text="Kontaktujte Nás" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#38412b] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-[#38412b]">
              Domov
            </Link>
            {kurzyData.map((kurz) => (
              <Link
                key={kurz.id}
                to={`/kurzy/${kurz.id}`}
                className="block text-gray-700 hover:text-[#38412b]"
              >
                {kurz.name}
              </Link>
            ))}
            <Link to="/about" className="block text-gray-700 hover:text-[#38412b]">
              O nás
            </Link>
            <Link to="/blog" className="block text-gray-700 hover:text-[#38412b]">
              Blog
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-[#38412b]">
              Kontakt
            </Link>
            <Link to="/contact">
              <ButtonComponent text="Kontaktujte Nás" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;