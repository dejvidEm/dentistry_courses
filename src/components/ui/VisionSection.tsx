import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const VisionMissionSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      title: "Pacient ako stredobod starostlivosti",
      text: "Veríme, že každý pacient je jedinečný. Našou víziou je naučiť odborníkov v zubnom lekárstve, aby sa pozerali za hranice zubov a sústredili sa na človeka ako celok."
    },
    {
      title: "Vzdelávanie založené na dôkazoch",
      text: "Naše kurzy sú postavené na pevných základoch vedy a výskumu. Neustále sledujeme nové poznatky, aby sme mohli vzdelávať odborníkov na základe aktuálnych dôkazov."
    },
    {
      title: "Dostupné špecializované vzdelávanie",
      text: "Ako jediný špecialista v orofaciálnej bolesti, dysfunkcii a spánkovej medicíne, chceme priblížiť túto problematiku odborníkom na Slovensku."
    },
    {
      title: "Podpora a dlhodobý rozvoj odborníkov",
      text: "Nejde len o kurzy – ide o budovanie komunity odborníkov. Víziou je vytvoriť priestor, kde môžu profesionáli rásť a učiť sa."
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swipe left
      handleNext();
    } else if (diff < -50) {
      // Swipe right
      handlePrev();
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center">Naša vízia a misia</h2>
        <div className="relative flex flex-wrap justify-center">
          {isMobile ? (
            <div
              className="w-full relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="bg-white rounded p-6 max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-4">{slides[currentSlide].title}</h3>
                <p className="text-gray-600">{slides[currentSlide].text}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex mx-auto space-x-2">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        currentSlide === index ? "bg-green-700" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {slides.map((slide, index) => (
                <div key={index} className="bg-white rounded p-6 max-w-md">
                  <h3 className="text-xl font-semibold mb-4">{slide.title}</h3>
                  <p className="text-gray-600">{slide.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;