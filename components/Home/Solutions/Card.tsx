// interface propTypes {
//   color: string;
// }
export default function SolutionsCard() {
  // const textColor = "text-[" + color + "]";
  return (
    // <div className="flex flex-col items-center px-5 py-5 rounded-2xl bg-[#E3E5EB] dark:bg-[#090E1A] gap-2 text-black dark:text-white">
    //   <div className="icon px-4 aspect-square flex items-center justify-center py-3  bg-[#E3E5EB] dark:bg-[#090E1A] -mt-[55px] rounded-full">
    //     <svg
    //       width="35"
    //       height="45"
    //       viewBox="0 0 42 52"
    //       fill="none"
    //       className="ml-1 mb-1"
    //     >
    //       <path
    //         d="M37 24.7619H34V14.8571C34 13.5437 33.5786 12.284 32.8284 11.3553C32.0783 10.4265 31.0609 9.90476 30 9.90476H22V6.19048C22 4.54866 21.4732 2.97409 20.5355 1.81315C19.5979 0.652209 18.3261 0 17 0C15.6739 0 14.4021 0.652209 13.4645 1.81315C12.5268 2.97409 12 4.54866 12 6.19048V9.90476H4C2.93913 9.90476 1.92172 10.4265 1.17157 11.3553C0.421427 12.284 0 13.5437 0 14.8571V24.2667H3C6 24.2667 8.4 27.2381 8.4 30.9524C8.4 34.6667 6 37.6381 3 37.6381H0V47.0476C0 48.3611 0.421427 49.6207 1.17157 50.5495C1.92172 51.4782 2.93913 52 4 52H11.6V48.2857C11.6 44.5714 14 41.6 17 41.6C20 41.6 22.4 44.5714 22.4 48.2857V52H30C31.0609 52 32.0783 51.4782 32.8284 50.5495C33.5786 49.6207 34 48.3611 34 47.0476V37.1429H37C38.3261 37.1429 39.5978 36.4907 40.5355 35.3297C41.4732 34.1688 42 32.5942 42 30.9524C42 29.3106 41.4732 27.736 40.5355 26.5751C39.5978 25.4141 38.3261 24.7619 37 24.7619Z"
    //         fill={color}
    //       />
    //     </svg>
    //   </div>
    //   <h2 className="font-semibold text-2xl mt-3 text-center">
    //     Headless <br /> Ecommerce
    //   </h2>
    //   <span className="font-extralight text-md text-center dark:text-[#ADADAE]">
    //     This should make the service seem more real and interest the people and
    //     something more...
    //   </span>
    //   <a href="/">
    //     <span className={`text-lg text-black dark:text-white underline`}>Learn More</span>
    //   </a>
    // </div>
    <div className="mt-5 flex gap-3 px-5">
      <div className="icon w-fit px-5 py-3 h-fit border-[2px] bg-[#DAE4FF] rounded-md border-gray-200">
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
        <div className="title font-bold">Hyperce</div>
        <div className="des text-sm w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          veritatis quibusdam amet.
        </div>
      </div>
    </div>
  );
}
