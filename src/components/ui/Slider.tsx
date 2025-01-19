import React, { useImperativeHandle, useRef, useState, useEffect, forwardRef } from "react";

interface SliderProps {
  items: React.ReactNode[]; // Položky slideru
  visibleItems: number; // Počet viditeľných kariet
}

const ResponsiveSlider = forwardRef((props: SliderProps, ref) => {
  const { items, visibleItems } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(visibleItems);

  const startX = useRef<number | null>(null);
  const moveX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : visibleItems); // Na mobiloch vždy 1 karta
    };

    handleResize(); // Inicializácia
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleItems]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= items.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? items.length - itemsToShow : prevIndex - 1
    );
  };

  // Poskytujeme metódy cez `ref`
  useImperativeHandle(ref, () => ({
    handleNext,
    handlePrev,
  }));

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
        handleNext();
      } else if (diff < -50) {
        handlePrev();
      }
    }

    startX.current = null;
    moveX.current = null;
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
        {items.map((item, index) => (
          <div
            key={index}
            style={{ width: `${100 / itemsToShow}%` }} // Dynamická šírka kariet
            className="flex-shrink-0 px-4"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
});

export default ResponsiveSlider;