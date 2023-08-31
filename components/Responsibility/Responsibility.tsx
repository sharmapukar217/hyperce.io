export default function Responsibility() {
  return (
    <section className=" text-black dark:text-white flex justify-center pb-[8%] text-center px-10 mx-auto container">
      <div className="md:w-1/2 flex flex-col gap-5">
        <div className="icon flex justify-center">
          <svg
            width="70px"
            height="70px"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.92 7.96997C18.9781 7.58275 19.0048 7.19156 19 6.80005C17.8347 5.58901 16.437 4.62559 14.8905 3.96753C13.344 3.30947 11.6806 2.97021 10 2.97021C8.31935 2.97021 6.65602 3.30947 5.10956 3.96753C3.5631 4.62559 2.16532 5.58901 1 6.80005C1 20.86 10 22.97 10 22.97C10.6656 22.6883 11.3077 22.3539 11.92 21.97"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23 13.97H13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 10.9199H15C13.8954 10.9199 13 11.8154 13 12.9199V17.9199C13 19.0245 13.8954 19.9199 15 19.9199H21C22.1046 19.9199 23 19.0245 23 17.9199V12.9199C23 11.8154 22.1046 10.9199 21 10.9199Z"
              stroke="#357D8A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="text flex flex-col gap-5">
          <h2 className="text-4xl font-medium">
            Your privacy is our responsibility
          </h2>
          <p className="">
            We believe that trust is paramount in a relationship. We do not own
            or sell your data, and we most certainly do not bank on
            advertising-based business models. The only way we make money is
            from the software license fees you pay us.
          </p>
        </div>
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            className="flex items-center gap-3 border-[1px] border-[#357D8A] px-4 py-1"
          >
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 48 48"
                id="b"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  className="c"
                  d="m43.1124,14.394c-.4637-1.7234-1.8098-3.0695-3.5332-3.5332-2.3145-.8936-24.7326-1.3314-31.2358.0256-1.7235.4637-3.0698,1.8101-3.5334,3.5336-1.0446,4.583-1.1239,14.4914.0256,19.1767.4638,1.7234,1.81,3.0696,3.5334,3.5333,4.5829,1.0548,26.3712,1.2033,31.2358,0,1.7234-.4637,3.0695-1.8099,3.5332-3.5333,1.1138-4.993,1.1931-14.2867-.0256-19.2027Z"
                />

                <g>
                  <path
                    stroke="currentColor"
                    className="c"
                    d="m19.4715,31.4951l10.0519-5.765c1.34-.7685,1.34-2.7013,0-3.4698l-10.0519-5.7651"
                  />

                  <path
                    stroke="currentColor"
                    className="c"
                    d="m25.1025,23.4747l-4.7325-2.7142c-.4-.2294-.8985.0594-.8985.5205v5.4284c0,.4611.4985.7499.8985.5205l4.7325-2.7142c.402-.2306.402-.8104,0-1.0409Z"
                  />
                </g>
              </svg>
            </div>
            <span className="font-semibold capitalize">WATCH MOVIE</span>
          </button>
        </div>
      </div>
    </section>
  );
}
