export default function Card() {
  return (
    <div className="flex gap-5 hover:text-white hover:outline transition-all ease-in duration-100 outline-[#357D8A] rounded-xl w-fit px-5 md:px-10 py-5 hover:bg-gradient-to-b from-[#172D42] to-[#24474d]">
      <svg
        width="55"
        height="82"
        className="scale-[70%] md:scale-100 text-[#a4ce6c] dark:text-[#AEFF47]"
        viewBox="0 0 55 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.3311 0C20.0824 0 13.1307 3.02374 8.00508 8.40603C2.87951 13.7883 0 21.0883 0 28.7C0 38.458 4.64628 47.027 11.7133 52.234V61.5C11.7133 62.5874 12.1247 63.6302 12.8569 64.3991C13.5891 65.168 14.5822 65.6 15.6178 65.6H39.0444C40.0799 65.6 41.073 65.168 41.8052 64.3991C42.5375 63.6302 42.9488 62.5874 42.9488 61.5V52.234C50.0159 47.027 54.6621 38.458 54.6621 28.7C54.6621 21.0883 51.7826 13.7883 46.6571 8.40603C41.5315 3.02374 34.5797 0 27.3311 0ZM15.6178 77.9C15.6178 78.9874 16.0291 80.0302 16.7613 80.7991C17.4936 81.568 18.4867 82 19.5222 82H35.1399C36.1755 82 37.1686 81.568 37.9008 80.7991C38.633 80.0302 39.0444 78.9874 39.0444 77.9V73.8H15.6178V77.9Z"
          fill="currentColor"
        />
      </svg>
      <span className="flex flex-col justify-center">
        <span className="text-lg font-bold">30x</span>
        <span>Customer Retention</span>
      </span>
    </div>
  );
}
