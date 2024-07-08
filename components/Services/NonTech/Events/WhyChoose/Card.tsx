// Card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  num: ReactNode; // Changed to ReactNode to accept elements
  des: string;
}

const Card: React.FC<CardProps> = ({ num, des }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
      <div className="text-4xl mb-4">{num}</div>
      <p className="text-lg">{des}</p>
    </div>
  );
};

export default Card;
