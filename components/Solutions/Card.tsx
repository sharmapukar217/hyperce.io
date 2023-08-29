interface propTypes {
  color: string;
}
export default function SolutionsCard({ color }: propTypes) {
  const textColor = "text-[" + color + "]";
  return (
    <div className="flex flex-col items-center px-5 py-5 rounded-2xl border-2 bg-[#E3E5EB] dark:bg-[#090E1A] gap-2 text-black dark:text-white">
      <div className="icon px-4 aspect-square flex items-center justify-center py-3  bg-[#E3E5EB] dark:bg-[#090E1A] -mt-[55px] rounded-full">
        <svg
          width="35"
          height="45"
          viewBox="0 0 42 52"
          fill="none"
          className="ml-1 mb-1"
        >
          <path
            d="M37 24.7619H34V14.8571C34 13.5437 33.5786 12.284 32.8284 11.3553C32.0783 10.4265 31.0609 9.90476 30 9.90476H22V6.19048C22 4.54866 21.4732 2.97409 20.5355 1.81315C19.5979 0.652209 18.3261 0 17 0C15.6739 0 14.4021 0.652209 13.4645 1.81315C12.5268 2.97409 12 4.54866 12 6.19048V9.90476H4C2.93913 9.90476 1.92172 10.4265 1.17157 11.3553C0.421427 12.284 0 13.5437 0 14.8571V24.2667H3C6 24.2667 8.4 27.2381 8.4 30.9524C8.4 34.6667 6 37.6381 3 37.6381H0V47.0476C0 48.3611 0.421427 49.6207 1.17157 50.5495C1.92172 51.4782 2.93913 52 4 52H11.6V48.2857C11.6 44.5714 14 41.6 17 41.6C20 41.6 22.4 44.5714 22.4 48.2857V52H30C31.0609 52 32.0783 51.4782 32.8284 50.5495C33.5786 49.6207 34 48.3611 34 47.0476V37.1429H37C38.3261 37.1429 39.5978 36.4907 40.5355 35.3297C41.4732 34.1688 42 32.5942 42 30.9524C42 29.3106 41.4732 27.736 40.5355 26.5751C39.5978 25.4141 38.3261 24.7619 37 24.7619Z"
            fill={color}
          />
        </svg>
      </div>
      <h3 className="font-semibold text-2xl mt-3 text-center">
        Headless <br /> Ecommerce
      </h3>
      <span className="font-extralight text-md text-center dark:text-[#ADADAE]">
        This should make the service seem more real and interest the people and
        something more...
      </span>
      <a href="/">
        <span className={`text-lg text-black dark:text-white underline`}>Learn More</span>
      </a>
    </div>
  );
}
