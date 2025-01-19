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

  return (
    <div className="bg-[#F3F3F1]">
      <section className="bg-white w-full px-20">
        <Breadcrumbs />
      </section>

      {/* Hero sekcia */}
      <section className="bg-white relative w-full flex flex-col md:flex-row mx-auto py-16 gap-8 px-4">
        {/* Textová časť */}
        <div className="flex flex-col justify-center gap-4 md:w-1/2">
          <h1 className="font-bold text-4xl">Naša misia</h1>
          <p className="text-gray-700 leading-relaxed pb-8">
            Naším cieľom je vzdelávať zubných lekárov, fyzioterapeutov a
            študentov zubného lekárstva v špecializovaných oblastiach
            orofaciálnej bolesti a dysfunkcie, opotrebovania zubov a spánkovej
            medicíny. Ako jediný špecialista v týchto odboroch na Slovensku,
            ktorý hovorí po slovensky, sa snažím sprístupniť pokročilé
            vzdelávanie pre profesionálov u nás.
          </p>
          <div className="w-96">
            <ArrowButton text="Všetky naše kurzy" />
          </div>
        </div>

        {/* Obrázok a prekryté informácie */}
        <div className="relative md:w-1/2">
          <img
            src="/images/about_hero.png"
            alt="Profesionálna diskusia"
            className="w-full rounded-lg shadow-md"
          />

          {/* Prekryté informácie */}
          <div className="absolute bottom-4 left-4 flex flex-col gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-orange-1" size={24} />

              <p className="text-gray-700 font-medium">
                Kvalitné školenia pre profesionálov
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-orange-1" size={24} />

              <p className="text-gray-700 font-medium">
                Roky praxe v oblasti stomatológie
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-7 flex flex-col mb-20 py-10">
        <div className="flex flex-col md:flex-row justify-between text-slate-100 px-6 md:px-20">
          <div className="w-3/5 px-14">
            <h1 className="font-bold text-3xl">Naše hodnoty</h1>
          </div>
        </div>
        <div className="over max-w-7xl mx-auto px-4">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {parameters.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded">
              <div className="flex flex-col gap-4">
                <div className="bg-[#d6e2c7] text-[#38412b] w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold">
                  {feature.id < 10 ? `0${feature.id}` : feature.id}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-gray-600">{feature.description}</p>
            </div>
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
            <h1 className="text-gray-950 text-3xl font-bold mb-4">
            Skúsenosti, odbornosť a <br />vášeň pre vzdelávanie
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
      <section className="w-full bg-green-7 px-16 py-12 flex flex-row justify-between items-center">
        <div className="w-1/2">
          <CourseCard image={"/images/employee1.png"} title={"Spánková zubná medicína"} description={"Naše kurzy vám ponúkajú najnovšie vedecké poznatky v oblastiach orofaciálnej bolesti, dysfunkcie, opotrebovania zubov a spánkovej medicíny. S flexibilným prístupom k vzdelávaniu a podporou počas celého roka sa môžete stať odborníkom, ktorý poskytuje pacientom starostlivosť na najvyššej úrovni. Využite našu odbornú pomoc a rozšírte svoje schopnosti ešte dnes!"} date={"2025-01-20"} duration={"(8 hodín)"} capacity={"25"}/>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="font-bold text-3xl text-white">
          Získajte nové vedomosti ešte dnes!
          </h1>
          <p className="text-white leading-relaxed">
          Naše kurzy vám ponúkajú najnovšie vedecké poznatky v oblastiach orofaciálnej bolesti, dysfunkcie, opotrebovania zubov a spánkovej medicíny. S flexibilným prístupom k vzdelávaniu a podporou počas celého roka sa môžete stať odborníkom, ktorý poskytuje pacientom starostlivosť na najvyššej úrovni. Využite našu odbornú pomoc a rozšírte svoje schopnosti ešte dnes!
          </p>
          <div className="w-96">
          <ArrowButton text="Všetky naše kurzy" variant="white"/>
          </div>
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
            className="w-[200px] lg:w-[300px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Onas;
