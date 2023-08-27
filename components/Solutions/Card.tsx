export default function Card() {
  return (
    <div className="flex flex-col gap-5 rounded-xl px-0 md:px-5 py-7">
      <div className="flex gap-5 font-semibold">
        <svg
          className="sm:flex"
          width="40"
          height="60"
          viewBox="0 0 71 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M62.5476 41.4325H57.4762V24.8595C57.4762 22.6618 56.7638 20.5541 55.4957 19.0001C54.2276 17.446 52.5077 16.573 50.7143 16.573H37.1905V10.3581C37.1905 7.61098 36.3 4.97635 34.7148 3.03382C33.1297 1.0913 30.9798 0 28.7381 0C26.4964 0 24.3465 1.0913 22.7614 3.03382C21.1762 4.97635 20.2857 7.61098 20.2857 10.3581V16.573H6.7619C4.96854 16.573 3.24862 17.446 1.98052 19.0001C0.712413 20.5541 0 22.6618 0 24.8595V40.6039H5.07143C10.1429 40.6039 14.2 45.5757 14.2 51.7906C14.2 58.0055 10.1429 62.9774 5.07143 62.9774H0V78.7217C0 80.9195 0.712413 83.0272 1.98052 84.5812C3.24862 86.1352 4.96854 87.0082 6.7619 87.0082H19.6095V80.7934C19.6095 74.5785 23.6667 69.6066 28.7381 69.6066C33.8095 69.6066 37.8667 74.5785 37.8667 80.7934V87.0082H50.7143C52.5077 87.0082 54.2276 86.1352 55.4957 84.5812C56.7638 83.0272 57.4762 80.9195 57.4762 78.7217V62.1488H62.5476C64.7893 62.1488 66.9392 61.0574 68.5244 59.1149C70.1095 57.1724 71 54.5378 71 51.7906C71 49.0435 70.1095 46.4089 68.5244 44.4663C66.9392 42.5238 64.7893 41.4325 62.5476 41.4325Z"
            fill="#D8AEF2"
          />
        </svg>
        <span className="text-xl md:text-2xl">
          Headless <br /> Ecommerce
        </span>
      </div>
      <span className="text-black dark:text-[#CBCBCB] text-sm  md:text-lg  md:leading-7">
        This should make the service seem more real and intrest the people and
        something more...
      </span>
      <span className="text-lg font-semibold">Learn more </span>
    </div>
  );
}
