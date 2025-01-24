
interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-green-6 text-white text-md font-extralight px-6 py-3 rounded transition-colors duration-300 hover:bg-[#2f371f] active:bg-[#252b17]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;