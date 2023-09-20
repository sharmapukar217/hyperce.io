export default function Business() {
  return (
    <section className="bg-white dark:bg-transparent rounded-3xl flex flex-col lg:flex-row container mx-auto px-10 md:px-20 py-10 md:py-20 gap-20 text-black dark:text-white">
      <div className="lg:w-1/2 flex flex-col gap-5">
        <h3 className="text-4xl font-extrabold pe-4 mb-5">
          Just focus on your business strategy
        </h3>
        <div className="flex flex-col gap-5 hyperce-sub-head dark:text-gray-400 text-gray-700 mb-5">
          <p>
            At hyperce, we shape ecommerce suite solutions to meet your unique
            needs. With top-notch services we provide, you can focus on your
            business strategy while we handle the technical details.
          </p>
          <p>
            Let us be your trusted partner in creating a successful online
            store. Our team of experts is dedicated to providing you with the
            best ecommerce and related solutions, tailored to your requirements.
            Partner with us to make your online business thrive.
          </p>
        </div>
        <div className="needs flex flex-gap gap-5 flex-col w-fit">
          <div className="need-1 flex gap-4">
            <div className="icon px-3 flex items-center border-[1px] rounded-lg">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 6.59497H15.5M6.5 9.59497H11M1.25 11.105C1.25 12.705 2.373 14.099 3.957 14.332C5.086 14.498 6.227 14.625 7.38 14.711C7.73 14.737 8.05 14.921 8.245 15.212L11 19.345L13.755 15.212C13.8516 15.0682 13.9798 14.9484 14.1297 14.8616C14.2795 14.7748 14.4472 14.7233 14.62 14.711C15.7652 14.6255 16.9069 14.4991 18.043 14.332C19.627 14.099 20.75 12.706 20.75 11.104V5.08597C20.75 3.48397 19.627 2.09097 18.043 1.85797C15.711 1.51569 13.357 1.34423 11 1.34497C8.608 1.34497 6.256 1.51997 3.957 1.85797C2.373 2.09097 1.25 3.48497 1.25 5.08597V11.104V11.105Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="text">
              <h4 className="text-lg font-bold">Discuss Your Needs</h4>
              <span className="text-base font-light text-gray-700 dark:text-[#9CA3AF]">
                Define your ecommerce business goals and requirements
              </span>
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-600"></div>
          <div className="need-1 flex gap-4">
            <div className="icon px-3 flex items-center border-[1px] rounded-lg ">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 6.59497H15.5M6.5 9.59497H11M1.25 11.105C1.25 12.705 2.373 14.099 3.957 14.332C5.086 14.498 6.227 14.625 7.38 14.711C7.73 14.737 8.05 14.921 8.245 15.212L11 19.345L13.755 15.212C13.8516 15.0682 13.9798 14.9484 14.1297 14.8616C14.2795 14.7748 14.4472 14.7233 14.62 14.711C15.7652 14.6255 16.9069 14.4991 18.043 14.332C19.627 14.099 20.75 12.706 20.75 11.104V5.08597C20.75 3.48397 19.627 2.09097 18.043 1.85797C15.711 1.51569 13.357 1.34423 11 1.34497C8.608 1.34497 6.256 1.51997 3.957 1.85797C2.373 2.09097 1.25 3.48497 1.25 5.08597V11.104V11.105Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="text">
              <h4 className="text-lg font-bold">Discuss Your Needs</h4>
              <span className="text-base font-light text-gray-700 dark:text-[#9CA3AF]">
                Define your ecommerce business goals and requirements
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-end">
        <div className="">
          <img
            className="hidden dark:block"
            src="https://hyperce-io.vercel.app/images/milestone-dark.png"
            alt=""
          />
          <img
            className="block dark:hidden"
            src="https://hyperce-io.vercel.app/images/milestone.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
