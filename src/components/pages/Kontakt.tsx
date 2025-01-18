import { FaFacebook, FaInstagram, FaPaperPlane } from "react-icons/fa";
import ContactForm from "../ui/ContactForm";
import ButtonComponent from "../ui/Button";
import FAQSection from "../ui/Faq";
import Breadcrumbs from "../ui/Breadcrumbs";

const Kontakt = () => {
  return (
    <div>
      <section className="w-full px-20">
        <Breadcrumbs/>
      </section>
      
      {/* Sekcia s kontaktným formulárom */}

      <section className="flex flex-row justify-between p-20">
        {/* lavy text */}
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-6">
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

        {/* pravy formular */}
        <div className="bg-gray-100 p-6 rounded">
          <ContactForm />
        </div>
      </section>

      {/* sekcia s FAQ */}
      <section className="bg-slate-100 p-20 flex flex-row justify-between">

        {/* nadpis */}
        <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-6">
              Rádi pomôžeme - kontaktujte nás!
            </h2>
            <p className="text-xl font-medium mb-6">
              Máte otázky alebo potrebujete viac informácií o našich kurzoch či
              službách? Neváhajte nás kontaktovať! Sme tu pre vás, pripravení
              pomôcť a poskytnúť všetky informácie.
            </p>
            <ButtonComponent text="Kontaktujte Nás"/>
        </div>

        {/* Faq otazky + odpovede */}
        <div>
          <FAQSection/>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
