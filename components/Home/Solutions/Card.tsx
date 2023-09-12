interface propTypes {
  name: string;
  des: string;
}

export default function SolutionsCard(props: propTypes) {
  return (
    <div className="mt-5 flex gap-5 px-5 items-center">
      <div className="icon w-fit px-5 py-3 h-fit bg-[#DAE4FF] rounded-md scale-[110%]">
        <svg
          width="28"
          height="41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_343_12)">
            <path
              d="M19.3835 25.3847C19.3835 25.1263 19.5259 24.8886 19.7546 24.7647L26.1673 21.2943C26.6421 21.0375 27.2212 21.3781 27.2212 21.9143V36.3109C27.2212 36.5692 27.0789 36.807 26.8501 36.9307L20.4375 40.4011C19.9627 40.6581 19.3835 40.3175 19.3835 39.7812V25.3847Z"
              fill="#357D8A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.3132 8.59421C27.3132 8.02953 26.6777 7.69318 26.2043 8.00721L19.7854 12.2653C19.5428 12.4262 19.2257 12.4241 18.9852 12.2601L12.7907 8.0335C12.3179 7.71096 11.6742 8.04643 11.6742 8.61531V16.2694C11.6742 16.5019 11.7896 16.7195 11.9827 16.8513L18.9852 21.6292C19.2257 21.7932 19.5428 21.7953 19.7854 21.6343L26.9969 16.8505C27.1946 16.7195 27.3132 16.4993 27.3132 16.2635V8.59421Z"
              fill="#357D8A"
            />
            <path
              d="M4.16694e-05 4.9988C4.16694e-05 4.76409 0.117668 4.54472 0.3139 4.41341L6.72648 0.122106C7.19975 -0.194571 7.83768 0.141521 7.83768 0.707498V14.0056C7.83768 14.2403 7.72005 14.4597 7.52378 14.5911L1.11119 18.8823C0.637968 19.199 0 18.8629 0 18.297L4.16694e-05 4.9988Z"
              fill="#357D8A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 31.763C0 32.3277 0.63536 32.664 1.10879 32.3499L7.52766 28.0918C7.77041 27.931 8.0875 27.933 8.32802 28.0971L14.5225 32.3237C14.9952 32.6463 15.639 32.3108 15.639 31.7419V24.0877C15.639 23.8553 15.5236 23.6377 15.3305 23.5059L8.32802 18.7281C8.0875 18.5639 7.77041 18.5619 7.52766 18.7229L0.316258 23.5066C0.118625 23.6377 0 23.8579 0 24.0936V31.763Z"
              fill="#357D8A"
            />
          </g>
          <defs>
            <clipPath id="clip0_343_12">
              <rect width="27.3132" height="40.489" fill="white" />
            </clipPath>
          </defs>
        </svg>
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
