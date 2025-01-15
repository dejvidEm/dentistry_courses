import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          {/* Logo a informácie */}
          <div>
            <h2 className="text-2xl font-bold">NS Medical</h2>
            <p className="mt-2 text-gray-400">
              Vzdelávame a podporujeme profesionálov v zdravotníctve.
            </p>
          </div>

          {/* Navigačné odkazy */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-lg">Navigácia</h3>
            <a href="/" className="hover:text-gray-200">
              Domov
            </a>
            <a href="/about" className="hover:text-gray-200">
              O nás
            </a>
            <a href="/blog" className="hover:text-gray-200">
              Blog
            </a>
            <a href="/contact" className="hover:text-gray-200">
              Kontakt
            </a>
          </div>

          {/* Kontakt a sociálne siete */}
          <div>
            <h3 className="font-semibold text-lg">Kontakt</h3>
            <p className="text-gray-400 mt-2">Email: info@nsmedical.sk</p>
            <p className="text-gray-400">Tel: +421 123 456 789</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="hover:text-gray-200"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.991 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.635c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.49 0-1.953.925-1.953 1.874v2.242h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.863 10.125-11.854z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-200"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.173-1.555-3.591-1.555-2.719 0-4.923 2.204-4.923 4.917 0 .385.043.76.126 1.122-4.09-.205-7.719-2.165-10.148-5.144-.423.728-.666 1.574-.666 2.476 0 1.708.869 3.216 2.188 4.099-.806-.026-1.566-.248-2.229-.617v.062c0 2.385 1.698 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.318 0-.626-.031-.927-.089.627 1.956 2.444 3.379 4.6 3.42-1.68 1.316-3.809 2.101-6.115 2.101-.397 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.213 7.548 2.213 9.054 0 14.001-7.503 14.001-14.002 0-.213-.005-.426-.014-.637.961-.694 1.8-1.562 2.462-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-200"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.5-.788-1.5-1.5 0-.712.534-1.5 1.5-1.5s1.5.788 1.5 1.5c0 .712-.534 1.5-1.5 1.5zm13.5 11.5h-3v-5c0-1.355-.645-2-1.5-2-.84 0-1.5.645-1.5 2v5h-3v-10h3v1.222c.84-.842 2.645-1.422 3.729-1.422 1.803 0 3.271 1.083 3.271 3.278v6.922z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Spodná časť */}
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} NS Medical. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
};

export default Footer;