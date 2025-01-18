import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Budú počas kurzu k dispozícii jedlo a občerstvenie?",
      answer: "Áno, počas kurzu bude k dispozícii ľahké občerstvenie a nápoje.",
    },
    {
      question: "Kde sa kurz bude konať?",
      answer: "Kurz sa bude konať v našej školiacej miestnosti na adrese XYZ.",
    },
    {
      question: "Aká je cena kurzu a čo všetko je zahrnuté?",
      answer:
        "Cena kurzu je 200 EUR a zahŕňa všetky školiace materiály, certifikát o absolvovaní a občerstvenie.",
    },
    {
      question: "Ak sa nemôžem zúčastniť, aké sú možnosti storna?",
      answer:
        "Môžete kurz zrušiť do 7 dní pred začiatkom s plnou refundáciou. Po tomto termíne je možné presunúť registráciu na iný termín.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-700 font-medium"
            >
              <span>{faq.question}</span>
              <button
      type="button"
      className="flex items-center justify-center text-black  focus:outline-none transition"
    >
      {openIndex === index ? "-" : "+"}
    </button>
            </button>
            <div
              className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;