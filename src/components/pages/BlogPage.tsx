import { FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";
import ArrowButton from "../ui/ArrowButton";
import BlogPostCard from "../ui/BlogPost";
import Breadcrumbs from "../ui/Breadcrumbs";
import DentalCareTable from "../ui/tableBlog";

const BlogPage = () => {
  return (
    <div>
      <section className="w-full px-20 bg-white">
        <Breadcrumbs />
      </section>

      <section className="flex flex-row p-16 border-b-2 border-gray-2 bg-white">
        <h1 className="font-bold text-5xl w-1/2 justify-between">
          Ako správne vykonať dentálnu hygienu
        </h1>
        <p className=" w-1/2">
          Zistite, ako správne vykonávať dentálnu hygienu, predchádzať zubným
          ochoreniam a udržiavať zdravý úsmev. Naučte sa používať správne
          techniky čistenia a výber vhodných pomôcok na starostlivosť o zuby.
          Starajte sa o svoju dentálnu hygienu a predchádzajte problémom.
        </p>
      </section>

      <section className="flex flex-row justify-between p-8 bg-white">
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

      <section className="flex flex-row justify-center bg-white mb-20">
        <img src="/images/banerBlog.png" alt="banner" />
      </section>

      <section className="clanok w-full bg-[#F3F3F1] p-20 my-20">
        <div className="bg-white max-w-[1200px] mx-auto rounded p-8 flex flex-col items-center gap-8">
            <div className="text-start">
            <h1 className="font-semibold text-3xl py-4">Heading</h1>
                <p className="leading-7 pb-4 text-gray-5">Lorem ipsum dolor sit amet consectetur. Orci facilisis sed habitant egestas turpis. Malesuada etiam turpis pharetra pharetra. Purus quisque id nunc nunc nec at. Arcu odio eu ultrices felis consectetur ultrices sit felis eget. Eget phasellus non lacus etiam aliquam eget rhoncus neque. Vel arcu orci sapien porttitor vel feugiat risus a. Nec tortor in quis in sit lobortis. In phasellus non cursus massa quis cursus fames ut. Ut ac vitae varius integer sed feugiat est.</p>
                <ul className="leading-8 underline list-disc pl-4 text-gray-5">
                    <li>Bold text - Zabezpečenie domácnosti</li>
                    <li>Bold text - Zabezpečenie domácnosti</li>
                    <li>Bold text - Zabezpečenie domácnosti</li>
                </ul>

                <h1 className="font-semibold text-3xl py-4">Heading</h1>
                <p className="leading-7 pb-4 text-gray-5">Lorem ipsum dolor sit amet consectetur. Orci facilisis sed habitant egestas turpis. Malesuada etiam turpis pharetra pharetra. Purus quisque id nunc nunc nec at. Arcu odio eu ultrices felis consectetur ultrices sit felis eget. Eget phasellus non lacus etiam aliquam eget rhoncus neque. Vel arcu orci sapien porttitor vel feugiat risus a. Nec tortor in quis in sit lobortis. In phasellus non cursus massa quis cursus fames ut. Ut ac vitae varius integer sed feugiat est.</p>
                <ul className="leading-8 underline list-disc pl-4 text-gray-5">
                    <li>Bold text - Zabezpečenie domácnosti</li>
                    <li>Bold text - Zabezpečenie domácnosti</li>
                    <li>Bold text - Zabezpečenie domácnosti</li>
                </ul>
            </div>
            <div className="flex flex-row gap-4">
                <div className="flex flex-col items-center gap-1">
                    <img src="/images/blogpost.png" alt="blogpost" className="w-96"/>
                    <p className="text-sm text-gray-5">Image courtesy of Laura Davidson via Unsplash</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img src="/images/blogpost.png" alt="blogpost" className="w-96"/>
                    <p className="text-sm text-gray-5">Image courtesy of Laura Davidson via Unsplash</p>
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

      {/* sekcia s dalsimi clankami */}
      <section className="max-w-[1400px] mx-auto flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <h1 className="font-semibold text-4xl">
            Inšpirujte sa našimi článkami!
          </h1>
          <ArrowButton text="Všetky naše články" />
        </div>
        <div className="flex flex-row justify-center gap-6">
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
