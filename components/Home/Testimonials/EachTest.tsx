export default function EachTest() {
  return (
    <div className="flex flex-col bg-[#e4e4e4] dark:bg-transparent dark:hover:bg-[#0F172A] text-black dark:text-white rounded-xl max-w-fit items-center px-4 md:px-8 mt-10 mb:mt-0 pb-5">
      <div className="avatar w-[70px] lg:w-[100px] aspect-square flex justify-center -mt-[35px] md:-mt-[45px]">
        <img src="/biplab.png" alt="" className="rounded-full" />
      </div>
      <div className="message mt-5 text-md font-[500] text-center text-[#9CA3AF]">
        “ We love the developlemt process of the team thery are really friendly
        and help me do everything blah blah. ”
      </div>
      <div className="stat flex flex-col mt-2 items-center">
        <div className="stars flex gap-3 mt-2 mb-5">
          {[1, 2, 3, 4, 5].map(() => (
            <>
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.24325 6.34041L0.863254 7.26541L0.750254 7.28841C0.579193 7.33382 0.423249 7.42382 0.298346 7.54921C0.173444 7.6746 0.0840577 7.8309 0.0393163 8.00214C-0.00542499 8.17337 -0.00391854 8.35342 0.0436818 8.52388C0.0912821 8.69435 0.183271 8.84913 0.310254 8.97241L4.93225 13.4714L3.84225 19.8264L3.82925 19.9364C3.81878 20.1133 3.85552 20.2899 3.9357 20.4479C4.01589 20.606 4.13664 20.7399 4.28559 20.8359C4.43454 20.932 4.60634 20.9867 4.7834 20.9945C4.96046 21.0023 5.13642 20.963 5.29325 20.8804L10.9993 17.8804L16.6923 20.8804L16.7923 20.9264C16.9573 20.9914 17.1367 21.0114 17.312 20.9842C17.4873 20.957 17.6522 20.8836 17.7898 20.7717C17.9275 20.6597 18.0328 20.5132 18.0951 20.347C18.1574 20.1809 18.1743 20.0012 18.1443 19.8264L17.0533 13.4714L21.6773 8.97141L21.7553 8.88641C21.8667 8.74918 21.9397 8.58486 21.967 8.41021C21.9942 8.23555 21.9747 8.05679 21.9103 7.89214C21.846 7.72749 21.7392 7.58284 21.6007 7.47292C21.4623 7.36301 21.2972 7.29175 21.1223 7.26641L14.7423 6.34041L11.8903 0.560411C11.8077 0.392945 11.68 0.251926 11.5214 0.153315C11.3629 0.0547048 11.1799 0.00244141 10.9933 0.00244141C10.8066 0.00244141 10.6236 0.0547048 10.4651 0.153315C10.3065 0.251926 10.1788 0.392945 10.0963 0.560411L7.24325 6.34041Z"
                  fill="#FFD336"
                />
              </svg>
            </>
          ))}
        </div>
        <div className="w-full text-center">
          <div className="name text-[#357D8A] font-bold text-xl">
            Ankur Gajurel{" "}
          </div>
          <div className="pos text-base">Dev, Hyperce LLCk</div>
        </div>
      </div>
    </div>
  );
}
