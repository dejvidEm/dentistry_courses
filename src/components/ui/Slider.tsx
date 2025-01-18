import React, { useState, useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";

interface SliderProps {
  children: React.ReactNode; // Akýkoľvek obsah, ktorý sa má zobraziť v slideri
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Počet kariet na zobrazenie
  const totalItems = React.Children.count(children); // Zisťujeme počet detí

  // Referencie na dotykové pozície
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize(); // Nastavíme správne zobrazenie pri načítaní komponentu
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const touchDiff = touchStartX.current - touchEndX.current;

      if (touchDiff > 50) {
        // Posun doprava (ďalší)
        handleNext();
      } else if (touchDiff < -50) {
        // Posun doľava (predchádzajúci)
        handlePrev();
      }
    }

    // Resetovanie pozícií
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
        }}
      >
        {React.Children.map(children, (child) => (
          <div
            className={`flex-shrink-0 px-4 ${itemsToShow === 1 ? "w-full" : "w-1/3"}`}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="hidden md:block"> {/* Skrytie tlačidiel na mobilných zariadeniach */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
