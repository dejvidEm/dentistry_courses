import React, { useState } from "react";
import "tailwindcss/tailwind.css";

interface SliderProps {
  children: React.ReactNode; // Akýkoľvek obsah, ktorý sa má zobraziť v slideri
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children); // Zisťujeme počet detí

  // Ráta s tým, že zobrazujeme 3 karty naraz
  const itemsToShow = 3;

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

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
        }}
      >
        {React.Children.map(children, (child) => (
          <div className="w-1/3 flex-shrink-0 px-4">{child}</div> // Zobrazenie 3 detí vedľa seba
        ))}
      </div>
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
  );
};

export default Slider;