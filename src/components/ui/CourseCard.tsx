import ArrowButtonCourse from "./ArrowButtonCourse";

type CourseCardProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  capacity: string;
};

const CourseCard: React.FC<CourseCardProps> = ({ image, title, description, date, duration, capacity }) => {
  return (
    <div className="max-w-sm mx-auto h-[500px] bg-white text-gray-950 rounded overflow-hidden shadow-lg flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-950">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-800">
          {/* Additional details or elements can go here */}
        </div>
      </div>
      <div className="p-4 mt-auto">
        <ArrowButtonCourse text={`${date} ${duration} ${capacity}/30`} />
      </div>
    </div>
  );
};

export default CourseCard;