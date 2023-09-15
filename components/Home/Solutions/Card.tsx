interface propTypes {
  name: string;
  des: string;
  icon: string;
}

export default function SolutionsCard(props: propTypes) {
  return (
    <div className="mt-5 flex gap-5 px-5 items-center">
      <div className="icon px-2 py-3 w-[200px] aspect-square bg-transparent rounded-md scale-[110%]">
        <img className="object-contain h-full w-full" src={props.icon} alt="" />
      </div>
      <div className="text">
        <div className="title hyperce-card-header">{props.name}</div>
        <div className="hyperce-card-description des text-sm dark:text-gray-300 text-gray-800 w-4/5 xl:w-full">
          {props.des}
        </div>
      </div>
    </div>
  );
}
