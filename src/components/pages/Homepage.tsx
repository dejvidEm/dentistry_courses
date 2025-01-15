import React from "react";

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

// Hardcodované dáta (na nahradenie z API)
const heroContent: HeroContent = {
  heading: "Staňte sa expertom v stomatológii!",
  description:
    "Vitajte na našich kurzoch pre zubných lekárov, fyzioterapeutov a študentov zubného lekárstva. Špecializujeme sa na orofaciálnu bolesť, dysfunkciu, opotrebovanie zubov a spánkovú medicínu. Našim cieľom je poskytovať vedecky podložené vzdelávanie, ktoré vám pomôže poskytovať pacientom komplexnú a kvalitnú starostlivosť.",
  buttonText: "Všetky naše kurzy →",
  buttonLink: "/kurzy"
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

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            {heroContent.heading}
          </h1>
          <p className="mt-4 text-gray-600">{heroContent.description}</p>
          <a
            href={heroContent.buttonLink}
            className="mt-6 inline-block px-6 py-3 bg-[#38412b] text-white text-lg font-medium rounded-lg hover:bg-[#2f371f] transition"
          >
            {heroContent.buttonText}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-rows-2 gap-4">
            <img
              src="/src/assets/Homepage_photo_1.png"
              alt="Patient Treatment"
              className="w-full h-auto rounded shadow-md"
            />
            <img
              src="/src/assets/Homepage_photo_2.png"
              alt="Dentist at work"
              className="w-full h-auto rounded shadow-md"
            />
          </div>
          <img
            src="/src/assets/Homepage_photo_3.png"
            alt="Scanner"
            className="w-full h-auto rounded shadow-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Prečo si vybrať nás?
          </h2>
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
    </div>
  );
};

export default HomePage;