import { Link } from "react-router-dom";
import ArrowButton from "./ArrowButton";

const Banner = () => {
  return (
    <div className="bg-[#1C2820] flex flex-col lg:flex-row lg:justify-between p-4 md:p-16">
      {/* Text a button */}
      <div className="lg:max-w-[600px] mb-8 lg:mb-0">
        <h1 className="text-3xl text-slate-100 mb-4">Máte akékoľvek otázky?</h1>
        <p className="text- md:text-sm text-slate-100 max-w-[400px] mb-8">
          Vyplňte formulár a naši odborníci sa s vami čoskoro spoja, aby vám poskytli všetky potrebné informácie.
        </p>
        <Link to="/contact"><ArrowButton text="Napíšte nám" variant="white"/></Link>
      </div>

      {/* Fotka */}
      <div className="flex justify-center lg:mr-20">
        <img
          src="/images/banner_photo.png"
          alt="Image 1"
          className="w-full md:w-64 rounded"
        />
      </div>
    </div>
  );
};

export default Banner;