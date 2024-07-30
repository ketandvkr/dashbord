import React from 'react';
import { FaBeer } from 'react-icons/fa';

const SquareButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      <FaBeer className="text-xl" />
    </button>
  );
}

export default SquareButton;
