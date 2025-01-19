import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs";
import ButtonComponent from "../ui/Button";
import CourseCard from "../ui/CourseCard";

interface Feature {
  id: number;
  title: string;
  description: string;
}

const kurzyData = [
  {
    id: "1",
    name: "Kurz 1",
    category: "Kategória 1",
    description:
      "Zistite, ako správne vykonávať dentálnu hygienu, predchádzať zubným ochoreniam a udržiavať zdravý úsmev. Naučte sa používať správne techniky čistenia a výber vhodných pomôcok na starostlivosť o zuby.",
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
    name: "Kurz 2",
    category: "Kategória 2",
    description:
      "Získajte pokročilé techniky programovania v JavaScripte a vytvorte moderné webové aplikácie. Naučte sa pracovať s frameworkmi a spravovať komplexné projekty.",
    author: "Ing. Peter Novák",
    authorImage: "images/review_profile_photo.png",
    courseImage: "images/course_img.png",
    price: "950",
    date: "2025-01-25",
    location: "Bratislava",
    capacity: "4/15",
  },
  {
    id: "3",
    name: "Kurz 3",
    category: "Kategória 3",
    description:
      "Preskúmajte základy marketingu a naučte sa, ako efektívne komunikovať so zákazníkmi. Tento kurz je ideálny pre začiatočníkov aj skúsených profesionálov.",
    author: "Mgr. Jana Kováčová",
    authorImage: "images/review_profile_photo.png",
    courseImage: "/images/course_img.png",
    price: "950",
    date: "2025-02-01",
    location: "Bratislava",
    capacity: "4/15",
  },
];

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

const KurzDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const kurz = kurzyData.find((kurz) => kurz.id === id);

  if (!kurz) {
    return <div>Kurz s ID {id} nebol nájdený.</div>;
  }

  return (
    <div className="space-y-12">
      <section className="w-full px-6 md:px-20">
        <Breadcrumbs />
      </section>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-start md:items-center gap-8 px-6 md:px-20 py-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{kurz.name}</h1>
          <p className="text-gray-600 mb-4">{kurz.description}</p>
          <p className="text-2xl font-semibold">
            Cena: <span className="">{kurz.price}€</span>
          </p>
        </div>
        <div className="relative flex-1 w-full md:w-1/2">
          <img
            src={kurz.courseImage}
            alt={kurz.name}
            className="w-full h-auto rounded-lg object-cover"
          />
          <div className="absolute flex flex-row w-[95%] left-1/2 transform -translate-x-1/2 justify-between bottom-4 bg-white bg-opacity-95 p-4 rounded-md shadow-md">
            <div>
              <h2 className="font-bold text-lg">Datum</h2>
              <p className="text-sm text-gray-700 font-semibold">
                Dátum: {kurz.date}
              </p>
            </div>
            <div className="border-l border-gray-300 h-auto mx-4"></div>
            <div>
              <h2 className="font-bold text-lg">Location</h2>
              <p className="text-sm text-gray-700 font-semibold">
                Miesto: {kurz.location}
              </p>
            </div>
            <div className="border-l border-gray-300 h-auto mx-4"></div>
            <div>
              <h2 className="font-bold text-lg">Capacita</h2>
              <p className="text-sm text-gray-700 font-semibold">
                Kapacita: {kurz.capacity}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* pre koho Section */}
      <section className="bg-green-7 flex flex-col mb-20 py-10">
        <div className="flex flex-col md:flex-row justify-between text-slate-100 px-6 md:px-20">
          <div className="w-3/5">
            <h1 className="font-bold text-5xl">Pre koho je kurz určený?</h1>
          </div>
          <div className="w-2/5">
            <p>
              Ak vaša špecializácia nie je uvedená, ale máte záujem o účasť na
              kurze, prosím, kontaktujte nás. Rádi vám poskytneme viac
              informácií a pomôžeme vám s registráciou, aby ste sa mohli
              pripojiť k našemu vzdelávaciemu programu.
            </p>
            <ButtonComponent text={"Kontaktujte Nás"} />
          </div>
        </div>
        <div className="over max-w-7xl mx-auto px-4">
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

      {/* Obsah Section */}
      <section className="flex flex-col md:flex-row gap-8 px-6 md:px-20 py-10">
        {/*  Text */}
        <div className="text-black flex-1">
          <h1 className="font-bold text-3xl">Obsah kurzu</h1>
          <p>
            Program je navrhnutý tak, aby účastníkom poskytol teoretické a
            praktické znalosti potrebné na správnu diagnostiku a liečbu TMD.
          </p>
          <ButtonComponent text="Prihlásiť sa" />
          <div className="flex flex-row gap-4 mt-4">
            <img
              src="/images/Homepage_photo_1.png"
              alt="img1"
              className="w-56"
            />
            <img
              src="/images/Homepage_photo_2.png"
              alt="img1"
              className="w-56"
            />
          </div>
        </div>
        {/* Harmonogram */}
        <div className="px-4 flex-1">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Piatočný program */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Piatok</h2>
                <span className="text-gray-600">14:00 - 17:30</span>
              </div>
              <hr className="mb-4" />
              <div className="space-y-4">
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
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Sobota</h2>
                <span className="text-gray-600">14:00 - 17:00</span>
              </div>
              <hr className="mb-4" />
              <div className="space-y-4">
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
                  <p>
                    Manažment temporomandibulárnych porúch, poradenstvo, životný
                    štýl
                  </p>
                  <span className="text-gray-600">13:30 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <p>Coffee break</p>
                  <span className="text-gray-600">15:00 - 15:30</span>
                </div>
                <div className="flex justify-between">
                  <p>
                    Nácvik komunikácie s pacientami, komunikačné stratégie,
                    dotazy
                  </p>
                  <span className="text-gray-600">15:30 - 17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ostatne kurzy */}
      <section className="py-10">
        <div className="flex flex-row justify-between px-10">
          <h2 className="font-bold text-3xl">Objavte ostatné kurzy</h2>
          <ButtonComponent text="Všetky Kurzy" />
        </div>
        <div className="cards flex flex-wrap gap-8 px-10 py-6">
          {kurzyData.map((kurz) => (
            <CourseCard
              key={kurz.id}
              image={kurz.courseImage}
              title={kurz.name}
              description={kurz.description}
              date={kurz.date}
              duration="3h"
              capacity={kurz.capacity}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default KurzDetail;
