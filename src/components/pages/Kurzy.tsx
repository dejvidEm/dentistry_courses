import Breadcrumbs from "../ui/Breadcrumbs";
import CourseCard from "../ui/CourseCard";

const Kurzy: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="w-full px-20">
        <Breadcrumbs/>
      </section>

      {/* Hero Section */}
      <section>
        <div className="flex flex-row justify-between px-20">
          <h1 className="text-5xl">
            Posuňte kariéru s <br /> našimi kurzami
          </h1>
          <p className="w-[500px]">
            Naša ponuka kurzov je určená pre tých, ktorí chcú získať nové
            zručnosti, zlepšiť svoju kariéru a neustále sa rozvíjať. Bez ohľadu
            na to, či ste začiatočník alebo skúsený odborník, naše kurzy vám
            poskytnú potrebné nástroje na úspech. Získajte certifikát, ktorý
            potvrdí vaše schopnosti a otvorí dvere k novým príležitostiam.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section>
        <div className="w-[1200px] mx-auto grid grid-cols-3 gap-8">
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
            title="Course 1"
            description="Toto je popis kurzu v ktorom je opisane to co sa na kurze naucite a co sa na nom dozviete, pre podrobnejsie info si rozkliknite tento kurz a zistite co sa v nom vsetko naucite, ale ajtak sa musite prihlasit aby ste to zistili"
            date="2025-01-20"
            duration="2 hours"
            capacity="30"
          />
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
            title="Course 1"
            description="Toto je popis kurzu v ktorom je opisane to co sa na kurze naucite a co sa na nom dozviete, pre podrobnejsie info si rozkliknite tento kurz a zistite co sa v nom vsetko naucite, ale ajtak sa musite prihlasit aby ste to zistili"
            date="2025-01-20"
            duration="2 hours"
            capacity="30"
          />
        </div>
      </section>
    </div>
  );
};

export default Kurzy;
