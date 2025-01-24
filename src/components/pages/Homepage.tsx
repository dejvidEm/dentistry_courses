import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import CourseCard from "../ui/CourseCard";
import Testimonial from "../ui/ReviewCard";
import ResponsiveSlider from "../ui/Slider";
import { useRef, useState } from "react";
import ArrowButton from "../ui/ArrowButton";
import { Link } from "react-router-dom";
import BlogPostCard from "../ui/BlogPost";

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

const courses = [
  {
    image: "images/home_img_sec2.png",
    title: "DC/TMD Kalibračný kurz",
    description:
      "Kurz poskytuje prehľad o temporomandibulárnych poruchách (TMD), vrátane anatómie, etológie a diagnostiky. Účastníci získajú praktické skúsenosti s dotazníkmi, terapiami a efektívnou komunikáciou s pacientmi. Kurz poskytuje prehľad",
    date: "2025-01-20",
    duration: "(9 hodín)",
    capacity: "30",
  },
  {
    image: "images/home_img_sec2.png",
    title: "Opotrebovanie zubov",
    description:
      "Kurz poskytuje hlboké znalosti o etológii opotrebovania zubov, klasifikácii a preventívnych stratégiách. Účastníci sa naučia, ako hodnotiť, diagnostikovať a manažovať opotrebovanie zubov a ponúknuť pacientom prispôsobenú starostlivosť.",
    date: "2025-01-25",
    duration: "(9 hodín)",
    capacity: "25",
  },
  {
    image: "images/home_img_sec2.png",
    title: "Spánková zubná medicína",
    description:
      "Kurz ponúka pohľad na spánkové poruchy súvisiace so zubným lekárstvom, ako spánkové apnoe, bruxizmus a orofaciálnu bolesť. Účastníci sa naučia hodnotiť a manažovať tieto stavy so zameraním na praktické nástroje a starostlivosť o pacientov.",
    date: "2025-02-10",
    duration: "(9 hodín)",
    capacity: "20",
  },
  {
    image: "images/home_img_sec2.png",
    title: "DC/TMD Kalibračný kurz",
    description:
      "Kurz poskytuje prehľad o temporomandibulárnych poruchách (TMD), vrátane anatómie, etológie a diagnostiky. Účastníci získajú praktické skúsenosti s dotazníkmi, terapiami a efektívnou komunikáciou s pacientmi. Kurz poskytuje prehľad",
    date: "2025-03-05",
    duration: "(9 hodín)",
    capacity: "15",
  },
  {
    image: "images/home_img_sec2.png",
    title: "DC/TMD Kalibračný kurz",
    description:
      "Kurz poskytuje prehľad o temporomandibulárnych poruchách (TMD), vrátane anatómie, etológie a diagnostiky. Účastníci získajú praktické skúsenosti s dotazníkmi, terapiami a efektívnou komunikáciou s pacientmi. Kurz poskytuje prehľad",
    date: "2025-03-05",
    duration: "(9 hodín)",
    capacity: "15",
  },
  {
    image: "images/home_img_sec2.png",
    title: "DC/TMD Kalibračný kurz",
    description:
      "Kurz poskytuje prehľad o temporomandibulárnych poruchách (TMD), vrátane anatómie, etológie a diagnostiky. Účastníci získajú praktické skúsenosti s dotazníkmi, terapiami a efektívnou komunikáciou s pacientmi. Kurz poskytuje prehľad",
    date: "2025-03-05",
    duration: "(9 hodín)",
    capacity: "15",
  },
];

