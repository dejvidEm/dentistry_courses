import { FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";
import ArrowButton from "../ui/ArrowButton";
import BlogPostCard from "../ui/BlogPost";
import Breadcrumbs from "../ui/Breadcrumbs";
import DentalCareTable from "../ui/tableBlog";

const BlogPage = () => {
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
          <h1 className="text-[36px] lg:text-[58px] leading-none font-semibold text-center lg:text-left">
            Ako správne vykonať <br /> dentálnu hygienu
          </h1>
          <p className="text-[#736E69] text-center lg:text-left lg:w-[500px]">
            Zistite, ako správne vykonávať dentálnu hygienu, predchádzať zubným
            ochoreniam a udržiavať zdravý úsmev. Naučte sa používať správne
            techniky čistenia a výber vhodných pomôcok na starostlivosť o zuby.
            Starajte sa o svoju dentálnu hygienu a predchádzajte problémom.
          </p>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto flex flex-row justify-between px-[88px] py-8 bg-white">
        <div className="flex flex-row gap-4">
          <h2 className="text-orange-1">Kategoria</h2>
          <p>15.10 2024</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img
            src="/images/review_profile_photo.png"
            alt="post photo"
            className="w-16 h-16 rounded-full object-cover border border-gray-200"
          />
          <div className="flex flex-col">
            <p className="text-gray-5">Napísala</p>
            <p>MDDr. Natália Sládečková MSc</p>
          </div>
        </div>
      </section>

      <section className="w-[1600px] mx-auto flex flex-row justify-center bg-white mb-20">
        <img
          src="/images/banerBlog.png"
          alt="banner"
          className="w-[90%] h-full object-cover"
        />
      </section>

      <section className="clanok w-full bg-[#F3F3F1] p-20 my-20">
        <div className="bg-white max-w-[1200px] mx-auto rounded p-8 flex flex-col items-center gap-8">
          <div className="text-start">
            <h1 className="font-semibold text-3xl py-4">Nadpis článku</h1>
            <p className="leading-7 pb-4 text-gray-5">
              Lorem ipsum dolor sit amet consectetur. Orci facilisis sed
              habitant egestas turpis. Malesuada etiam turpis pharetra pharetra.
              Purus quisque id nunc nunc nec at. Arcu odio eu ultrices felis
              consectetur ultrices sit felis eget. Eget phasellus non lacus
              etiam aliquam eget rhoncus neque. Vel arcu orci sapien porttitor
              vel feugiat risus a. Nec tortor in quis in sit lobortis. In
              phasellus non cursus massa quis cursus fames ut. Ut ac vitae
              varius integer sed feugiat est.
            </p>
            <ul className="leading-8 underline list-disc pl-4 text-gray-5">
              <li>Bold text - Zabezpečenie domácnosti</li>
              <li>Bold text - Zabezpečenie domácnosti</li>
              <li>Bold text - Zabezpečenie domácnosti</li>
            </ul>

            <h1 className="font-semibold text-3xl py-4">
              Nadpis druhého článku
            </h1>
            <p className="leading-7 pb-4 text-gray-5">
              Lorem ipsum dolor sit amet consectetur. Orci facilisis sed
              habitant egestas turpis. Malesuada etiam turpis pharetra pharetra.
              Purus quisque id nunc nunc nec at. Arcu odio eu ultrices felis
              consectetur ultrices sit felis eget. Eget phasellus non lacus
              etiam aliquam eget rhoncus neque. Vel arcu orci sapien porttitor
              vel feugiat risus a. Nec tortor in quis in sit lobortis. In
              phasellus non cursus massa quis cursus fames ut. Ut ac vitae
              varius integer sed feugiat est.
            </p>
            <ul className="leading-8 underline list-disc pl-4 text-gray-5">
              <li>Bold text - Zabezpečenie domácnosti</li>
              <li>Bold text - Zabezpečenie domácnosti</li>
              <li>Bold text - Zabezpečenie domácnosti</li>
            </ul>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-center gap-1">
              <img src="/images/blogpost.png" alt="blogpost" className="w-96" />
              <p className="text-sm text-gray-5">
                Image courtesy of Laura Davidson via Unsplash
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src="/images/blogpost.png" alt="blogpost" className="w-96" />
              <p className="text-sm text-gray-5">
                Image courtesy of Laura Davidson via Unsplash
              </p>
            </div>
          </div>

          <DentalCareTable />

          <div className="border-b-2 border-gray-3 w-[96%]"></div>

          <section className="flex flex-row gap-2 items-center w-full px-4">
            <h2 className="font-semibold">Zdieľať: </h2>
            <div className="flex flex-row gap-2">
              <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center align-middle p-2 cursor-pointer">
                <FaFacebook className="text-slate-100" size={20} />
              </div>
              <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center align-middle p-2 cursor-pointer">
                <FaInstagram className="text-slate-100" size={23} />
              </div>
              <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center align-middle p-2 cursor-pointer">
                <FaPaperPlane className="text-slate-100" size={18} />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Sekcia s článkami */}
      <section className="max-w-[1400px] mx-auto flex flex-col gap-4 pb-28">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row pb-4 justify-between items-center max-w-[1200px] w-full mx-auto">
            <h1 className="font-semibold text-4xl">
              Inšpirujte sa našimi <br /> článkami!
            </h1>
            <ArrowButton text="Všetky Naše články" />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6 max-w-[1200px] mx-auto">
          <BlogPostCard
            category={"Kategoria"}
            imageUrl={"/images/banner_photo.png"}
            title={"Ako správne vykonať dentálnu hygienu"}
            description={
              "Naučte sa najlepšie postupy a techniky, aby ste svojim pacientom poskytli profesionálnu a dôklad..."
            }
            date={"16.10.2024"}
          />
          <BlogPostCard
            category={"Kategoria"}
            imageUrl={"/images/banner_photo.png"}
            title={"Ako správne vykonať dentálnu hygienu"}
            description={
              "Naučte sa najlepšie postupy a techniky, aby ste svojim pacientom poskytli profesionálnu a dôklad..."
            }
            date={"16.10.2024"}
          />
          <BlogPostCard
            category={"Kategoria"}
            imageUrl={"/images/banner_photo.png"}
            title={"Ako správne vykonať dentálnu hygienu"}
            description={
              "Naučte sa najlepšie postupy a techniky, aby ste svojim pacientom poskytli profesionálnu a dôklad..."
            }
            date={"16.10.2024"}
          />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
