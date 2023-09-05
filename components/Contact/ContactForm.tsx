export default function ContactForm() {
  return (
    <section className="mx-auto container px-20 pb-20 text-black dark:text-white text-center md:text-left">
      <div className="flex flex-col md:flex-row gap-10 justify-between mx-auto mt-16">
        <div className="md:w-1/2 dark:text-gray-300">
          <h2 className="font-bold text-4xl mb-5 dark:text-white">
            Contact Hyperce
          </h2>
          <form
            method="POST"
            id="form"
            className="w-full md:w-[80%] needs-validation"
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />

            <input type="checkbox" className="hidden" name="botcheck" />
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border-2 text-black placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                name="name"
              />
            </div>
            <div className="mb-5">
              <label className="sr-only">Email Address</label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                className="w-full px-4 py-3 border-2 text-black placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className="text-black w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#357D8A] text-white w-2/4 h-fit py-3"
            >
              Send Message
            </button>

            <div id="result" className="mt-3 text-center"></div>
          </form>
        </div>
        <div className="flex flex-col">
          <span className="mb-5 md:mb-10 text-3xl font-semibold">Contact Info: </span>
          <div className="flex flex-col gap-7">
            <div>
              <span className="country text-2xl flex justify-start font-semibold">U.S.A</span>
              <div className="flex gap-1 flex-col mt-4">
                <div className="location flex gap-3">
                  <div className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 1.78125C6.5498 1.78125 4.15625 4.05939 4.15625 6.86523C4.15625 10.0938 7.71875 15.21 9.02686 16.9772C9.08115 17.0518 9.15232 17.1125 9.23455 17.1543C9.31678 17.1962 9.40773 17.218 9.5 17.218C9.59227 17.218 9.68322 17.1962 9.76545 17.1543C9.84768 17.1125 9.91885 17.0518 9.97314 16.9772C11.2812 15.2108 14.8438 10.0963 14.8438 6.86523C14.8438 4.05939 12.4502 1.78125 9.5 1.78125Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5 8.90625C10.4838 8.90625 11.2812 8.10876 11.2812 7.125C11.2812 6.14124 10.4838 5.34375 9.5 5.34375C8.51624 5.34375 7.71875 6.14124 7.71875 7.125C7.71875 8.10876 8.51624 8.90625 9.5 8.90625Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="place text-[#9CA3AF] text-left text-lg">
                    800 N King Street Suite 304 1198 Wilmington, DE 19801 United
                    States
                  </span>
                </div>
                <div className="email flex gap-3">
                  <div className="icon">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.625 4.375V3.9375C2.50897 3.9375 2.39769 3.98359 2.31564 4.06564C2.23359 4.14769 2.1875 4.25897 2.1875 4.375H2.625ZM18.375 4.375H18.8125C18.8125 4.25897 18.7664 4.14769 18.6844 4.06564C18.6023 3.98359 18.491 3.9375 18.375 3.9375V4.375ZM2.625 4.8125H18.375V3.9375H2.625V4.8125ZM17.9375 4.375V14.875H18.8125V4.375H17.9375ZM16.625 16.1875H4.375V17.0625H16.625V16.1875ZM3.0625 14.875V4.375H2.1875V14.875H3.0625ZM4.375 16.1875C4.0269 16.1875 3.69306 16.0492 3.44692 15.8031C3.20078 15.5569 3.0625 15.2231 3.0625 14.875H2.1875C2.1875 15.4552 2.41797 16.0116 2.8282 16.4218C3.23844 16.832 3.79484 17.0625 4.375 17.0625V16.1875ZM17.9375 14.875C17.9375 15.2231 17.7992 15.5569 17.5531 15.8031C17.3069 16.0492 16.9731 16.1875 16.625 16.1875V17.0625C17.2052 17.0625 17.7616 16.832 18.1718 16.4218C18.582 16.0116 18.8125 15.4552 18.8125 14.875H17.9375Z"
                        fill="white"
                      />
                      <path
                        d="M2.625 4.375L10.5 12.25L18.375 4.375"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="place text-[#9CA3AF] text-lg">
                    hi@hyperce.io
                  </span>
                </div>
                <div className="phone flex gap-3">
                  <div className="icon">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.625 4.375V3.9375C2.50897 3.9375 2.39769 3.98359 2.31564 4.06564C2.23359 4.14769 2.1875 4.25897 2.1875 4.375H2.625ZM18.375 4.375H18.8125C18.8125 4.25897 18.7664 4.14769 18.6844 4.06564C18.6023 3.98359 18.491 3.9375 18.375 3.9375V4.375ZM2.625 4.8125H18.375V3.9375H2.625V4.8125ZM17.9375 4.375V14.875H18.8125V4.375H17.9375ZM16.625 16.1875H4.375V17.0625H16.625V16.1875ZM3.0625 14.875V4.375H2.1875V14.875H3.0625ZM4.375 16.1875C4.0269 16.1875 3.69306 16.0492 3.44692 15.8031C3.20078 15.5569 3.0625 15.2231 3.0625 14.875H2.1875C2.1875 15.4552 2.41797 16.0116 2.8282 16.4218C3.23844 16.832 3.79484 17.0625 4.375 17.0625V16.1875ZM17.9375 14.875C17.9375 15.2231 17.7992 15.5569 17.5531 15.8031C17.3069 16.0492 16.9731 16.1875 16.625 16.1875V17.0625C17.2052 17.0625 17.7616 16.832 18.1718 16.4218C18.582 16.0116 18.8125 15.4552 18.8125 14.875H17.9375Z"
                        fill="white"
                      />
                      <path
                        d="M2.625 4.375L10.5 12.25L18.375 4.375"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="place text-[#9CA3AF] text-lg">
                    hi@hyperce.io
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="country text-2xl flex justify-start font-semibold">U.S.A</span>
              <div className="flex gap-1 flex-col mt-4">
                <div className="location flex gap-3">
                  <div className="icon">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 1.78125C6.5498 1.78125 4.15625 4.05939 4.15625 6.86523C4.15625 10.0938 7.71875 15.21 9.02686 16.9772C9.08115 17.0518 9.15232 17.1125 9.23455 17.1543C9.31678 17.1962 9.40773 17.218 9.5 17.218C9.59227 17.218 9.68322 17.1962 9.76545 17.1543C9.84768 17.1125 9.91885 17.0518 9.97314 16.9772C11.2812 15.2108 14.8438 10.0963 14.8438 6.86523C14.8438 4.05939 12.4502 1.78125 9.5 1.78125Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5 8.90625C10.4838 8.90625 11.2812 8.10876 11.2812 7.125C11.2812 6.14124 10.4838 5.34375 9.5 5.34375C8.51624 5.34375 7.71875 6.14124 7.71875 7.125C7.71875 8.10876 8.51624 8.90625 9.5 8.90625Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="place text-[#9CA3AF] text-left text-lg">
                    800 N King Street Suite 304 1198 Wilmington, DE 19801 United
                    States
                  </span>
                </div>
                <div className="email flex gap-3">
                  <div className="icon">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.625 4.375V3.9375C2.50897 3.9375 2.39769 3.98359 2.31564 4.06564C2.23359 4.14769 2.1875 4.25897 2.1875 4.375H2.625ZM18.375 4.375H18.8125C18.8125 4.25897 18.7664 4.14769 18.6844 4.06564C18.6023 3.98359 18.491 3.9375 18.375 3.9375V4.375ZM2.625 4.8125H18.375V3.9375H2.625V4.8125ZM17.9375 4.375V14.875H18.8125V4.375H17.9375ZM16.625 16.1875H4.375V17.0625H16.625V16.1875ZM3.0625 14.875V4.375H2.1875V14.875H3.0625ZM4.375 16.1875C4.0269 16.1875 3.69306 16.0492 3.44692 15.8031C3.20078 15.5569 3.0625 15.2231 3.0625 14.875H2.1875C2.1875 15.4552 2.41797 16.0116 2.8282 16.4218C3.23844 16.832 3.79484 17.0625 4.375 17.0625V16.1875ZM17.9375 14.875C17.9375 15.2231 17.7992 15.5569 17.5531 15.8031C17.3069 16.0492 16.9731 16.1875 16.625 16.1875V17.0625C17.2052 17.0625 17.7616 16.832 18.1718 16.4218C18.582 16.0116 18.8125 15.4552 18.8125 14.875H17.9375Z"
                        fill="white"
                      />
                      <path
                        d="M2.625 4.375L10.5 12.25L18.375 4.375"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="place text-[#9CA3AF] text-lg">
                    hi@hyperce.io
                  </span>
                </div>
                <div className="phone flex gap-3">
                  <div className="icon">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.625 4.375V3.9375C2.50897 3.9375 2.39769 3.98359 2.31564 4.06564C2.23359 4.14769 2.1875 4.25897 2.1875 4.375H2.625ZM18.375 4.375H18.8125C18.8125 4.25897 18.7664 4.14769 18.6844 4.06564C18.6023 3.98359 18.491 3.9375 18.375 3.9375V4.375ZM2.625 4.8125H18.375V3.9375H2.625V4.8125ZM17.9375 4.375V14.875H18.8125V4.375H17.9375ZM16.625 16.1875H4.375V17.0625H16.625V16.1875ZM3.0625 14.875V4.375H2.1875V14.875H3.0625ZM4.375 16.1875C4.0269 16.1875 3.69306 16.0492 3.44692 15.8031C3.20078 15.5569 3.0625 15.2231 3.0625 14.875H2.1875C2.1875 15.4552 2.41797 16.0116 2.8282 16.4218C3.23844 16.832 3.79484 17.0625 4.375 17.0625V16.1875ZM17.9375 14.875C17.9375 15.2231 17.7992 15.5569 17.5531 15.8031C17.3069 16.0492 16.9731 16.1875 16.625 16.1875V17.0625C17.2052 17.0625 17.7616 16.832 18.1718 16.4218C18.582 16.0116 18.8125 15.4552 18.8125 14.875H17.9375Z"
                        fill="white"
                      />
                      <path
                        d="M2.625 4.375L10.5 12.25L18.375 4.375"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="place text-[#9CA3AF] text-lg">
                    hi@hyperce.io
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
