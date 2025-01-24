import { useRef, useState } from "react";
import Breadcrumbs from "../ui/Breadcrumbs";
import VisionSection from "../ui/VisionSection";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ResponsiveSlider from "../ui/Slider";
import EmployeeCard from "../ui/EmployeeCard";
import Testimonial from "../ui/ReviewCard";

import { IoIosCheckmarkCircle } from "react-icons/io";
import ArrowButton from "../ui/ArrowButton";
import CourseCard from "../ui/CourseCard";
import { Link } from "react-router-dom";

interface TimelineItem {
  year: number;
  text: string;
  imageUrl: string;
}

interface Params {
  id: number;
  title: string;
  description: string;
}

const employees = [
  {
    name: "MDDr. Natália Sládečková MSc",
    position: "Vedúca lektorka",
    imageUrl: "images/employee1.png",
  },
  {
    name: "MDDr. Peter Novák",
    position: "Lektor",
    imageUrl: "images/employee2.png",
  },
  {
    name: "MDDr. Jana Kováčová",
    position: "Lektorka",
    imageUrl: "images/employee3.png",
  },
  {
    name: "MDDr. Martin Horváth",
    position: "Lektor",
    imageUrl: "images/employee4.png",
  },
  {
    name: "MDDr. Anna Šimková",
    position: "Asistentka",
    imageUrl: "images/employee1.png",
  },
];

const reviews = [
  {
    name: "John Doe",
    role: "Software Engineer",
    photo: "/images/review_profile_photo.png",
    quote:
      "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    photo: "/images/review_profile_photo.png",
    quote:
      "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "Alex Johnson",
    role: "Designer",
    photo: "/images/review_profile_photo.png",
    quote:
      "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "James West",
    role: "Dentist",
    photo: "/images/review_profile_photo.png",
    quote:
      "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  {
    name: "Alex Johnson",
    role: "Worker",
    photo: "/images/review_profile_photo.png",
    quote:
      "This is a fantastic product! I love it so much! It made my life so much easier. Highly recommended! Thank you! And keep up the good work! I liked it so much that I bought it for my whole family!",
  },
  // Add more testimonials as needed
];

const timelineData: TimelineItem[] = [
  {
    year: 2017,
    text: "Špecializáciu v oblasti orofaciálnej bolesti, dysfunkcií, opotrebovania zubov a spánkovej medicíny som ukončila na ACTA (Academisch Centrum Tandheelkunde Amsterdam). V rovnakom roku som začala pracovať v Kliniek voor Parodontologie Amsterdam a súčasne som odštartovala doktorandské štúdium (PhD).",
    imageUrl: "/images/years_photo.png",
  },
  {
    year: 2022,
    text: "Špecializáciu v oblasti orofaciálnej bolesti, dysfunkcií, opotrebovania zubov a spánkovej medicíny som ukončila na ACTA (Academisch Centrum Tandheelkunde Amsterdam). V rovnakom roku som začala pracovať v Kliniek voor Parodontologie Amsterdam a súčasne som odštartovala doktorandské štúdium (PhD).",
    imageUrl: "/images/years_photo.png",
  },
  {
    year: 2023,
    text: "Špecializáciu v oblasti orofaciálnej bolesti, dysfunkcií, opotrebovania zubov a spánkovej medicíny som ukončila na ACTA (Academisch Centrum Tandheelkunde Amsterdam). V rovnakom roku som začala pracovať v Kliniek voor Parodontologie Amsterdam a súčasne som odštartovala doktorandské štúdium (PhD).",
    imageUrl: "/images/years_photo.png",
  },
  {
    year: 2024,
    text: "Špecializáciu v oblasti orofaciálnej bolesti, dysfunkcií, opotrebovania zubov a spánkovej medicíny som ukončila na ACTA (Academisch Centrum Tandheelkunde Amsterdam). V rovnakom roku som začala pracovať v Kliniek voor Parodontologie Amsterdam a súčasne som odštartovala doktorandské štúdium (PhD).",
    imageUrl: "/images/years_photo.png",
  },
  {
    year: 2025,
    text: "Špecializáciu v oblasti orofaciálnej bolesti, dysfunkcií, opotrebovania zubov a spánkovej medicíny som ukončila na ACTA (Academisch Centrum Tandheelkunde Amsterdam). V rovnakom roku som začala pracovať v Kliniek voor Parodontologie Amsterdam a súčasne som odštartovala doktorandské štúdium (PhD).",
    imageUrl: "/images/years_photo.png",
  },
];

