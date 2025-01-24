import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs";
import CourseCard from "../ui/CourseCard";
import ArrowButton from "../ui/ArrowButton";
import Testimonial from "../ui/ReviewCard";
import ResponsiveSlider from "../ui/Slider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Faq from "../ui/Faq";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import RegistrationModal from "../ui/Modal";
import BlogPostCard from "../ui/BlogPost";

interface Params {
  id: number;
  title: string;
  description: string;
}

const kurzyData = [
  {
    id: "1",
    name: "DC/TMD Kalibračný kurz",
    category: "Kategória 1",
    description:
      "V tomto 9-hodinovom kurze začneme s anatómiou žuvacieho systému a rôznymi faktormi, ktoré prispievajú k vzniku temporomandibulárnych porúch (TMD). Podrobne sa budeme zaoberať etológiou TMD a diskutovať o typickom profile pacienta, identifikovaní rizikových faktorov a ochoreniach. Účastníci sa zoznámia s diagnostickými kritériami TMD, pričom sa zameriame na skrátenú verziu. ",
    author: "MDDr. Natália Sládečková MSc",
    authorImage: "images/review_profile_photo.png",
    courseImage: "/images/course_img.png",
    price: "950",
    date: "2025-01-20",
    location: "Bratislava",
    capacity: "4/15",
  },
  {
    id: "2",
    name: "Opotrebovanie zubov",
    category: "Kategória 2",
    description:
      "V tomto 9-hodinovom kurze začneme s anatómiou žuvacieho systému a rôznymi faktormi, ktoré prispievajú k vzniku temporomandibulárnych porúch (TMD). Podrobne sa budeme zaoberať etológiou TMD a diskutovať o typickom profile pacienta, identifikovaní rizikových faktorov a ochoreniach. Účastníci sa zoznámia s diagnostickými kritériami TMD, pričom sa zameriame na skrátenú verziu. ",
    author: "MDDr. Natália Sládečková MSc",
    authorImage: "images/review_profile_photo.png",
    courseImage: "/images/course_img.png",
    price: "950",
    date: "2025-01-25",
    location: "Bratislava",
    capacity: "4/15",
  },
  {
    id: "3",
    name: "Spánková zubná medicína",
    category: "Kategória 3",
    description:
      "V tomto 9-hodinovom kurze začneme s anatómiou žuvacieho systému a rôznymi faktormi, ktoré prispievajú k vzniku temporomandibulárnych porúch (TMD). Podrobne sa budeme zaoberať etológiou TMD a diskutovať o typickom profile pacienta, identifikovaní rizikových faktorov a ochoreniach. Účastníci sa zoznámia s diagnostickými kritériami TMD, pričom sa zameriame na skrátenú verziu. ",
    author: "MDDr. Natália Sládečková MSc",
    authorImage: "images/review_profile_photo.png",
    courseImage: "/images/course_img.png",
    price: "950",
    date: "2025-02-01",
    location: "Bratislava",
    capacity: "4/15",
  },
];

