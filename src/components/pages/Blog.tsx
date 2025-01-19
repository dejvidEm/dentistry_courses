import { useEffect, useState } from 'react';
import BlogPostCard from '../ui/BlogPost';
import Breadcrumbs from '../ui/Breadcrumbs';
import CategoryFilter from '../ui/CategoryFilter';

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
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Ako správne vykonať dentálnu hygienu', description: 'Naučte sa najlepšie postupy a techniky...', date: '16.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Zlepšenie komunikácie s pacientmi', description: 'Objavte tipy a triky na efektívne komunikovanie...', date: '17.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Dentálna hygiena pre začiatočníkov', description: 'Praktické rady a tipy pre začiatočníkov...', date: '18.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Pokročilé techniky v stomatológii', description: 'Získajte nové znalosti a skúsenosti...', date: '19.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Ako zvládnuť stomatologický stres', description: 'Riešenie bežných problémov v praxi...', date: '20.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Základy spánkovej medicíny', description: 'Dôležité informácie o spánkovej medicíne...', date: '21.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Moderné prístupy v stomatológii', description: 'Objavte nové trendy a technológie...', date: '22.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Prevencia opotrebovania zubov', description: 'Ako predchádzať problémom so zubami...', date: '23.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Efektívna komunikácia v tíme', description: 'Budovanie lepších vzťahov na pracovisku...', date: '24.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Práca s pacientmi v krízových situáciách', description: 'Ako zvládať náročné situácie...', date: '25.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Práca s pacientmi v krízových situáciách', description: 'Ako zvládať náročné situácie...', date: '25.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Práca s pacientmi v krízových situáciách', description: 'Ako zvládať náročné situácie...', date: '25.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Práca s pacientmi v krízových situáciách', description: 'Ako zvládať náročné situácie...', date: '25.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Práca s pacientmi v krízových situáciách', description: 'Ako zvládať náročné situácie...', date: '25.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Práca s pacientmi v krízových situáciách', description: 'Ako zvládať náročné situácie...', date: '25.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Práca s pacientmi v krízových situáciách', description: 'Ako zvládať náročné situácie...', date: '25.10.2024' },
    { category: 'Kategoria', imageUrl: '/images/banner_photo.png', title: 'Práca s pacientmi v krízových situáciách', description: 'Ako zvládať náročné situácie...', date: '25.10.2024' },
  ];

  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    const hardcodedCategories = [
      { id: 1, name: 'Všetky články', count: 40 },
      { id: 2, name: 'Kategória 1', count: 20 },
      { id: 3, name: 'Kategória 2', count: 4 },
      { id: 4, name: 'Kategória 3', count: 4 },
      { id: 5, name: 'Kategória 4', count: 4 },
    ];
    setCategories(hardcodedCategories);
  }, []);

  const handleCategorySelect = (categoryId: number) => {
    console.log('Selected category ID:', categoryId);
    // Tu môžeš vykonať akciu, napr. načítať články pre vybranú kategóriu
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const displayedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const startPostIndex = (currentPage - 1) * postsPerPage + 1;
  const endPostIndex = Math.min(currentPage * postsPerPage, posts.length);

  return (
    <div className="bg-white">
      <section className="w-full px-20 py-8">
        <Breadcrumbs />
      </section>

      {/* Hero Section */}
      <section className="py-8">
        <div className="flex flex-row justify-between px-20 gap-8">
          <h1 className="text-5xl leading-snug">Objavte ďalšie <br /> vzdelávacie zdroje</h1>
          <p className="w-[500px] leading-relaxed">
            Objavte užitočné tipy, aktuálne trendy a odborné poznatky zo sveta
            stomatológie, ktoré vás posunú ďalej. Naše články sú plné inšpirácie
            a praktických rád, ktoré využijete vo svojej praxi. Sledujte novinky
            a rozvíjajte svoje schopnosti s nami!
          </p>
        </div>
        <div className="mt-8">
          <CategoryFilter categories={categories} onSelectCategory={handleCategorySelect} />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-8">
        <div className="w-[1200px] mx-auto grid grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <BlogPostCard
              key={index}
              category={post.category}
              imageUrl={post.imageUrl}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          ))}
        </div>
      </section>

      {/* Pagination Section */}
      <section className="flex flex-row justify-between items-center px-20 py-8 gap-4">
        <div className="text-sm text-gray-500">
          {`${startPostIndex}-${endPostIndex} from ${posts.length} total`}
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`w-10 h-10 flex items-center justify-center border rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lsaquo;
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              className={`w-10 h-10 flex items-center justify-center border rounded ${currentPage === page ? 'border-[#1C2820] text-[#1C2820]' : 'hover:bg-gray-200'}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className={`w-10 h-10 flex items-center justify-center border rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'}`}
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