const parameters: Params[] = [
  {
    id: 1,
    title: "Pacient na prvom mieste",
    description:
      "Každé rozhodnutie musí byť v prospech pacienta. Vždy liečim človeka, nie iba zub. Pozerám sa za hranice ústnej dutiny a hľadám najlepšie riešenie pre daného človeka – aj keď to niekedy nemusí byť ideálne riešenie pre samotný zub. Tento prístup nielen zlepšuje starostlivosť, ale zároveň pomáha budovať dôveru medzi pacientom a odborníkom.",
  },
  {
    id: 2,
    title: "Informácie založené na dôkazoch",
    description:
      "Na našich kurzoch poskytujeme len informácie, ktoré sú podložené vedeckými dôkazmi a dátami. Je pre mňa kľúčové, aby sme sa ako odborníci riadili vedou a prispôsobovali svoje postupy najnovším poznatkom. Táto filozofia ma poháňa aj pri mojom doktorandskom výskume. Verím, že len tak môžeme poskytovať pacientom tú najlepšiu možnú starostlivosť.",
  },
  {
    id: 3,
    title: "Podpora a flexibilita",
    description:
      "Každý účastník našich kurzov si môže vybrať, čo mu vyhovuje – jeden konkrétny kurz alebo všetky štyri ako kompletný vzdelávací program. Navyše ponúkame mentorstvo – počas roka poskytujem účastníkom podporu pri riešení klinických prípadov z ich praxe. Táto flexibilita umožňuje každému študovať tempom, ktoré mu vyhovuje, a posúvať svoje znalosti na vyššiu úroveň.",
  },
];

