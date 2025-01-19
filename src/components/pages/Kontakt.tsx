import { FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";
import ContactForm from "../ui/ContactForm";
import Breadcrumbs from "../ui/Breadcrumbs";
import ArrowButton from "../ui/ArrowButton";
import Faq from "../ui/Faq";
import RegistrationForm from "../ui/RegistrationForm";

const Kontakt = () => {
  {/* const [isModalOpen, setIsModalOpen] = useState<boolean>(true); /> */}

  return (
    <div>
      <section className="w-full px-20">
        <Breadcrumbs/>
      </section>

      <RegistrationForm/>
      
      {/* Sekcia s kontaktným formulárom */}

      <section className="flex flex-row justify-between p-20">
        {/* lavy text */}
        <div className="flex flex-col w-1/2 pr-8 justify-between">
          <div className="flex flex-col">
            <h2 className="text-5xl font-bold mb-6">
              Rádi pomôžeme - kontaktujte nás!
            </h2>
            <p className="text-xl font-medium mb-6">
              Máte otázky alebo potrebujete viac informácií o našich kurzoch či
              službách? Neváhajte nás kontaktovať! Sme tu pre vás, pripravení
              pomôcť a poskytnúť všetky informácie.
            </p>
          </div>
          <div className="flex flex-row gap-16">
            <div>
              <h2 className="text-xl font-bold">Kontakt</h2>
              <p>info@ms-medical.sk</p>
              <p>+421 905 340 741</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Kontakt</h2>
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
            </div>
          </div>
        </div>

        {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}


        {/* pravy formular */}
        <div className="w-1/2">
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="hidden lg:flex flex-row justify-between px-10 bg-[#F3F3F1] p-16">
        <div className="flex flex-col gap-8 w-1/2">
          <h1 className="text-4xl font-bold">Často kladené otázky</h1>
          <p className="w-[400px]">Máte otázky? Možno tu nájdete odpovede na niektoré z vašich otázok. Ak nie, neváhajte nás kontaktovať prostredníctvom formulára!</p>
          <div className="w-96">
          <ArrowButton text="Kontaktujte Nás" />
          </div>
        </div>
        <div className="w-1/2">
          <Faq/>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
