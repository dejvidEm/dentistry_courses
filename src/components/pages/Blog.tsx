import { useEffect, useState } from "react";
import BlogPostCard from "../ui/BlogPost";
import Breadcrumbs from "../ui/Breadcrumbs";
import CategoryFilter from "../ui/CategoryFilter";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
  count: number;
}

const Blog: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  const posts = [
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    {
      id: "1",
      category: "Kategoria",
      imageUrl: "/images/banner_photo.png",
      title: "Ako správne vykonať dentálnu hygienu",
      description: "Naučte sa najlepšie postupy a techniky...",
      date: "16.10.2024",
    },
    // ...other posts
  ];

  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    const hardcodedCategories = [
      { id: 1, name: "Všetky články", count: 40 },
      { id: 2, name: "Kategória 1", count: 20 },
      { id: 3, name: "Kategória 2", count: 4 },
      { id: 4, name: "Kategória 3", count: 4 },
      { id: 5, name: "Kategória 4", count: 4 },
    ];
    setCategories(hardcodedCategories);
  }, []);

  const handleCategorySelect = (categoryId: number) => {
    console.log("Selected category ID:", categoryId);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const displayedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const startPostIndex = (currentPage - 1) * postsPerPage + 1;
  const endPostIndex = Math.min(currentPage * postsPerPage, posts.length);

  return (
    <div className="bg-[#F3F3F1]">
      <section className="w-full bg-white px-4 lg:px-20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-24">
          <Breadcrumbs />
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full bg-white mx-auto py-10 lg:pt-24">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 lg:px-[88px] gap-8">
          <h1 className="text-[36px] w-full lg:text-[58px] leading-none font-semibold lg:text-left">
            Objavte ďalšie <br /> vzdelávacie zdroje
          </h1>
          <p className="text-[#736E69] lg:text-left lg:w-[500px]">
            Objavte užitočné tipy, aktuálne trendy a odborné poznatky zo sveta
            stomatológie, ktoré vás posunú ďalej. Naše články sú plné inšpirácie
            a praktických rád, ktoré využijete vo svojej praxi. Sledujte novinky
            a rozvíjajte svoje schopnosti s nami!
          </p>
        </div>
        <div className="max-w-[1400px] px-4 md:px-[88px] mt-16">
          <CategoryFilter
            categories={categories}
            onSelectCategory={handleCategorySelect}
          />
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-20 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <BlogPostCard
                key={index}
                category={post.category}
                imageUrl={post.imageUrl}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Pagination Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-20 py-8 flex flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500">
          {`${startPostIndex}-${endPostIndex} from ${posts.length} total`}
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`w-10 h-10 flex items-center justify-center border rounded ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lsaquo;
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={`w-10 h-10 flex items-center justify-center border rounded ${
                  currentPage === page
                    ? "border-[#1C2820] text-[#1C2820]"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
          <button
            className={`w-10 h-10 flex items-center justify-center border rounded ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &rsaquo;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
