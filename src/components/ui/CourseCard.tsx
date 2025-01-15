import React from 'react';
import { MdArrowOutward } from "react-icons/md";


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
    <div className="max-w-md mx-auto bg-slate-100 text-gray-950 rounded overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-950 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-800">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16h8M8 12h4"
              />
            </svg>
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h11M9 21V3"
              />
            </svg>
            <span>{capacity}</span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-slate-100 flex justify-end">
        <button
          className="bg-[#586A31] text-white px-2 py-2 rounded-md hover:bg-[#414F22]"
          type="button"
        >
          <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;