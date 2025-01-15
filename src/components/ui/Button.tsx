import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-[#38412b] text-white text-lg font-extralight px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-[#2f371f] active:bg-[#252b17]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;