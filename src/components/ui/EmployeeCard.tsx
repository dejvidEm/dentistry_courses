import React from 'react';

interface EmployeeCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, position, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded overflow-hidden w-80">
      <img
        src={imageUrl}
        alt={name}
        className="w-full object-cover"
      />
      <div className="p-4 text-start">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;