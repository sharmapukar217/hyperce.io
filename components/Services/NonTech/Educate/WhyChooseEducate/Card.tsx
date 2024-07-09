import React from 'react';

interface CardProps {
  num: React.ReactNode;
  des: string;
}

const Card: React.FC<CardProps> = ({ num, des }) => {
  return (
    <div className="bg-white dark:bg-[#1D2A39] rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-shadow duration-300  shadow-blue-300 hover:shadow-black">
      <div className="flex justify-center mb-5 ">{num}</div>
      <p className="text-lg font-semibold text-black dark:text-white">{des}</p>
    </div>
  );
};

export default Card;
