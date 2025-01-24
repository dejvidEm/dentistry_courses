import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "./Button";
import { IoChevronDown, IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Hardcoded zoznam kurzov na dynamické vytváranie odkazov
  const kurzyData = [
    { id: "1", name: "Kurz 1" },
    { id: "2", name: "Kurz 2" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white fixed top-0 left-0 w-full border-b-2 border-neutral-100 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo a odkazy */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" onClick={closeMenu}>
                  <img src="/images/logo.png" alt="Logo" className="h-10 w-14" />
                </Link>
              </div>

              {/* Desktop Menu (Odkazy) */}
              <div className="hidden md:flex space-x-8">
                <div className="relative group">
                  <Link
                    to="/kurzy"
                    className="text-gray-700 flex gap-1 items-center hover:text-[#38412b] focus:outline-none"
                  >
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
                {isOpen ? (
                  <IoCloseOutline size={36} />
                ) : (
                  <RxHamburgerMenu size={36} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed flex justify-center text-center top-16 left-0 w-full h-[50%] bg-white transition-transform duration-300 z-40 shadow-lg ${
          isOpen ? "translate-y-0" : "-translate-y-[100%]"
        }`}
      >
        <div className="px-4 pt-4 pb-3 space-y-3 sm:px-6">
          <Link
            to="/kurzy"
            className="block text-gray-700 text-xl hover:text-[#38412b]"
            onClick={closeMenu}
          >
            Kurzy
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 text-xl hover:text-[#38412b]"
            onClick={closeMenu}
          >
            O nás
          </Link>
          <Link
            to="/blog"
            className="block text-gray-700 text-xl hover:text-[#38412b]"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 text-xl hover:text-[#38412b] pb-8"
            onClick={closeMenu}
          >
            Kontakt
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            <ButtonComponent text="Kontaktujte Nás" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;