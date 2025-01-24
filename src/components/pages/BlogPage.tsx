import { FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";
import ArrowButton from "../ui/ArrowButton";
import BlogPostCard from "../ui/BlogPost";
import Breadcrumbs from "../ui/Breadcrumbs";
import DentalCareTable from "../ui/tableBlog";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

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

const BlogPage = () => {
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
    <div>
      <section className="w-full bg-white px-4 lg:px-20">
  <div className="max-w-[1600px] mx-auto px-4 lg:px-24">
    <Breadcrumbs />
  </div>
</section>

{/* Hero Section */}
<section className="max-w-[1420px] bg-white mx-auto py-12 lg:py-24 border-b-2 border-gray-1">
  <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 gap-8">
    <h1 className="text-[28px] sm:text-[36px] lg:text-[58px] leading-tight font-semibold lg:text-left">
      Ako správne vykonať <br /> dentálnu hygienu
    </h1>
    <p className="text-[#736E69] lg:text-left lg:w-[500px] text-sm sm:text-base">
      Zistite, ako správne vykonávať dentálnu hygienu, predchádzať zubným
      ochoreniam a udržiavať zdravý úsmev. Naučte sa používať správne
      techniky čistenia a výber vhodných pomôcok na starostlivosť o zuby.
    </p>
  </div>
</section>

{/* Meta Info Section */}
<section className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between px-4 sm:px-[88px] py-8 bg-white gap-4">
  <div className="flex flex-row gap-4 items-center">
    <h2 className="text-orange-1">Kategoria</h2>
    <p>15.10 2024</p>
  </div>
  <div className="flex flex-row gap-2 items-center">
    <img
      src="/images/review_profile_photo.png"
      alt="post photo"
      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border border-gray-200"
    />
    <div className="flex flex-col">
      <p className="text-gray-5">Napísala</p>
      <p>MDDr. Natália Sládečková MSc</p>
    </div>
  </div>
</section>

{/* Banner Section */}
<section className="mx-auto flex flex-col justify-center bg-white mb-20 px-4">
  <img
    src="/images/banerBlog.png"
    alt="banner"
    className="w-full md:w-[1200px] mx-auto object-cover"
  />
</section>

{/* Article Section */}
<section className="clanok w-full bg-[#F3F3F1] px-4 sm:p-20 my-20">
  <div className="bg-white max-w-[1200px] mx-auto rounded p-8 flex flex-col items-center gap-8">
    <div className="text-start">
      <h1 className="font-semibold text-2xl sm:text-3xl py-4">Nadpis článku</h1>
      <p className="leading-7 pb-4 text-gray-5 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur. Orci facilisis sed habitant
        egestas turpis. Malesuada etiam turpis pharetra pharetra.
      </p>
      <ul className="leading-8 underline list-disc pl-4 text-gray-5">
        <li>Bold text - Zabezpečenie domácnosti</li>
        <li>Bold text - Zabezpečenie domácnosti</li>
        <li>Bold text - Zabezpečenie domácnosti</li>
      </ul>
      <h1 className="font-semibold text-2xl sm:text-3xl py-4">Nadpis druhého článku</h1>
      <p className="leading-7 pb-4 text-gray-5 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur. Orci facilisis sed habitant
        egestas turpis. Malesuada etiam turpis pharetra pharetra.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex flex-col items-center gap-1">
        <img src="/images/blogpost.png" alt="blogpost" className="w-full sm:w-96" />
        <p className="text-sm text-gray-5">Image courtesy of Laura Davidson via Unsplash</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img src="/images/blogpost.png" alt="blogpost" className="w-full sm:w-96" />
        <p className="text-sm text-gray-5">Image courtesy of Laura Davidson via Unsplash</p>
      </div>
    </div>
    <DentalCareTable />
    <div className="border-b-2 border-gray-3 w-full"></div>
    <section className="flex flex-col sm:flex-row gap-4 items-center w-full px-4">
      <h2 className="font-semibold">Zdieľať:</h2>
      <div className="flex flex-row gap-2">
        <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center p-2 cursor-pointer">
          <FaFacebook className="text-slate-100" size={20} />
        </div>
        <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center p-2 cursor-pointer">
          <FaInstagram className="text-slate-100" size={23} />
        </div>
        <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center p-2 cursor-pointer">
          <FaPaperPlane className="text-slate-100" size={18} />
        </div>
      </div>
    </section>
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
      className="my-10 flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide md:hidden pb-2"
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

export default BlogPage;
