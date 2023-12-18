export default function Card(props: any) {
  return (
    <div className=" flex gap-5 w-[15vw] hover:text-white hover:outline transition-all ease-in duration-100 outline-[#357D8A] rounded-xl px-5 md:px-10 py-5 hover:bg-gradient-to-b from-[#172D42] to-[#24474d]">
      <svg
        height="100"
        width="100"
        className="aspect-square"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="miter"
      >
        <path
          d="M19,9a7,7,0,0,1-4,6.32V18H9V15.32A7,7,0,1,1,19,9Z"
          opacity="0.1"
          fill="#059cf7"
          strokeWidth="0"
        ></path>
        <path d="M19,9a7,7,0,0,1-4,6.32V18H9V15.32A7,7,0,1,1,19,9Z"></path>
        <line x1="9" y1="22" x2="15" y2="22"></line>
      </svg>
      <span className="flex flex-col justify-center">
        <span className="text-lg font-bold">{props.num}</span>
        <span>{props.des}</span>
      </span>
    </div>
  );
}
