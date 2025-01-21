import { FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";
import ContactForm from "../ui/ContactForm";
import Breadcrumbs from "../ui/Breadcrumbs";
import ArrowButton from "../ui/ArrowButton";
import Faq from "../ui/Faq";

const Kontakt = () => {
  return (
    <div>
      {/* Breadcrumbs */}
      <section className="w-full px-4 lg:px-20">
        <Breadcrumbs />
      </section>

      {/* Sekcia s kontaktným formulárom */}
      <section className="flex flex-col lg:flex-row justify-between p-6 lg:p-20 gap-8">
        {/* Ľavý text */}
        <div className="flex flex-col w-full lg:w-1/2 pr-0 lg:pr-8 justify-between">
          <div className="flex flex-col">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Rádi pomôžeme - kontaktujte nás!
            </h2>
            <p className="text-base lg:text-xl font-medium mb-6">
              Máte otázky alebo potrebujete viac informácií o našich kurzoch či
              službách? Neváhajte nás kontaktovať! Sme tu pre vás, pripravení
              pomôcť a poskytnúť všetky informácie.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div>
              <h2 className="text-lg lg:text-xl font-bold">Kontakt</h2>
              <p>info@ms-medical.sk</p>
              <p>+421 905 340 741</p>
            </div>
            <div>
              <h2 className="text-lg lg:text-xl font-bold">Kontakt</h2>
              <div className="flex gap-4">
                <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center justify-center p-2 cursor-pointer">
                  <FaFacebook className="text-slate-100" size={20} />
                </div>
                <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center justify-center p-2 cursor-pointer">
                  <FaInstagram className="text-slate-100" size={23} />
                </div>
                <div className="bg-[#414F22] hover:bg-[#586A31] flex h-9 items-center justify-center p-2 cursor-pointer">
                  <FaPaperPlane className="text-slate-100" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pravý formulár */}
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </section>

      {/* FAQ sekcia */}
      <section className="flex flex-col lg:flex-row justify-between px-6 lg:px-10 bg-[#F3F3F1] p-8 lg:p-16 gap-8">
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Často kladené otázky
          </h1>
          <p className="text-base lg:text-lg">
            Máte otázky? Možno tu nájdete odpovede na niektoré z vašich otázok.
            Ak nie, neváhajte nás kontaktovať prostredníctvom formulára!
          </p>
          <div className="w-full lg:w-96">
            <ArrowButton text="Kontaktujte Nás" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Faq />
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
