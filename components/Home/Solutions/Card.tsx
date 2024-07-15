'use client';
import React from 'react';
interface propTypes {
  name: string;
  des: string;
  whiteIcon: string;
  darkIcon: string;
  href: string;
  altText: string;
}

export default function SolutionsCard(props: propTypes) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const transformationStyle = isHovered
    ? { transform: 'translateY(-1px) scale(1.1)', transition: 'transform 0.3s' }
    : {};

  return (
    <a href={props.href} target="_blank" className="">
      <div
        data-aos="fade-in"
        className="mt-5 flex gap-3 md:gap-5 items-center flex-col md:flex-row rounded-xl pb-2 hover:shadow-sm dark:hover:shadow-sm hover:shadow-gray-200 dark:hover:shadow-gray-800"
        style={transformationStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="icon px-2 py-3 w-[6rem] h-[6rem] flex items-center aspect-square bg-transparent  rounded-md scale-[110%]">
          <img
            className="dark:hidden object-contain h-full w-full"
            src={props.whiteIcon}
            alt={props.altText}
          />
          <img
            className="hidden dark:block object-contain h-full w-full"
            src={props.darkIcon}
            alt={props.altText}
          />
        </div>
        <div className="text text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="title hyperce-card-header">{props.name}</div>
          <div className="hyperce-card-description des text-sm dark:text-gray-300 text-gray-800 w-4/5 xl:w-full">
            {props.des}
          </div>
        </div>
      </div>
    </a>
  );
}
