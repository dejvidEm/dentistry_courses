import React from "react";

import { MdOutlineArrowOutward } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

type AnimatedButtonProps = {
  text: string;
  variant?: "green" | "white";
};

const ArrowButtonCourse: React.FC<AnimatedButtonProps> = ({
  text,
  variant = "green",
}) => {
  const backgroundClass =
    variant === "green" ? "bg-[#F3F3F1]" : "bg-white";
  const textColorClass =
    variant === "green"
      ? "text-gray-800 hover:text-white transition duration-300"
      : "hover:text-white transition duration-300";

  return (
    <button
      className={`relative flex w-full items-center justify-between group overflow-hidden px-4 pl-5 h-[56px] rounded-md ${backgroundClass}
                 before:absolute
                 before:m-[5px]
                 before:rounded-md
                 before:inset-0 
                 before:bg-green-6 
                 before:scale-x-[0.175] 
                 before:origin-right
                 before:transition
                 before:duration-300
                 hover:before:scale-x-100
                 ${textColorClass}`}
    >
      <LuCalendarDays className="z-20 flex-shrink-0 -ml-3 w-6 h-6" />
      <span
        className={`relative text-sm md:text-base text-center ml-1 mr-auto`}
      >
        {text}
      </span>
      <MdOutlineArrowOutward
        size={20}
        className="z-10 text-slate-50 flex-shrink-0"
      />
    </button>
  );
};

export default ArrowButtonCourse;