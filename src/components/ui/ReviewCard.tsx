import { BiSolidQuoteAltLeft } from "react-icons/bi";


type TestimonialProps = {
  name: string;
  role: string;
  photo: string;
  quote: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ name, role, photo, quote }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 rounded-lg object-cover border border-gray-200"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
      <BiSolidQuoteAltLeft className="text-orange-1" size={30}/>

        <p className="text-gray-700 leading-relaxed">{quote}</p>
      </div>
    </div>
  );
};

export default Testimonial;