
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import CourseCard from "../ui/CourseCard";
import Slider from "../ui/Slider";
import SecondSlider from "../ui/SecondSlider";
import Testimonial from "../ui/ReviewCard";
import FAQSection from "../ui/Faq";
import Breadcrumbs from "../ui/Breadcrumbs";

// Typy pre dynamické dáta
interface Feature {
  id: number;
  title: string;
  description: string;
}

interface HeroContent {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface HeroContent2 {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// Hardcodované dáta (na nahradenie z API)
const heroContent: HeroContent = {
  heading: "Staňte sa expertom v stomatológii!",
  description:
    "Vitajte na našich kurzoch pre zubných lekárov, fyzioterapeutov a študentov zubného lekárstva. Špecializujeme sa na orofaciálnu bolesť, dysfunkciu, opotrebovanie zubov a spánkovú medicínu. Našim cieľom je poskytovať vedecky podložené vzdelávanie, ktoré vám pomôže poskytovať pacientom komplexnú a kvalitnú starostlivosť.",
  buttonText: "Všetky naše kurzy →",
  buttonLink: "/kurzy",
};

const heroContent2: HeroContent2 = {
  heading: "Pomáhame vám rásť vo svete stomatológie",
  description:
    "Sme špecialisti v orofaciálnej medicíne so zameraním na spánkové poruchy, orofaciálnu bolesť a opotrebovanie zubov. Našou misiou je poskytovať vzdelávanie založené na dôkazoch a podporovať odborníkov v ich praxi. Prispievame k zlepšovaniu starostlivosti o pacientov a rozvoju profesionálov.",
  buttonText: "Viac o Nás →",
  buttonLink: "/kurzy",
};

const features: Feature[] = [
  {
    id: 1,
    title: "Unikátna špecializácia a odborníci z celého sveta",
    description:
      "Sme jediní, ktorí ponúkajú kurzy zamerané na orofaciálnu bolesť, dysfunkciu, opotrebovanie zubov a spánkovú medicínu. Na našich kurzoch sa stretnete s odborníkmi z celého sveta, ktorí vám prinesú jedinečné poznatky a skúsenosti.",
  },
  {
    id: 2,
    title: "Praktické zručnosti a zlepšenie komunikácie s pacientmi",
    description:
      "Na kurzoch sa naučíte niečo, čo vám lekárska fakulta neposkytla. Získate schopnosti diagnostikovať bolesti, komunikovať s pacientmi efektívnejšie a zamerať sa na prevenciu a manažment problémov TMD a opotrebovanie zubov.",
  },
  {
    id: 3,
    title: "Flexibilita, mentoring a podpora po absolvovaní kurzu",
    description:
      "Ponúkame flexibilitu vo výbere kurzov a osobný mentoring. Naši účastníci dostávajú podporu aj po absolvovaní kurzu, aby si osvojili praktické zručnosti a vedeli ich aplikovať vo svojej praxi.",
  },
];

const reviews = [
  {
    name: "John Doe",
    role: "Software Engineer",
    photo: "/src/assets/review_profile_photo.png",
    quote: "This is a fantastic product!",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    photo: "/src/assets/review_profile_photo.png",
    quote: "Highly recommend to anyone looking for quality.",
  },
  {
    name: "Alex Johnson",
    role: "Designer",
    photo: "/src/assets/review_profile_photo.png",
    quote: "Beautifully designed and works perfectly.",
  },
  {
    name: "James West",
    role: "Dentist",
    photo: "/src/assets/review_profile_photo.png",
    quote: "Amazing courses and tutorials!",
  },
  {
    name: "Alex Johnson",
    role: "Worker",
    photo: "/src/assets/review_profile_photo.png",
    quote: "Lovely work, keep it up!",
  },
  // Add more testimonials as needed
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="w-full px-20">
        <Breadcrumbs/>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            {heroContent.heading}
          </h1>
          <p className="mt-4 text-gray-600">{heroContent.description}</p>
          <a
            href={heroContent.buttonLink}
            className="mt-6 inline-block px-6 py-3 bg-[#38412b] text-white text-lg font-medium rounded-lg hover:bg-[#2f371f] transition"
          >
            {heroContent.buttonText}
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/* Prvý stĺpec */}
          <div className="col-span-1 flex flex-col gap-4">
            <img
              src="/src/assets/Homepage_photo_1.png"
              alt="Image 1"
              className="rounded"
            />
            <img
              src="/src/assets/Homepage_photo_3.png"
              alt="Image 2"
              className="rounded"
            />
          </div>