const HomePage: React.FC = () => {
  // Referencie pre oba slidery
  const coursesSliderRef = useRef<{
    handleNext: () => void;
    handlePrev: () => void;
  } | null>(null);
  const reviewsSliderRef = useRef<{
    handleNext: () => void;
    handlePrev: () => void;
  } | null>(null);

  // Funkcie na ovládanie kurzového slideru
  const handleCoursesPrev = () => coursesSliderRef.current?.handlePrev();
  const handleCoursesNext = () => coursesSliderRef.current?.handleNext();

  // Funkcie na ovládanie review slideru
  const handleReviewsPrev = () => reviewsSliderRef.current?.handlePrev();
  const handleReviewsNext = () => reviewsSliderRef.current?.handleNext();

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

  const [activeBlogSlide, setActiveBlogSlide] = useState(0); // Rozlišujeme názov
  const blogSliderRef = useRef<HTMLDivElement | null>(null); // Rozlišujeme referenciu

  const handleBlogScroll = () => {
    if (blogSliderRef.current) {
      const scrollLeft = blogSliderRef.current.scrollLeft;
      const cardWidth = blogSliderRef.current.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveBlogSlide(index);
    }
  };

  const [activeKurzSlide, setActiveKurzSlide] = useState(0); // Rozlišujeme názov
  const kurzSliderRef = useRef<HTMLDivElement | null>(null); // Rozlišujeme referenciu

  const handleKurzScroll = () => {
    if (kurzSliderRef.current) {
      const scrollLeft = kurzSliderRef.current.scrollLeft;
      const cardWidth = kurzSliderRef.current.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveKurzSlide(index);
    }
  };

  const blogPosts = [
    {
      id: 1,
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description:
        "Naučte sa najlepšie postupy a techniky, aby ste svojim pacientom poskytli profesionálnu a dôklad...",
      date: "16.10.2024",
    },
    {
      id: 2,
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description:
        "Naučte sa najlepšie postupy a techniky, aby ste svojim pacientom poskytli profesionálnu a dôklad...",
      date: "16.10.2024",
    },
    {
      id: 3,
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description:
        "Naučte sa najlepšie postupy a techniky, aby ste svojim pacientom poskytli profesionálnu a dôklad...",
      date: "16.10.2024",
    },
  ];

  return (
    <div className="bg-[#F3F3F1] mt-16 md:mt-24">
      {/* Hero Section */}
<section className="w-full bg-white mx-auto px-4 sm:px-16 md:px-32 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  {/* Fotka pre mobilné zariadenia pred nadpisom */}
  <div className="block sm:hidden">
    <img
      src="/images/Homepage_photo_2.png"
      alt="Image for mobile"
      className="rounded w-full mb-8"
    />
  </div>

  <div>
    <h1 className="text-4xl sm:text-5xl md:text-[58px] font-bold text-gray-800 leading-tight">
      {heroContent.heading}
    </h1>
    <p className="mt-4 text-gray-600 pb-8 text-sm sm:text-base">
      {heroContent.description}
    </p>
    <Link to="/kurzy">
      <ArrowButton text="Všetky naše kurzy" />
    </Link>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {/* Fotky pre väčšie obrazovky */}
    <div className="hidden sm:flex flex-col gap-4">
      <img
        src="/images/Homepage_photo_1.png"
        alt="Image 1"
        className="rounded"
      />
      <img
        src="/images/Homepage_photo_3.png"
        alt="Image 2"
        className="rounded"
      />
    </div>
    <div className="hidden sm:block md:col-span-2">
      <img
        src="/images/Homepage_photo_2.png"
        alt="Image 3"
        className="rounded h-full w-full object-cover"
      />
    </div>
  </div>
</section>

<section className="w-full mx-auto py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800">Prečo si vybrať nás?</h2>

    {/* Slider pre mobilné zariadenia */}
    <div
      ref={sliderRef}
      className="mt-10 flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide md:hidden"
      onScroll={handleScroll}
    >
      {features.map((feature) => (
        <div
          key={feature.id}
          className="bg-white p-6 rounded w-[85%] flex-shrink-0 snap-start"
        >
          <div className="flex flex-col gap-4">
            <div className="bg-[#E6EDD5] text-[#38412b] w-20 h-20 flex z-10 items-center justify-center rounded-full text-lg font-bold">
              <div className="bg-[#D4E0B9] text-[#38412b] w-16 h-16 flex z-10 items-center justify-center rounded-full text-lg font-bold">
                <div className="bg-[#B8C895] text-[#38412b] w-12 h-12 z-20 flex items-center justify-center rounded-full text-lg font-bold">
                  {feature.id < 10 ? `0${feature.id}` : feature.id}
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
          </div>
          <p className="mt-4 text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>

    {/* Grid pre desktop */}
    <div className="mt-10 grid-cols-1 md:grid-cols-3 gap-4 hidden md:grid">
      {features.map((feature) => (
        <div key={feature.id} className="bg-white p-6 rounded">
          <div className="flex flex-col gap-4">
            <div className="bg-[#E6EDD5] text-[#38412b] w-20 h-20 flex z-10 items-center justify-center rounded-full text-lg font-bold">
              <div className="bg-[#D4E0B9] text-[#38412b] w-16 h-16 flex z-10 items-center justify-center rounded-full text-lg font-bold">
                <div className="bg-[#B8C895] text-[#38412b] w-12 h-12 z-20 flex items-center justify-center rounded-full text-lg font-bold">
                  {feature.id < 10 ? `0${feature.id}` : feature.id}
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
          </div>
          <p className="mt-4 text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>

    {/* Indikátory (pásiky) pre mobil */}
    <div className="flex justify-center items-center mt-6 space-x-1 md:hidden">
      {features.map((_, index) => (
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

      {/* tmavozelena sekcia s kurzami */}
      <section className="w-full mx-auto slider bg-[#1C2820] py-16 px-16 hidden md:flex flex-col gap-12">
        <div className="flex max-w-[1400px] mx-auto flex-col justify-between items-start">
          <div className="flex flex-row pb-8">
            <div className="flex flex-col gap-2 w-3/5">
              <h1 className="text-slate-100 text-3xl font-bold mb-4">
                Objavte kurzy, ktoré <br /> Vás posunú vpred!
              </h1>
            </div>
            <div className="flex flex-col w-2/5 gap-4">
              <p className="text-slate-100">
                Pripojte sa k našim profesionálnym kurzom a získajte praktické
                zručnosti, aktuálne vedomosti a certifikáciu, ktorá vám otvorí
                nové možnosti. Naše kurzy sú navrhnuté tak, aby ste sa naučili
                konkrétne techniky a postupy, ktoré uplatníte.
              </p>
              <div className="arrows flex flex-row gap-4">
                <div
                  className="bg-slate-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
                  onClick={handleCoursesPrev}
                >
                  <FaArrowLeft />
                </div>
                <div
                  className="bg-slate-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
                  onClick={handleCoursesNext}
                >
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
          {/* Slider s kurzami */}
          <ResponsiveSlider
            ref={coursesSliderRef}
            items={courses.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                title={course.title}
                description={course.description}
                date={course.date}
                duration={course.duration}
                capacity={course.capacity}
              />
            ))}
            visibleItems={3}
            showPartialNext={true}
          />
        </div>
      </section>




      <section className="bg-[#1C2820] w-full mx-auto py-16 block md:hidden">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-slate-100 pb-4">
      Objavte kurzy, ktoré <br /> Vás posunú vpred!
    </h2>
    <p className="text-slate-100 pb-8">
      Pripojte sa k našim profesionálnym kurzom a získajte praktické zručnosti, aktuálne vedomosti a certifikáciu, ktorá vám otvorí nové možnosti. Naše kurzy sú navrhnuté tak, aby ste sa naučili konkrétne techniky a postupy, ktoré uplatníte.
    </p>
    <Link to="/kurzy">
      <ArrowButton text="Všetky naše kurzy" variant="white" />
    </Link>

    {/* Slider pre mobilné zariadenia */}
    <div
      ref={kurzSliderRef}
      className="mt-10 flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide md:hidden"
      style={{ scrollSnapType: 'x mandatory' }}
      onScroll={handleKurzScroll}
    >
      {courses.map((course, index) => (
        <div
          key={index}
          className="w-[85%] flex-shrink-0 snap-center"
          style={{ scrollSnapAlign: 'center' }}
        >
          <CourseCard
            image={course.image}
            title={course.title}
            description={course.description}
            date={course.date}
            duration={course.duration}
            capacity={course.capacity}
          />
        </div>
      ))}
    </div>

    {/* Indikátory (pásiky) pre mobil */}
    <div className="flex justify-center items-center mt-6 space-x-1 md:hidden">
      {courses.map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded transition-all duration-300 ${
            activeKurzSlide === index
              ? "bg-gray-300 w-10" // Aktívny pásik: tmavší a dlhší
              : "bg-[#38412b] w-4" // Neaktívne pásiky: kratšie a svetlejšie
          }`}
        ></div>
      ))}
    </div>
  </div>
</section>





      {/* sekcia s fotkami na lavej strane */}
      <section className="max-w-[1400px] mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Druhý stĺpec */}
  <div className="">
    <h1 className="text-3xl font-bold text-gray-800 leading-tight">
      {heroContent2.heading}
    </h1>
    <p className="mt-4 text-gray-600 pb-8">{heroContent2.description}</p>
    <Link to="/about">
      <ArrowButton text="Zistite o Nás viac" />
    </Link>
  </div>

  {/* Prvý stĺpec - Fotka */}
  <div className="flex justify-center gap-4 lg:justify-start">
    <img
      src="/images/home_img_sec.png"
      alt="Image 1"
      className="rounded w-full lg:w-[300px]"
    />
    <img
      src="/images/home_img_sec2.png"
      alt="Image 1"
      className="rounded w-full lg:w-[300px] hidden md:block"
    />
  </div>
</section>

      {/* Hodnotenia kurzov */}
      <section className="max-w-[1600px] mx-auto reviews flex flex-col lg:flex-row py-24 pb-32 px-8 gap-8 lg:gap-12">
        <div className="flex flex-col gap-8 w-full lg:w-2/3">
          <div className="flex flex-col lg:flex-col justify-between items-start lg:items-start gap-4 px-8">
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
            className="w-[350px]"
          />
        </div>
      </section>

      {/* Sekcia s článkami */}
      <section className="w-full mx-auto py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 pb-4">
      Inšpirujte sa našimi článkami!
    </h2>
    <Link to="/blog">
      <ArrowButton text="Všetky naše články" />
    </Link>

    {/* Slider pre mobilné zariadenia */}
    <div
      ref={blogSliderRef}
      className="mt-10 flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide md:hidden"
      onScroll={handleBlogScroll}
    >
      {blogPosts.map((post) => (
        <div key={post.id} className="w-[85%] flex-shrink-0 snap-start">
          <BlogPostCard
            category={post.category}
            imageUrl={post.imageUrl}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        </div>
      ))}
    </div>

    {/* Grid pre desktop */}
    <div className="mt-10 grid-cols-1 md:grid-cols-3 gap-4 hidden md:grid">
      {blogPosts.map((post) => (
        <div key={post.id} className="">
          <BlogPostCard
            category={post.category}
            imageUrl={post.imageUrl}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        </div>
      ))}
    </div>

    {/* Indikátory (pásiky) pre mobil */}
    <div className="flex justify-center items-center mt-6 space-x-1 md:hidden">
      {blogPosts.map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded transition-all duration-300 ${
            activeBlogSlide === index
              ? "bg-[#38412b] w-10" // Aktívny pásik: tmavší a dlhší
              : "bg-gray-300 w-4" // Neaktívne pásiky: kratšie a svetlejšie
          }`}
        ></div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default HomePage;
