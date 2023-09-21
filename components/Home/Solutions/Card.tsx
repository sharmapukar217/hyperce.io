interface propTypes {
  name: string;
  des: string;
  whiteIcon: string;
  darkIcon: string;
  href: string;
}

export default function SolutionsCard(props: propTypes) {
  return (
    <a href={props.href}>
      <div data-aos="fade-in" className="mt-5 flex gap-3 md:gap-5 items-center flex-col md:flex-row">
        <div className="icon px-2 py-3 w-[6rem] h-[6rem] flex items-center aspect-square bg-transparent rounded-md scale-[110%]">
          <img
            className="dark:hidden object-contain h-full w-full"
            src={props.whiteIcon}
            alt=""
          />
          <img
            className="hidden dark:block object-contain h-full w-full"
            src={props.darkIcon}
            alt=""
          />
        </div>
        <div className="text text-center flex flex-col items-center">
          <div className="title hyperce-card-header">{props.name}</div>
          <div className="hyperce-card-description des text-sm dark:text-gray-300 text-gray-800 w-4/5 xl:w-full">
            {props.des}
          </div>
        </div>
      </div>
    </a>
  );
}