          {/* Druhý stĺpec */}
          <div className="col-span-2">
            <img
              src="/src/assets/Homepage_photo_2.png"
              alt="Image 3"
              className="rounded h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Prečo si vybrať nás?
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-[#d6e2c7] text-[#38412b] w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold">
                    {feature.id < 10 ? `0${feature.id}` : feature.id}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tmavoyelena sekcia s kurzami */}
      <section className="bg-[#1C2820] py-16 px-16 flex flex-col gap-12">
        <div className="flex flex-row">
          <h1 className="text-slate-100">
            Objavte kurzy, ktoré Vás posunú vpred!
          </h1>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-slate-100">
                Pripojte sa k našim profesionálnym kurzom a získajte praktické
                zručnosti, aktuálne vedomosti a certifikáciu, ktorá vám otvorí
                nové možnosti. Naše kurzy sú navrhnuté tak, aby ste sa naučili
                konkrétne techniky a postupy, ktoré uplatníte.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <div className="bg-slate-100 rounded-lg p-4">
                <FaArrowLeft className="" />
              </div>
              <div className="bg-slate-100 rounded-lg p-4">
                <FaArrowRight className="" />
              </div>
            </div>
          </div>
        </div>

        {/* slider s kurzami */}
        <div className="flex flex-row gap-8">
          <Slider>
            <CourseCard
              image="src/assets/home_img_sec2.png"
              title="Course 1"
              description="Toto je popis kurzu v ktorom je opisane to co sa na kurze naucite a co sa na nom dozviete, pre podrobnejsie info si rozkliknite tento kurz a zistite co sa v nom vsetko naucite, ale ajtak sa musite prihlasit aby ste to zistili"
              date="2025-01-20"
              duration="2 hours"
              capacity="30"
            />
            <CourseCard
              image="src/assets/home_img_sec2.png"
              title="Course 2"
              description="Toto je popis kurzu v ktorom je opisane to co sa na kurze naucite a co sa na nom dozviete, pre podrobnejsie info si rozkliknite tento kurz a zistite co sa v nom vsetko naucite, ale ajtak sa musite prihlasit aby ste to zistili"
              date="2025-01-25"
              duration="3 hours"
              capacity="25"
            />
            <CourseCard
              image="src/assets/home_img_sec2.png"
              title="Course 3"
              description="Toto je popis kurzu v ktorom je opisane to co sa na kurze naucite a co sa na nom dozviete, pre podrobnejsie info si rozkliknite tento kurz a zistite co sa v nom vsetko naucite, ale ajtak sa musite prihlasit aby ste to zistili"
              date="2025-02-10"
              duration="1.5 hours"
              capacity="20"
            />
            <CourseCard
              image="src/assets/home_img_sec2.png"
              title="Course 4"
              description="Toto je popis kurzu v ktorom je opisane to co sa na kurze naucite a co sa na nom dozviete, pre podrobnejsie info si rozkliknite tento kurz a zistite co sa v nom vsetko naucite, ale ajtak sa musite prihlasit aby ste to zistili"
              date="2025-03-05"
              duration="4 hours"
              capacity="15"
            />
            {/* Ďalšie kurzy môžu byť pridané */}
          </Slider>
        </div>
      </section>

      {/* sekcia s fotkami na lavej strane */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-48 items-center">
        {/* Prvý stĺpec */}
        <div className="flex flex-row gap-4">
          <img
            src="/src/assets/home_img_sec.png"
            alt="Image 1"
            className="rounded w-[300px]"
          />
          <img
            src="/src/assets/home_img_sec2.png"
            alt="Image 2"
            className="rounded w-[300px]"
          />
        </div>
        {/* druhý stĺpec */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            {heroContent2.heading}
          </h1>
          <p className="mt-4 text-gray-600">{heroContent2.description}</p>
          <a
            href={heroContent2.buttonLink}
            className="mt-6 inline-block px-6 py-3 bg-[#38412b] text-white text-lg font-medium rounded-lg hover:bg-[#2f371f] transition"
          >
            {heroContent2.buttonText}
          </a>
        </div>
      </section>

      {/* Hodnotenia kurzov */}
      <section className="flex flex-row">
        <div>
          <h1 className="text-3xl font-medium">Hodnotenia kurzov</h1>
          <div className="flex flex-row">
            <div className="bg-slate-100 rounded-lg p-4">
              <FaArrowLeft className="" />
            </div>
            <div className="bg-slate-100 rounded-lg p-4">
              <FaArrowRight className="" />
            </div>
          </div>
          <SecondSlider
            items={reviews.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                photo={testimonial.photo}
                quote={testimonial.quote}
              />
            ))}
          />
        </div>
        <div>
          <img
              src="/src/assets/reviewsCitat.png"
              alt="Image 1"
              className="rounded w-[600px]"
            />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
