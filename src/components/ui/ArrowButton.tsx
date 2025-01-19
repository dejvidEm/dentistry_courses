import React from "react";

import { MdOutlineArrowOutward } from "react-icons/md";


type AnimatedButtonProps = {
  text: string;
  variant?: "green" | "white";
};

const ArrowButton: React.FC<AnimatedButtonProps> = ({ text, variant = "green" }) => {
    const backgroundClass = variant === "green" ? "bg-green-6" : "bg-white";
    const textColorClass = variant === "green" ? "text-white" : "text-black hover:text-white transition duration-300";

  return (
    <button
      className={`relative flex gap-8 items-center group overflow-hidden px-4 pl-5 h-[56px] rounded-md ${backgroundClass}
                 before:absolute
                 before:m-[5px]
                 before:rounded-md
                 before:inset-0 
                 before:bg-green-5 
                 before:scale-x-[0.22] 
                 before:origin-right
                 before:transition
                 before:duration-300
                 hover:before:scale-x-100
                 ${textColorClass}`}
    >
      <span className={`relative text-base`}>{text}</span>
      <MdOutlineArrowOutward size={22} className="z-10 text-slate-50"/>
    </button>
  );
};

export default ArrowButton;
