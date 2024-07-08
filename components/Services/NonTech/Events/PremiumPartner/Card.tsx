import React from 'react';

interface CardProps {
  icon: JSX.Element;
  des: string;
}

const Card: React.FC<CardProps> = ({ icon, des }) => {
  return (
    <div className="bg-gray-200 dark:bg-[#172D41] h-full px-5 py-5 gap-5 flex flex-col items-center rounded-xl">
      {icon}
      <p className="text-black dark:text-[#CBCBCB] text-sm text-center">
        {des}
      </p>
    </div>
  );
};

export default Card;
