import React from "react";
import ArrowButton from "./ArrowButton";
import { IoMdClose } from "react-icons/io";

type RegistrationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-[#F3F3F1] p-6 rounded-lg max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close Modal"
        >
          <IoMdClose size={28} />
        </button>

        <form className="pt-8">
          <h2 className="text-4xl font-semibold mb-4 text-center">Registračný formulár</h2>
          <p className="text-gray-600 text-center text-2xl mb-6 pb-16">
            Vyplňte formulár na registráciu do kurzu a zabezpečte si miesto. Po registrácii
            obdržíte potvrdenie a ďalšie informácie o kurze.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-full text-lg font-medium text-gray-800">Osobné údaje</div>
            <input type="text" placeholder="Vaš titul a meno*" className="border p-2 rounded-md w-full h-14" />
            <input type="text" placeholder="Vaše priezvisko*" className="border p-2 rounded-md w-full h-14" />
            <input type="email" placeholder="E-mail*" className="border p-2 rounded-md w-full h-14" />
            <input type="tel" placeholder="Váš telefón*" className="border p-2 rounded-md w-full h-14" />
            <input type="text" placeholder="Registračné číslo v komore" className="border p-2 rounded-md w-full h-14" />
            <input type="date" placeholder="Dátum narodenia" className="border p-2 rounded-md w-full h-14" />

            <div className="col-span-full text-lg font-medium text-gray-800">Fakturačné údaje</div>
            <input type="text" placeholder="Obchodné meno*" className="border p-2 rounded-md w-full h-14" />
            <input type="text" placeholder="Názov ulice a číslo*" className="border p-2 rounded-md w-full h-14" />
            <input type="text" placeholder="Mesto alebo obec*" className="border p-2 rounded-md w-full h-14" />
            <input type="text" placeholder="PSČ*" className="border p-2 rounded-md w-full h-14" />
            <select className="border p-2 rounded-md w-full h-14">
              <option value="">Vyberte štát*</option>
              <option value="slovakia">Slovensko</option>
            </select>
            <input type="text" placeholder="IČO*" className="border p-2 rounded-md w-full h-14" />
            <input type="text" placeholder="DIČ" className="border p-2 rounded-md w-full h-14" />
            <input type="text" placeholder="IČ DPH" className="border p-2 rounded-md w-full h-14" />

            <div className="col-span-full text-lg font-medium text-gray-800">Ostatné</div>
            <textarea
              placeholder="Stravovacie preferencie/alergie"
              className="border p-2 rounded-md w-full h-14"
            ></textarea>
            <textarea
              placeholder="Komentáre"
              className="border p-2 rounded-md w-full h-14"
            ></textarea>

            <div className="col-span-full flex items-center">
              <input type="checkbox" id="consent" className="mr-2" />
              <label htmlFor="consent" className="text-gray-700">
                Súhlasím so spracovaním svojich osobných údajov
              </label>
            </div>

            <div className="col-span-full flex justify-center mt-4">
              <ArrowButton text="Odoslať formulár" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;