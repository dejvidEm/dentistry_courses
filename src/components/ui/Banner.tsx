import Button from "./Button"

const Banner = () => {
  return (
    <div className="bg-[#1C2820] flex flex-row justify-between p-10">
        {/* Text a button */}
        <div className="max-w-[600px]">
            <h1 className="text-3xl text-slate-100">Máte akékoľvek otázky?</h1>
            <p className="text-lg text-slate-100">Vyplňte formulár a naši odborníci sa s vami čoskoro spoja, aby vám poskytli všetky potrebné informácie.</p>
            <Button text="Napíšte Nám"/>
        </div>

        {/* Fotka */}
        <div className="mr-20">
            <img
              src="/images/banner_photo.png"
              alt="Image 1"
              className="w-64 rounded"
            />
        </div>
    </div>
  )
}

export default Banner