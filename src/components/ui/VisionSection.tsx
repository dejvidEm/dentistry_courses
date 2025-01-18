
const VisionMissionSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Naša vízia a misia</h2>
        <div className="relative flex flex-wrap justify-center items-center">
          {/* Stredové logo */}
          <div className="absolute bg-white rounded-full p-6 shadow-lg">
            <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Y</span>
            </div>
          </div>

          {/* Čiary */}
          <div className="absolute w-full h-full flex justify-center items-center">
            <div className="absolute w-1/2 h-px bg-gray-300"></div>
            <div className="absolute h-1/2 w-px bg-gray-300"></div>
          </div>

          {/* Boxy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-20 sm:mt-24">
            {/* Ľavý horný box */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <h3 className="text-xl font-semibold mb-4">Pacient ako stredobod starostlivosti</h3>
              <p className="text-gray-600">
                Veríme, že každý pacient je jedinečný. Našou víziou je naučiť odborníkov v zubnom lekárstve, aby sa pozerali za hranice zubov a sústredili sa na človeka ako celok.
              </p>
            </div>

            {/* Ľavý dolný box */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <h3 className="text-xl font-semibold mb-4">Vzdelávanie založené na dôkazoch</h3>
              <p className="text-gray-600">
                Naše kurzy sú postavené na pevných základoch vedy a výskumu. Neustále sledujeme nové poznatky, aby sme mohli vzdelávať odborníkov na základe aktuálnych dôkazov.
              </p>
            </div>

            {/* Pravý horný box */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <h3 className="text-xl font-semibold mb-4">Dostupné špecializované vzdelávanie</h3>
              <p className="text-gray-600">
                Ako jediný špecialista v orofaciálnej bolesti, dysfunkcii a spánkovej medicíne, chceme priblížiť túto problematiku odborníkom na Slovensku.
              </p>
            </div>

            {/* Pravý dolný box */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <h3 className="text-xl font-semibold mb-4">Podpora a dlhodobý rozvoj odborníkov</h3>
              <p className="text-gray-600">
                Nejde len o kurzy – ide o budovanie komunity odborníkov. Víziou je vytvoriť priestor, kde môžu profesionáli rásť a učiť sa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;