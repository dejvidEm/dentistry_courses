import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg text-center relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          aria-label="Close Modal"
        >
          <IoMdClose size={28}/>
        </button>
        <div className="flex flex-col items-center">
          <div className="mb-4 flex items-center justify-center rounded-full">
            <IoCheckmarkCircleOutline size={80} className="text-green-500" />
          </div>
          <h2 className="text-xl font-bold mb-2">Ďakujeme za správu!</h2>
          <p className="text-gray-600">
            Vaša správa bola úspešne odoslaná. Budeme vás čoskoro kontaktovať.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;