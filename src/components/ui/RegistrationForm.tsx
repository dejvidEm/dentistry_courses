
const RegistrationForm = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <form className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center">Registračný formulár</h2>
          <p className="text-gray-600 text-center mb-6">
            Vyplňte formulár na registráciu do kurzu a zabezpečte si miesto. Po registrácii obdržíte potvrdenie a ďalšie informácie o kurze.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Osobné údaje */}
            <div className="col-span-full text-lg font-medium text-gray-800">Osobné údaje</div>
            <input
              type="text"
              placeholder="Vaš titul a meno*"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Vaše priezvisko*"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="email"
              placeholder="E-mail*"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="tel"
              placeholder="Váš telefón*"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Registračné číslo v komore"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="date"
              placeholder="Dátum narodenia"
              className="border p-2 rounded-md w-full"
            />
  
            {/* Fakturačné údaje */}
            <div className="col-span-full text-lg font-medium text-gray-800">Fakturačné údaje</div>
            <input
              type="text"
              placeholder="Obchodné meno*"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Názov ulice a číslo*"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Mesto alebo obec*"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="PSČ*"
              className="border p-2 rounded-md w-full"
            />
            <select className="border p-2 rounded-md w-full">
              <option value="">Vyberte štát*</option>
              <option value="slovakia">Slovensko</option>
              {/* Ďalšie možnosti... */}
            </select>
            <input
              type="text"
              placeholder="IČO*"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="DIČ"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="IČ DPH"
              className="border p-2 rounded-md w-full"
            />
  
            {/* Ostatné */}
            <div className="col-span-full text-lg font-medium text-gray-800">Ostatné</div>
            <textarea
              placeholder="Stravovacie preferencie/alergie"
              className="border p-2 rounded-md w-full"
            ></textarea>
            <textarea
              placeholder="Komentáre"
              className="border p-2 rounded-md w-full"
            ></textarea>
  
            <div className="col-span-full flex items-center">
              <input type="checkbox" id="consent" className="mr-2" />
              <label htmlFor="consent" className="text-gray-700">
                Súhlasím so spracovaním svojich osobných údajov
              </label>
            </div>
  
            <div className="col-span-full flex justify-center mt-4">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                Odoslať
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default RegistrationForm;