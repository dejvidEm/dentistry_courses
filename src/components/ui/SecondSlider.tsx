import { useState, useRef } from "react";
import "tailwindcss/tailwind.css";

interface SliderProps {
  items: React.ReactNode[];
}

const SecondSlider: React.FC<SliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const moveX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    moveX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current !== null && moveX.current !== null) {
      const diff = startX.current - moveX.current;

      if (diff > 50) {
        // Posun doprava
        setCurrentIndex((prevIndex) =>
          prevIndex >= items.length - 2 ? 0 : prevIndex + 1
        );
      } else if (diff < -50) {
        // Posun doľava
        setCurrentIndex((prevIndex) =>
          prevIndex <= 0 ? items.length - 2 : prevIndex - 1
        );
      }
    }

    startX.current = null;
    moveX.current = null;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= items.length - 2 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? items.length - 2 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-1/2 px-4">
            {item}
          </div>
        ))}
      </div>
      {/* Tlačidlá pre desktop */}
      <button
        onClick={handlePrev}
        className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
      >
        Next
      </button>
    </div>
  );
};

export default SecondSlider;