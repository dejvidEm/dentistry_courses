
import BlogPostCard from '../ui/BlogPost'
import Breadcrumbs from '../ui/Breadcrumbs'

const Blog: React.FC = () => {
  return (
    <div className='bg-white'>
      <section className="w-full px-20">
        <Breadcrumbs/>
      </section>

      {/* Hero Section */}
      <section>
        <div className='flex flex-row justify-between px-20'>
          <h1 className='text-5xl'>Objavte ďalšie <br /> vzdelávacie zdroje</h1>
          <p className='w-[500px]'>Objavte užitočné tipy, aktuálne trendy a odborné poznatky zo sveta stomatológie, ktoré vás posunú ďalej. Naše články sú plné inšpirácie a praktických rád, ktoré využijete vo svojej praxi. Sledujte novinky a rozvíjajte svoje schopnosti s nami!</p>
        </div>
      </section>

      {/* Blog Section */}
      <section>
        <div className='w-[1200px] mx-auto grid grid-cols-3 gap-8'>
          <BlogPostCard
            category={'Kategoria'}
            imageUrl={'src/assets/banner_photo.png'}
            title={'Ako správne vykonať dentálnu hygienu'}
            description={'Naučte sa najlepšie postupy a techniky, aby ste svojim pacientom poskytli profesionálnu a dôklad...'}
            date={'16.10.2024'}
          />
          <BlogPostCard
            category={'Kategoria'}
            imageUrl={'src/assets/banner_photo.png'}
            title={'Ako správne vykonať dentálnu hygienu'}
            description={'Naučte sa najlepšie postupy a techniky, aby ste svojim pacientom poskytli profesionálnu a dôklad...'}
            date={'16.10.2024'}
          />
          <BlogPostCard
            category={'Kategoria'}
            imageUrl={'src/assets/banner_photo.png'}
            title={'Ako správne vykonať dentálnu hygienu'}
            description={'Naučte sa najlepšie postupy a techniky, aby ste svojim pacientom poskytli profesionálnu a dôklad...'}
            date={'16.10.2024'}
          />
          <BlogPostCard
            category={'Kategoria'}
            imageUrl={'src/assets/banner_photo.png'}
            title={'Ako správne vykonať dentálnu hygienu'}
            description={'Naučte sa najlepšie postupy a techniky, aby ste svojim pacientom poskytli profesionálnu a dôklad...'}
            date={'16.10.2024'}
          />
          <BlogPostCard
            category={'Kategoria'}
            imageUrl={'src/assets/banner_photo.png'}
            title={'Ako správne vykonať dentálnu hygienu'}
            description={'Naučte sa najlepšie postupy a techniky, aby ste svojim pacientom poskytli profesionálnu a dôklad...'}
            date={'16.10.2024'}
          />
        </div>
      </section>
    </div>
  )
}

export default Blog