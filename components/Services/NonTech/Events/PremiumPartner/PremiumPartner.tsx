import {
  FaTicketAlt,
  FaCheckCircle,
  FaChartLine,
  FaHeadset,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import Card from './Card';

export default function PremiumPartner() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <div className="flex items-center justify-center mb-5">
            <AiFillHome
              size={60}
              className="text-blue-600 dark:text-blue-300"
            />
          </div>
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Premium Corporate Ticketing Platform
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            Discover the ultimate solution for corporate ticketing with
            Eventsize. Our platform ensures seamless booking, management, and
            tracking of corporate events. Elevate your corporate events with a
            premium global ticketing partner, which Hyperce officially is a
            part, that you can trust.
          </p>
          <a
            href="https://eventsize.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center gap-2"
          >
            Visit Eventsize <FaExternalLinkAlt />
          </a>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              {
                icon: (
                  <FaTicketAlt
                    size={45}
                    className="text-[#854b8a] dark:text-[#D8AEF2]"
                  />
                ),
                des: 'Seamless Booking'
              },
              {
                icon: (
                  <FaCheckCircle
                    size={45}
                    className="text-[#477e68] dark:text-[#AEF2D7]"
                  />
                ),
                des: 'Efficient Management'
              },
              {
                icon: (
                  <FaChartLine
                    size={45}
                    className="text-[#c7b36b] dark:text-[#FFD747]"
                  />
                ),
                des: 'Real-time Tracking'
              },
              {
                icon: (
                  <FaHeadset
                    size={45}
                    className="text-[#3a8bcd] dark:text-[#A3D0FF]"
                  />
                ),
                des: 'Premium Support'
              }
            ].map((card, index) => (
              <Card key={index} icon={card.icon} des={card.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