const Onas = () => {
  const employeesSliderRef = useRef<{
    handleNext: () => void;
    handlePrev: () => void;
  } | null>(null);

  const handleEmployeesNext = () => {
    if (employeesSliderRef.current) {
      employeesSliderRef.current.handleNext();
    }
  };

  const handleEmployeesPrev = () => {
    if (employeesSliderRef.current) {
      employeesSliderRef.current.handlePrev();
    }
  };

  // Referencie pre oba slidery
  const reviewsSliderRef = useRef<{
    handleNext: () => void;
    handlePrev: () => void;
  } | null>(null);

  // Funkcie na ovládanie review slideru
  const handleReviewsPrev = () => reviewsSliderRef.current?.handlePrev();
  const handleReviewsNext = () => reviewsSliderRef.current?.handleNext();

  const [activeYear, setActiveYear] = useState(timelineData[2]);

  const [activeSlide, setActiveSlide] = useState(0);
const sliderRef = useRef<HTMLDivElement | null>(null);

const handleScroll = () => {
  if (sliderRef.current) {
    const scrollLeft = sliderRef.current.scrollLeft;
    const cardWidth = sliderRef.current.offsetWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlide(index);
  }
};

  return (
    <div className="bg-[#F3F3F1]">
      <section className="w-full bg-white px-4 lg:px-20">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-24">
          <Breadcrumbs />
        </div>
      </section>

      {/* Hero sekcia */}
<section className="bg-white px-6 md:px-48 relative w-full flex flex-col md:flex-row mx-auto py-16 pb-24 gap-8">
  {/* Textová časť */}
  <div className="flex flex-col justify-center w-full md:w-1/2 text-left order-2 md:order-1">
    <h1 className="font-bold text-3xl md:text-[58px] pb-4 md:pb-8">Naša misia</h1>
    <p className="text-gray-700 leading-relaxed pb-8 max-w-[550px]">
      Naším cieľom je vzdelávať zubných lekárov, fyzioterapeutov a
      študentov zubného lekárstva v špecializovaných oblastiach
      orofaciálnej bolesti a dysfunkcie, opotrebovania zubov a spánkovej
      medicíny. Ako jediný špecialista v týchto odboroch na Slovensku,
      ktorý hovorí po slovensky, sa snažím sprístupniť pokročilé
      vzdelávanie pre profesionálov u nás.
    </p>
    <div className="w-full md:w-96 mx-auto md:mx-0">
      <Link to="/kurzy">
        <ArrowButton text="Všetky naše kurzy" />
      </Link>
    </div>
  </div>

  {/* Obrázok a prekryté informácie */}
  <div className="relative w-full md:w-1/2 md:mb-0 order-1 md:order-2">
    <img
      src="/images/about_hero.png"
      alt="Profesionálna diskusia"
      className="w-full rounded-lg shadow-md"
    />

    {/* Prekryté informácie */}
    <div className="absolute bottom-2 left-2 flex flex-col gap-4 text-left">
      <div className="bg-white rounded-lg shadow-lg p-2 flex items-center gap-2 w-[240px]">
        <IoIosCheckmarkCircle className="text-orange-1" size={24} />
        <p className="text-gray-700 font-medium text-sm">
          Kvalitné školenia pre profesionálov
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-2 flex items-center gap-2 w-[240px]">
        <IoIosCheckmarkCircle className="text-orange-1" size={24} />
        <p className="text-gray-700 font-medium text-sm">
          Roky praxe v oblasti stomatológie
        </p>
      </div>
    </div>
  </div>
</section>



<section className="w-full relative mx-auto py-16">
  {/* Tmavozelené pozadie */}
  <div className="absolute top-0 left-0 w-full h-3/5 bg-green-7"></div>

  {/* Obsah sekcie */}
  <div className="relative z-10 max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-slate-100">Naše hodnoty</h2>

    {/* Slider pre mobilné zariadenia */}
    <div
      ref={sliderRef}
      className="mt-10 flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide md:hidden"
      onScroll={handleScroll}
    >
      {parameters.map((parameter) => (
        <div
          key={parameter.id}
          className="bg-white p-6 rounded w-[85%] flex-shrink-0 snap-start"
        >
          <div className="flex flex-col gap-4">
            <div className="bg-[#E6EDD5] text-[#38412b] w-20 h-20 flex z-10 items-center justify-center rounded-full text-lg font-bold">
              <div className="bg-[#D4E0B9] text-[#38412b] w-16 h-16 flex z-10 items-center justify-center rounded-full text-lg font-bold">
                <div className="bg-[#B8C895] text-[#38412b] w-12 h-12 z-20 flex items-center justify-center rounded-full text-lg font-bold">
                  {parameter.id < 10 ? `0${parameter.id}` : parameter.id}
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {parameter.title}
            </h3>
          </div>
          <p className="mt-4 text-gray-600">{parameter.description}</p>
        </div>
      ))}
    </div>

    {/* Grid pre desktop */}
    <div className="mt-10 grid-cols-1 md:grid-cols-3 gap-4 hidden md:grid">
      {parameters.map((parameter) => (
        <div key={parameter.id} className="bg-white p-6 rounded">
          <div className="flex flex-col gap-4">
            <div className="bg-[#E6EDD5] text-[#38412b] w-20 h-20 flex z-10 items-center justify-center rounded-full text-lg font-bold">
              <div className="bg-[#D4E0B9] text-[#38412b] w-16 h-16 flex z-10 items-center justify-center rounded-full text-lg font-bold">
                <div className="bg-[#B8C895] text-[#38412b] w-12 h-12 z-20 flex items-center justify-center rounded-full text-lg font-bold">
                  {parameter.id < 10 ? `0${parameter.id}` : parameter.id}
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {parameter.title}
            </h3>
          </div>
          <p className="mt-4 text-gray-600">{parameter.description}</p>
        </div>
      ))}
    </div>

    {/* Indikátory (pásiky) pre mobil */}
    <div className="flex justify-center items-center mt-6 space-x-1 md:hidden">
      {parameters.map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded transition-all duration-300 ${
            activeSlide === index
              ? "bg-[#38412b] w-10" // Aktívny pásik: tmavší a dlhší
              : "bg-gray-300 w-4" // Neaktívne pásiky: kratšie a svetlejšie
          }`}
        ></div>
      ))}
    </div>
  </div>
</section>


      <section className="flex flex-col md:flex-row justify-between items-center py-16 px-4 md:px-20">
        {/* Timeline Navigation for Mobile */}
        <div className="flex md:hidden justify-center gap-4 mb-8 w-full">
          {timelineData.map((item) => (
            <button
              key={item.year}
              className={`font-semibold transition-all duration-500 ${
                activeYear.year === item.year
                  ? "text-[#1C2820] text-3xl border-[#1C2820]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveYear(item)}
            >
              {item.year}
            </button>
          ))}
        </div>

        {/* Text Section */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-10 max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            O mne
          </h2>
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
            {activeYear.year}
          </h3>
          <p className="text-gray-600 leading-relaxed text-center md:text-left w-full md:w-[540px]">
            {activeYear.text}
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 max-w-md mb-8 md:mb-0">
          <img
            src={activeYear.imageUrl}
            alt={`Timeline for ${activeYear.year}`}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Timeline Navigation for Desktop */}
        <div className="hidden md:flex flex-col items-end gap-6 w-full md:w-[100px]">
          {timelineData.map((item) => (
            <button
              key={item.year}
              className={`font-semibold transition-all duration-500 ${
                activeYear.year === item.year
                  ? "text-green-6 text-4xl"
                  : "text-gray-5 hover:text-gray-700"
              }`}
              onClick={() => setActiveYear(item)}
            >
              {item.year}
            </button>
          ))}
        </div>
      </section>

      <section>
        <VisionSection />
      </section>

      <section className="slider py-8 px-16 flex flex-col gap-8">
        <div className="flex flex-row px-4 justify-between items-end">
          <div className="flex flex-col gap-2 w-3/5">
            <h1 className="text-gray-950 text-xl md:text-3xl font-bold mb-4">
              Skúsenosti, odbornosť a <br />
              vášeň pre vzdelávanie
            </h1>
          </div>
          <div className="flex flex-col w-auto gap-4">
            <div className="arrows flex flex-row gap-4">
              <div
                className="bg-white rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
                onClick={handleEmployeesPrev}
              >
                <FaArrowLeft />
              </div>
              <div
                className="bg-white rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
                onClick={handleEmployeesNext}
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

        {/* Slider s kartami zamestnancov */}
        <ResponsiveSlider
          ref={employeesSliderRef}
          items={employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              name={employee.name}
              position={employee.position}
              imageUrl={employee.imageUrl}
            />
          ))}
          visibleItems={4} // 4 karty vedľa seba
        />
      </section>

      {/* Sekcia s kurzom a popisom*/}
      <section className="w-full bg-green-7 px-4 py-12 flex flex-col md:flex-row justify-between items-center">
  <div className="w-full md:w-1/2 flex flex-col gap-4 order-1">
    <h1 className="font-bold text-3xl text-white">
      Získajte nové vedomosti ešte dnes!
    </h1>
    <p className="text-white leading-relaxed">
      Naše kurzy vám ponúkajú najnovšie vedecké poznatky v oblastiach
      orofaciálnej bolesti, dysfunkcie, opotrebovania zubov a spánkovej
      medicíny. S flexibilným prístupom k vzdelávaniu a podporou počas
      celého roka sa môžete stať odborníkom, ktorý poskytuje pacientom
      starostlivosť na najvyššej úrovni. Využite našu odbornú pomoc a
      rozšírte svoje schopnosti ešte dnes!
    </p>
    <div className="w-96 mb-12">
      <Link to="/kurzy">
        <ArrowButton text="Všetky naše kurzy" variant="white" />
      </Link>
    </div>
  </div>
  <div className="w-full md:w-1/2 order-2 md:order-3">
    <CourseCard
      image={"/images/employee1.png"}
      title={"Spánková zubná medicína"}
      description={
        "Naše kurzy vám ponúkajú najnovšie vedecké poznatky v oblastiach orofaciálnej bolesti, dysfunkcie, opotrebovania zubov a spánkovej medicíny. S flexibilným prístupom k vzdelávaniu a podporou počas celého roka sa môžete stať odborníkom, ktorý poskytuje pacientom starostlivosť na najvyššej úrovni. Využite našu odbornú pomoc a rozšírte svoje schopnosti ešte dnes!"
      }
      date={"2025-01-20"}
      duration={"(8 hodín)"}
      capacity={"25"}
    />
  </div>
