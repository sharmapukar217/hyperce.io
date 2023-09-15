export default function ContactForm() {
  return (
    <section
      className="mx-auto container px-10 md:px-20 pb-20 text-black dark:text-white text-center md:text-left"
      id="contact"
    >
      <div className="flex flex-col md:flex-row gap-10 justify-between mx-auto mt-16">
        <div className="md:w-1/2 dark:text-gray-300">
          <h2 className="font-bold text-4xl mb-5 dark:text-white">
            Write a message:
          </h2>
          <form
            method="POST"
            id="form"
            className="w-full md:w-[80%] needs-validation"
          >
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
              className="bg-[#357D8A] text-white w-2/4 h-fit py-3 rounded-full"
            >
              Send Message
            </button>

            <div id="result" className="mt-3 text-center"></div>
          </form>
        </div>
        <div className="flex flex-col">
          <span className="mb-5 md:mb-10 text-4xl font-bold">
            Contact Info:{" "}
          </span>
          <div className="flex flex-col gap-7">
            <div>
              <span className="country text-2xl flex justify-start font-semibold">
                U.S.A
              </span>
              <div className="flex gap-1 flex-col mt-4">
                <div className="location flex gap-3">
                  <div className="icon flex items-center">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 1.78125C6.5498 1.78125 4.15625 4.05939 4.15625 6.86523C4.15625 10.0938 7.71875 15.21 9.02686 16.9772C9.08115 17.0518 9.15232 17.1125 9.23455 17.1543C9.31678 17.1962 9.40773 17.218 9.5 17.218C9.59227 17.218 9.68322 17.1962 9.76545 17.1543C9.84768 17.1125 9.91885 17.0518 9.97314 16.9772C11.2812 15.2108 14.8438 10.0963 14.8438 6.86523C14.8438 4.05939 12.4502 1.78125 9.5 1.78125Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5 8.90625C10.4838 8.90625 11.2812 8.10876 11.2812 7.125C11.2812 6.14124 10.4838 5.34375 9.5 5.34375C8.51624 5.34375 7.71875 6.14124 7.71875 7.125C7.71875 8.10876 8.51624 8.90625 9.5 8.90625Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="place dark:text-[#9CA3AF] text-left text-lg">
                    800 N King Street Suite 304 1198 Wilmington, DE 19801 United
                    States
                  </span>
                </div>
                <div className="email flex gap-3">
                  <div className="icon flex items-center">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.625 4.375V3.9375C2.50897 3.9375 2.39769 3.98359 2.31564 4.06564C2.23359 4.14769 2.1875 4.25897 2.1875 4.375H2.625ZM18.375 4.375H18.8125C18.8125 4.25897 18.7664 4.14769 18.6844 4.06564C18.6023 3.98359 18.491 3.9375 18.375 3.9375V4.375ZM2.625 4.8125H18.375V3.9375H2.625V4.8125ZM17.9375 4.375V14.875H18.8125V4.375H17.9375ZM16.625 16.1875H4.375V17.0625H16.625V16.1875ZM3.0625 14.875V4.375H2.1875V14.875H3.0625ZM4.375 16.1875C4.0269 16.1875 3.69306 16.0492 3.44692 15.8031C3.20078 15.5569 3.0625 15.2231 3.0625 14.875H2.1875C2.1875 15.4552 2.41797 16.0116 2.8282 16.4218C3.23844 16.832 3.79484 17.0625 4.375 17.0625V16.1875ZM17.9375 14.875C17.9375 15.2231 17.7992 15.5569 17.5531 15.8031C17.3069 16.0492 16.9731 16.1875 16.625 16.1875V17.0625C17.2052 17.0625 17.7616 16.832 18.1718 16.4218C18.582 16.0116 18.8125 15.4552 18.8125 14.875H17.9375Z"
                        fill="currentColor"
                      />
                      <path
                        d="M2.625 4.375L10.5 12.25L18.375 4.375"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="place dark:text-[#9CA3AF] text-lg">
                    hi@hyperce.io
                  </span>
                </div>
                <div className="phone flex gap-3">
                  <div className="icon flex items-center mt-1 scale-[115%]">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.47423 5.35845L6.81587 5.75532C6.22971 6.1089 5.75676 6.62257 5.45267 7.23587C5.14859 7.84917 5.02603 8.53657 5.09942 9.21717C5.329 11.3496 6.60332 13.5862 8.8998 15.9381C11.1905 18.284 13.3916 19.6102 15.5143 19.8948C16.1964 19.9862 16.8903 19.8799 17.5137 19.5884C18.137 19.2969 18.6635 18.8325 19.0307 18.2505L19.4393 17.6016C19.7048 17.1809 19.8086 16.6782 19.7313 16.1867C19.654 15.6953 19.4009 15.2487 19.0191 14.9298L17.193 13.404C16.9462 13.1981 16.6412 13.0746 16.3207 13.0507C16.0001 13.0269 15.6802 13.104 15.4056 13.2711L13.5247 14.4155L13.4745 14.4389C13.2581 14.5291 12.6147 14.1752 11.6823 13.2202C10.7069 12.2211 10.3927 11.5712 10.5335 11.3467L11.324 10.1141C11.6131 9.66362 11.754 9.13393 11.7268 8.59933C11.6996 8.06474 11.5057 7.55207 11.1724 7.13324L10.1405 5.8381C9.8301 5.44833 9.38857 5.18473 8.89819 5.09643C8.40782 5.00813 7.90108 5.10142 7.47423 5.35845ZM9.3384 6.4772L10.3683 7.77285C10.5686 8.02393 10.6852 8.33146 10.7017 8.6522C10.7181 8.97295 10.6337 9.2908 10.4603 9.5611L9.66709 10.7955C9.16259 11.596 9.65809 12.6159 10.9488 13.9371C12.1625 15.1806 13.1142 15.7047 13.9078 15.3687L14.0246 15.3114L15.9398 14.1477C16.0313 14.0918 16.138 14.066 16.2449 14.0739C16.3517 14.0818 16.4535 14.1229 16.5358 14.1915L18.3619 15.7173C18.553 15.8767 18.6797 16.1 18.7185 16.3458C18.7573 16.5916 18.7054 16.8432 18.5726 17.0536L18.163 17.7027C17.9007 18.1183 17.5246 18.4498 17.0795 18.6578C16.6343 18.8659 16.1388 18.9418 15.6518 18.8766C13.7891 18.6273 11.7796 17.4163 9.63527 15.2206C7.48544 13.0199 6.32137 10.9787 6.12022 9.10709C6.06771 8.62087 6.15521 8.12977 6.37243 7.69161C6.58964 7.25345 6.92752 6.88647 7.34629 6.63388L8.00465 6.237C8.21814 6.10851 8.47108 6.06205 8.7163 6.10629C8.96152 6.15053 9.18228 6.28246 9.3374 6.47746L9.3384 6.4772Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="place dark:text-[#9CA3AF] text-lg">
                    +1-617-819-5576
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="country text-2xl flex justify-start font-semibold">
                Nepal
              </span>
              <div className="flex gap-1 flex-col mt-4">
                <div className="location flex gap-3">
                  <div className="icon flex items-center">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 1.78125C6.5498 1.78125 4.15625 4.05939 4.15625 6.86523C4.15625 10.0938 7.71875 15.21 9.02686 16.9772C9.08115 17.0518 9.15232 17.1125 9.23455 17.1543C9.31678 17.1962 9.40773 17.218 9.5 17.218C9.59227 17.218 9.68322 17.1962 9.76545 17.1543C9.84768 17.1125 9.91885 17.0518 9.97314 16.9772C11.2812 15.2108 14.8438 10.0963 14.8438 6.86523C14.8438 4.05939 12.4502 1.78125 9.5 1.78125Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5 8.90625C10.4838 8.90625 11.2812 8.10876 11.2812 7.125C11.2812 6.14124 10.4838 5.34375 9.5 5.34375C8.51624 5.34375 7.71875 6.14124 7.71875 7.125C7.71875 8.10876 8.51624 8.90625 9.5 8.90625Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="place dark:text-[#9CA3AF] text-left text-lg">
                    Adarshanagar, Chandragiri - 14, Kathmandu, Nepal, 44600
                  </span>
                </div>
                <div className="email flex gap-3">
                  <div className="icon flex items-center">
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
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="place dark:text-[#9CA3AF] text-lg">
                    hi@hyperce.io
                  </span>
                </div>
                <div className="phone flex gap-3">
                  <div className="icon flex items-center mt-1 scale-[115%]">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.47423 5.35845L6.81587 5.75532C6.22971 6.1089 5.75676 6.62257 5.45267 7.23587C5.14859 7.84917 5.02603 8.53657 5.09942 9.21717C5.329 11.3496 6.60332 13.5862 8.8998 15.9381C11.1905 18.284 13.3916 19.6102 15.5143 19.8948C16.1964 19.9862 16.8903 19.8799 17.5137 19.5884C18.137 19.2969 18.6635 18.8325 19.0307 18.2505L19.4393 17.6016C19.7048 17.1809 19.8086 16.6782 19.7313 16.1867C19.654 15.6953 19.4009 15.2487 19.0191 14.9298L17.193 13.404C16.9462 13.1981 16.6412 13.0746 16.3207 13.0507C16.0001 13.0269 15.6802 13.104 15.4056 13.2711L13.5247 14.4155L13.4745 14.4389C13.2581 14.5291 12.6147 14.1752 11.6823 13.2202C10.7069 12.2211 10.3927 11.5712 10.5335 11.3467L11.324 10.1141C11.6131 9.66362 11.754 9.13393 11.7268 8.59933C11.6996 8.06474 11.5057 7.55207 11.1724 7.13324L10.1405 5.8381C9.8301 5.44833 9.38857 5.18473 8.89819 5.09643C8.40782 5.00813 7.90108 5.10142 7.47423 5.35845ZM9.3384 6.4772L10.3683 7.77285C10.5686 8.02393 10.6852 8.33146 10.7017 8.6522C10.7181 8.97295 10.6337 9.2908 10.4603 9.5611L9.66709 10.7955C9.16259 11.596 9.65809 12.6159 10.9488 13.9371C12.1625 15.1806 13.1142 15.7047 13.9078 15.3687L14.0246 15.3114L15.9398 14.1477C16.0313 14.0918 16.138 14.066 16.2449 14.0739C16.3517 14.0818 16.4535 14.1229 16.5358 14.1915L18.3619 15.7173C18.553 15.8767 18.6797 16.1 18.7185 16.3458C18.7573 16.5916 18.7054 16.8432 18.5726 17.0536L18.163 17.7027C17.9007 18.1183 17.5246 18.4498 17.0795 18.6578C16.6343 18.8659 16.1388 18.9418 15.6518 18.8766C13.7891 18.6273 11.7796 17.4163 9.63527 15.2206C7.48544 13.0199 6.32137 10.9787 6.12022 9.10709C6.06771 8.62087 6.15521 8.12977 6.37243 7.69161C6.58964 7.25345 6.92752 6.88647 7.34629 6.63388L8.00465 6.237C8.21814 6.10851 8.47108 6.06205 8.7163 6.10629C8.96152 6.15053 9.18228 6.28246 9.3374 6.47746L9.3384 6.4772Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="place dark:text-[#9CA3AF] text-lg">
                    +977-9840260599
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
