export default function Card(props: { num: string; des: string }) {
  return (
    <>
      <div className="flex items-center">
        <div>
          <svg
            height="100px"
            width="100px"
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
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-extrabold text-xl">{props.num}</span>
          <span className="font-light">{props.des}</span>
        </div>
      </div>
    </>
  );
}