</section>

      {/* Hodnotenia kurzov */}
      <section className="max-w-[1400px] mx-auto reviews flex flex-col lg:flex-row py-16 px-8 lg:px-16 gap-8 lg:gap-12">
        <div className="flex flex-col gap-8 w-full lg:w-2/3">
          <div className="flex flex-col lg:flex-col justify-between items-start lg:items-start gap-4">
            <h1 className="text-gray-800 text-2xl lg:text-3xl font-bold">
              Hodnotenia kurzov
            </h1>
            <div className="arrows flex flex-row gap-4">
              <div
                className="bg-white rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
                onClick={handleReviewsPrev}
              >
                <FaArrowLeft />
              </div>
              <div
                className="bg-white rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
                onClick={handleReviewsNext}
              >
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* Slider s hodnoteniami */}
          <ResponsiveSlider
            ref={reviewsSliderRef}
            items={reviews.map((review, index) => (
              <Testimonial
                key={index}
                name={review.name}
                role={review.role}
                photo={review.photo}
                quote={review.quote}
              />
            ))}
            visibleItems={2} // Napr. 2 viditeľné položky na desktopoch
          />
        </div>
        <div className="flex justify-center items-start lg:items-end">
          <img
            src="/images/reviewsCitat.png"
            alt="quote"
            className="w-[400px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Onas;