const parameters: Params[] = [
  {
    id: 1,
    title: "Overené informácie",
    description:
      "Na našich kurzoch poskytujeme len informácie, ktoré sú podložené vedeckými dôkazmi a dátami. Je pre mňa kľúčové, aby sme sa ako odborníci riadili vedou a prispôsobovali svoje postupy najnovším poznatkom. Táto filozofia ma poháňa aj pri mojom doktorandskom výskume. Verím, že len tak môžeme poskytovať pacientom tú najlepšiu možnú starostlivosť.",
  },
  {
    id: 2,
    title: "Overené informácie",
    description:
      "Na našich kurzoch poskytujeme len informácie, ktoré sú podložené vedeckými dôkazmi a dátami. Je pre mňa kľúčové, aby sme sa ako odborníci riadili vedou a prispôsobovali svoje postupy najnovším poznatkom. Táto filozofia ma poháňa aj pri mojom doktorandskom výskume. Verím, že len tak môžeme poskytovať pacientom tú najlepšiu možnú starostlivosť.",
  },
  {
    id: 3,
    title: "Overené informácie",
    description:
      "Na našich kurzoch poskytujeme len informácie, ktoré sú podložené vedeckými dôkazmi a dátami. Je pre mňa kľúčové, aby sme sa ako odborníci riadili vedou a prispôsobovali svoje postupy najnovším poznatkom. Táto filozofia ma poháňa aj pri mojom doktorandskom výskume. Verím, že len tak môžeme poskytovať pacientom tú najlepšiu možnú starostlivosť.",
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

const images = [
  {
    id: 1,
    image: "/images/image1.png",
  },
  {
    id: 1,
    image: "/images/image2.png",
  },
  {
    id: 1,
    image: "/images/image3.png",
  },
  {
    id: 1,
    image: "/images/image4.png",
  },
  {
    id: 1,
    image: "/images/Homepage_photo_1.png",
  },
  {
    id: 1,
    image: "/images/image2.png",
  },
  {
    id: 1,
    image: "/images/image1.png",
  },
  {
    id: 1,
    image: "/images/image2.png",
  },
];

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

const KurzDetail: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Stmavenie stránky pri otvorení modalu
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

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

  const handleReviewsPrev = () => reviewsSliderRef.current?.handlePrev();
  const handleReviewsNext = () => reviewsSliderRef.current?.handleNext();

  const { id } = useParams<{ id: string }>();
  const kurz = kurzyData.find((kurz) => kurz.id === id);

  if (!kurz) {
    return <div>Kurz s ID {id} nebol nájdený.</div>;
  }

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

  return (
    <div className="space-y-12 bg-[#F3F3F1]">
      <section className="w-full px-6 md:px-20">
        <Breadcrumbs />
      </section>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-start md:items-center gap-12 px-6 md:px-20 py-10">
  <div className="flex-1 max-w-[600px]">
    <h1 className="text-4xl md:text-7xl font-bold mb-4">{kurz.name}</h1>
    <p className="text-gray-600 mb-8">{kurz.description}</p>
    <div onClick={openModal}>
      <ArrowButton text="Prihlásiť sa" />
    </div>
    <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    <p className="text-2xl font-semibold py-10">
      <span className="text-gray-5 text-[20px]">Cena:</span>{" "}
      <span className="text-3xl text-green-6">{kurz.price}€</span>
    </p>
  </div>
  <div className="relative flex-1 w-full md:w-1/3">
    <img
      src={kurz.courseImage}
      alt={kurz.name}
      className="w-full h-auto rounded-lg object-cover"
    />
    <div className="absolute flex flex-row w-[95%] left-1/2 transform -translate-x-1/2 bottom-4 bg-white bg-opacity-95 p-4 rounded-md shadow-md">
      <div className="mr-auto">
        <h2 className="font-bold text-lg">Dátum:</h2>
        <p className="text-sm text-gray-700 font-semibold">{kurz.date}</p>
      </div>
      <div className="border-l border-gray-300 h-auto mx-4"></div>
      <div className="mr-auto">
        <h2 className="font-bold text-lg">Lokácia:</h2>
        <p className="text-sm text-gray-700 font-semibold">{kurz.location}</p>
      </div>
      <div className="border-l border-gray-300 h-auto mx-4"></div>
      <div className="mr-auto">
        <h2 className="font-bold text-lg">Kapacita:</h2>
        <p className="text-sm text-gray-700 font-semibold">{kurz.capacity}</p>
      </div>
    </div>
  </div>
</section>

      {/* pre koho Section */}
      <section className="w-full mx-auto py-16 bg-green-7">
  <div className="max-w-[1600px] mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between">
      <h2 className="text-3xl font-bold text-slate-100 pb-4">
        Pre koho je kurz určený?
      </h2>
      <div className="flex flex-col gap-4 max-w-[600px]">
        <p className="text-slate-100 pb-4">
          Ak vaša špecializácia nie je uvedená, ale máte záujem o účasť na kurze, prosím, kontaktujte nás. Rádi vám poskytneme viac informácií a pomôžeme vám s registráciou, aby ste sa mohli pripojiť k našemu vzdelávaciemu programu.
        </p>
        <Link to="/contact">
          <ArrowButton text="Kontaktuje Nás" variant="white" />
        </Link>
      </div>
    </div>

    {/* Slider pre mobilné zariadenia */}
    <div
      ref={blogSliderRef}
      className="mt-10 flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide md:hidden"
      onScroll={handleBlogScroll}
    >
      {parameters.map((param) => (
        <div key={param.id} className="w-[85%] flex-shrink-0 snap-start">
          <div className="p-4 bg-white rounded-lg shadow-md flex flex-col justify-between min-h-[200px]">
            <h3 className="text-xl font-bold text-gray-800">
              {param.title}
            </h3>
            <p className="text-gray-600 mt-2">{param.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Grid pre desktop */}
    <div className="mt-10 grid-cols-1 md:grid-cols-3 gap-4 hidden md:grid">
      {parameters.map((param) => (
        <div key={param.id} className="flex">
          <div className="p-4 bg-white rounded-lg shadow-md flex flex-col justify-between min-h-[200px]">
            <h3 className="text-xl font-bold text-gray-800">
              {param.title}
            </h3>
            <p className="text-gray-600 mt-2">{param.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Indikátory (pásiky) pre mobil */}
    <div className="flex justify-center items-center mt-6 space-x-1 md:hidden">
      {parameters.map((_, index) => (
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

      {/* Obsah Section */}
      <section className="flex flex-col md:flex-row gap-8 px-6 md:px-20 py-16 pb-24">
  {/* Text */}
  <div className="text-black flex flex-col gap-8 md:w-1/2">
    <h1 className="font-bold text-2xl md:text-3xl">Obsah kurzu</h1>
    <p className="text-sm md:text-base">
      Program je navrhnutý tak, aby účastníkom poskytol teoretické a praktické
      znalosti potrebné na správnu diagnostiku a liečbu TMD.
    </p>
    <div className="w-full md:w-96">
      <ArrowButton text="Prihlásiť sa" />
    </div>
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <img
        src="/images/Homepage_photo_1.png"
        alt="img1"
        className="w-full md:w-56 hidden md:block"
      />
      <img
        src="/images/Homepage_photo_2.png"
        alt="img2"
        className="w-full md:w-56"
      />
    </div>
  </div>
  {/* Harmonogram */}
  <div className="px-4 flex-1 md:w-1/2">
    <div className="max-w-4xl mx-auto space-y-4">
      {/* Piatočný program */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <div className="flex justify-between items-center mb-4 text-sm md:text-base">
          <h2 className="font-bold">Piatok</h2>
          <span className="text-gray-600">14:00 - 17:30</span>
        </div>
        <hr className="mb-4" />
        <div className="space-y-4 text-sm md:text-base">
          <div className="flex justify-between">
            <p>Anatómia, DC TMD, orofaciálna bolesť</p>
            <span className="text-gray-600">14:00 - 15:30</span>
          </div>
          <div className="flex justify-between">
            <p>Coffee break</p>
            <span className="text-gray-600">15:30 - 16:00</span>
          </div>
          <div className="flex justify-between">
            <p>Temporomandibulárne poruchy ich delenie a etiológiá</p>
            <span className="text-gray-600">16:00 - 17:30</span>
          </div>
        </div>
      </div>

      {/* Sobotný program */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <div className="flex justify-between items-center mb-4 text-sm md:text-base">
          <h2 className="font-bold">Sobota</h2>
          <span className="text-gray-600">09:00 - 17:00</span>
        </div>
        <hr className="mb-4" />
        <div className="space-y-4 text-sm md:text-base">
          <div className="flex justify-between">
            <p>Dotazníky, ako ich používať v praxi</p>
            <span className="text-gray-600">09:00 - 10:30</span>
          </div>
          <div className="flex justify-between">
            <p>Kalibračné cvičenia, nácvik vyšetrenia</p>
            <span className="text-gray-600">11:00 - 12:30</span>
          </div>
          <div className="flex justify-between">
            <p>Obed</p>
            <span className="text-gray-600">12:30 - 13:30</span>
          </div>
          <div className="flex justify-between">
            <p>Manažment temp. porúch, poradenstvo, životný štýl</p>
            <span className="text-gray-600">13:30 - 15:00</span>
          </div>
          <div className="flex justify-between">
            <p>Coffee break</p>
            <span className="text-gray-600">15:00 - 15:30</span>
          </div>
          <div className="flex justify-between">
            <p>Nácvik komunikácie s pacientami a komunikačné stratégie</p>
            <span className="text-gray-600">15:30 - 17:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Lektorka kurzu */}
      <section className="max-w-[1400px] mx-auto flex-row gap-16 pb-24 hidden md:flex">
        {/* nadpis a citat */}
        <div className="w-1/3 flex flex-col justify-between">
          <h1 className="font-bold text-3xl">
            Lektorka kurzu - <br />
            odborníčka na TMD
          </h1>
          <div className="bg-white rounded flex flex-col p-4 gap-2">
            <BiSolidQuoteAltLeft className="text-orange-1" size={30} />
            <p>
              Mojím cieľom je poskytnúť účastníkom nielen teoretické vedomosti,
              ale aj reálne nástroje, ktoré môžu aplikovať v každodennej praxi.
            </p>
          </div>
        </div>

        {/* fotka */}
        <div className="w-56">
          <img
            src="/images/employee1.png"
            alt="Lektorka kurzu"
            className="w-56"
          />
        </div>

        {/* About */}
        <div className="w-1/3 flex-col justify-end hidden lg:flex">
          <h2 className="font-bold text-xl">— MDDr. Natália Sládečková MSc</h2>
          <p>
            S odbornými skúsenosťami v oblasti orofaciálnej bolesti a
            dysfunkcií, lektorka, zubná lekárka a gnátologička, pôsobí v
            Amsterdame a zdieľa svoje znalosti v diagnostike a liečbe TMD s
            účastníkmi.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="hidden lg:flex flex-row justify-between px-10">
        <div className="flex flex-col gap-8 w-1/2">
          <h1 className="text-4xl font-bold">Často kladené otázky</h1>
          <p className="w-[400px]">
            Máte otázky? Možno tu nájdete odpovede na niektoré z vašich otázok.
            Ak nie, neváhajte nás kontaktovať prostredníctvom formulára!
          </p>
          <div className="w-96">
            <ArrowButton text="Kontaktujte Nás" />
          </div>
        </div>
        <div className="w-1/2">
          <Faq />
        </div>
      </section>

      <section className="w-full mx-auto slider py-16 px-16 flex flex-col gap-12">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col gap-2 w-3/5">
            <h1 className="text-gray-950 text-3xl font-bold">
              Momentky z nášich kurzov
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="arrows flex flex-row gap-4">
              <div
                className="bg-white rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
                onClick={handleCoursesPrev}
              >
                <FaArrowLeft />
              </div>
              <div
                className="bg-white rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
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
          items={images.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt="Kurz"
              className="w-full h-auto rounded-lg object-cover"
            />
          ))}
          visibleItems={5}
          showPartialNext={true}
        />
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

export default KurzDetail;
