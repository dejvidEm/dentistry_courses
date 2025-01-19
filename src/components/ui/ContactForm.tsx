import { useState } from "react";
import ArrowButton from "./ArrowButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg bg-[#F3F3F1]">
      <h2 className="text-2xl font-bold text-center mb-6">Kontaktujte nás</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Váš titul a meno*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Zadajte titul a meno"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 h-12 p-4"
            />
          </div>
          <div>
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
              Vaše priezvisko*
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Zadajte priezvisko"
              value={formData.surname}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500  h-12 p-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Zadajte e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500  h-12 p-4"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Váš telefón*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Váš telefón"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500  h-12 p-4"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Správa
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Napíšte správu"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 h-28 p-4"
          />
        </div>
        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 p-4"
          />
          <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
            Súhlasím so spracovaním svojich osobných údajov
          </label>
        </div>
        <div className="flex justify-center">
          <ArrowButton text="Odoslať správu"/>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;