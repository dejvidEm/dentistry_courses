
type TestimonialProps = {
  name: string;
  role: string;
  photo: string;
  quote: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ name, role, photo, quote }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border border-gray-200"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="flex gap-2 items-start">
        <span className="text-2xl text-orange-500">&ldquo;</span>
        <p className="text-gray-700 leading-relaxed">{quote}</p>
      </div>
    </div>
  );
};

export default Testimonial;