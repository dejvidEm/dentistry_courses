import ArrowButton from "./ArrowButton";

const Banner = () => {
  return (
    <div className="bg-[#1C2820] flex flex-col lg:flex-row lg:justify-between p-10">
      {/* Text a button */}
      <div className="lg:max-w-[600px] mb-5 lg:mb-0">
        <h1 className="text-3xl text-slate-100 mb-4">Máte akékoľvek otázky?</h1>
        <p className="text-lg text-slate-100 mb-4">
          Vyplňte formulár a naši odborníci sa s vami čoskoro spoja, aby vám poskytli všetky potrebné informácie.
        </p>
        <ArrowButton text="Napíšte Nám" variant="white"/>
      </div>

      {/* Fotka */}
      <div className="flex justify-center lg:mr-20">
        <img
          src="/images/banner_photo.png"
          alt="Image 1"
          className="w-64 rounded"
        />
      </div>
    </div>
  );
};

export default Banner;