import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import Navbar from '@/components/Navbar/Navbar';
import Contact from '@/components/Contact/Contact';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="mt-20 px-6 lg:px-20">
      <div className="flex flex-col items-center text-center gap-5 mb-12">
        <h1 className="text-4xl font-extrabold text-[#2c3e50] dark:text-[#AAB8C2]">
          Welcome to the Hyperce Events Club
        </h1>
        <p className="w-full lg:w-3/4 text-xl sm:text-base">
          The Hyperce Events Club offers exclusive access to a wide range of
          skill-building and business networking events, including workshops,
          bootcamps, and webinars. Whether you&apos;re looking to advance your
          career or expand your professional network, we have the perfect
          membership plan for you.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center my-12 flex flex-col lg:flex-row gap-4 justify-center">
        <Link href="https://forms.gle/gzn4Qf5mYgy4zEfz6">
          <button className="bg-green-600 text-white py-3 px-8 rounded-3xl shadow-lg hover:bg-[#2980b9] transition-colors text-lg  shadow-transparent hover:shadow-blue-500/50">
            Claim Your Membership
          </button>
        </Link>

        <Link href="https://docs.hyperce.io/hyperce-events-club-proposal.pdf">
          <button className="bg-gradient-to-tl from-purple-600 to-purple-400 shadow-lg shadow-transparent hover:shadow-purple-500/50 border border-transparent font-medium rounded-3xl py-3 px-8 transition-colors text-lg">
            View Hyperce Events Club Proposal
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        {/* Skills Events Plan */}
        <div className="bg-gray-100 dark:bg-[#2c3e50] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <GiSkills className="text-[#854b8a] dark:text-[#D8AEF2]" size={50} />
          <h3 className="text-2xl font-bold mt-4">
            Hyperce Skills Events Club
          </h3>
          <p className="mt-2 text-black dark:text-[#CBCBCB] text-sm">
            Perfect for those looking to enhance their skills with interactive
            workshops, bootcamps, and virtual events.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="text-[#854b8a] mr-2" /> 12-36 virtual
              events per year
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#854b8a] mr-2" /> 12-24 physical
              events per year
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#854b8a] mr-2" /> Workshops and
              bootcamps
            </li>
          </ul>
          <div className="mt-6">
            <p className="font-bold text-lg text-[#2c3e50] dark:text-[#AAB8C2]">
              Membership Pricing
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <div className="pricing-card bg-white dark:bg-[#34495e] p-4 rounded-lg shadow-md">
                <p className="font-semibold text-[#3498db] dark:text-[#AEDFF7]">
                  Virtual Pass
                </p>
                <p className="text-sm text-[#2c3e50] dark:text-[#CBCBCB]">
                  NPR 300/month or NPR 3000/year
                </p>
              </div>
              <div className="pricing-card bg-white dark:bg-[#34495e] p-4 rounded-lg shadow-md">
                <p className="font-semibold text-[#3498db] dark:text-[#AEDFF7]">
                  Physical Pass
                </p>
                <p className="text-sm text-[#2c3e50] dark:text-[#CBCBCB]">
                  NPR 500/month or NPR 5000/year
                </p>
              </div>
              <div className="pricing-card bg-white dark:bg-[#34495e] p-4 rounded-lg shadow-md">
                <p className="font-semibold text-[#3498db] dark:text-[#AEDFF7]">
                  Hybrid Pass
                </p>
                <p className="text-sm text-[#2c3e50] dark:text-[#CBCBCB]">
                  NPR 600/month or NPR 6000/year
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Events Plan */}
        <div className="bg-gray-100 dark:bg-[#2c3e50] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <MdOutlineBusinessCenter
            className="text-[#3498db] dark:text-[#AEDFF7]"
            size={50}
          />
          <h3 className="text-2xl font-bold mt-4">
            Hyperce Business Events Club
          </h3>
          <p className="mt-2 text-black dark:text-[#CBCBCB] text-sm justify-center">
            Ideal for entrepreneurs and professionals looking to stay ahead in
            the business world with insightful summits, forums, and networking
            events.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="text-[#3498db] mr-2" /> 12-36 virtual
              events per year
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#3498db] mr-2" /> 12-24 physical
              events per year
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#3498db] mr-2" /> Executive
              summits and business forums
            </li>
          </ul>
          <div className="mt-6">
            <p className="font-bold text-lg">Membership Pricing</p>
            <div className="mt-4 flex flex-col gap-3">
              <div className="pricing-card bg-white dark:bg-[#34495e] p-4 rounded-lg shadow-md">
                <p className="font-semibold text-[#3498db] dark:text-[#AEDFF7]">
                  Virtual Pass
                </p>
                <p className="text-sm text-[#2c3e50] dark:text-[#CBCBCB]">
                  NPR 750/month or NPR 7500/year
                </p>
              </div>
              <div className="pricing-card bg-white dark:bg-[#34495e] p-4 rounded-lg shadow-md">
                <p className="font-semibold text-[#3498db] dark:text-[#AEDFF7]">
                  Physical Pass
                </p>
                <p className="text-sm text-[#2c3e50] dark:text-[#CBCBCB]">
                  NPR 1000/month or NPR 10000/year
                </p>
              </div>
              <div className="pricing-card bg-white dark:bg-[#34495e] p-4 rounded-lg shadow-md">
                <p className="font-semibold text-[#3498db] dark:text-[#AEDFF7]">
                  Hybrid Pass
                </p>
                <p className="text-sm text-[#2c3e50] dark:text-[#CBCBCB]">
                  NPR 1500/month or NPR 15000/year
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Super Events Plan */}
        <div className="bg-gray-100 dark:bg-[#2c3e50] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
          <FaUserFriends
            className="text-[#27ae60] dark:text-[#B4F0C6]"
            size={50}
          />
          <h3 className="text-2xl font-bold mt-4">Hyperce Super Events Club</h3>
          <p className="mt-2 text-black dark:text-[#CBCBCB] text-sm">
            Get the best of both worlds! A mixture of skill and business events
            tailored to ambitious professionals.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="text-[#27ae60] mr-2" /> 12-36 virtual
              events per year
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#27ae60] mr-2" /> 12-24 physical
              events per year
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#27ae60] mr-2" /> Combination of
              skill & business events
            </li>
          </ul>

          {/* pricing  */}
          {/* <div className="mt-6">
            <p className="font-bold text-lg">Membership Pricing</p>
            <div className="mt-4 flex flex-col gap-3">
              <div className="pricing-card bg-white dark:bg-[#34495e] p-4 rounded-lg shadow-md">
                <p className="font-semibold text-[#27ae60] dark:text-[#B4F0C6]">
                  Virtual Pass
                </p>
                <p className="text-sm text-[#2c3e50] dark:text-[#CBCBCB]">
                  NPR 900/month or NPR 9000/year
                </p>
              </div>
              <div className="pricing-card bg-white dark:bg-[#34495e] p-4 rounded-lg shadow-md">
                <p className="font-semibold text-[#27ae60] dark:text-[#B4F0C6]">
                  Physical Pass
                </p>
                <p className="text-sm text-[#2c3e50] dark:text-[#CBCBCB]">
                  NPR 1300/month or NPR 13000/year
                </p>
              </div>
              <div className="pricing-card bg-white dark:bg-[#34495e] p-4 rounded-lg shadow-md">
                <p className="font-semibold text-[#27ae60] dark:text-[#B4F0C6]">
                  Hybrid Pass
                </p>
                <p className="text-sm text-[#2c3e50] dark:text-[#CBCBCB]">
                  NPR 1800/month or NPR 18000/year
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* hiding for now */}
      {/* Special Offers Section */}
      {/* <div className="bg-[#f1f1f1] dark:bg-[#34495e] p-10 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-[#e74c3c] dark:text-[#F4A7A7]">
            Special Offer: 10% Off All Memberships!
          </h2>
          <p className="mt-2 text-lg">
            Join now to enjoy our exclusive festive offer. Limited to the first
            30 members!
          </p>
          <p className="mt-2 text-lg font-semibold">
            One lucky winner will receive a Combo Premium Pass Membership!
          </p>
        </div> */}

      {/* Call to Action */}
      {/* <div className="text-center mt-12 flex flex-col lg:flex-row gap-4 justify-center">
        <Link href="https://forms.gle/gzn4Qf5mYgy4zEfz6">
          <button className="bg-[#3498db] text-white py-3 px-8 rounded-3xl shadow-lg hover:bg-[#2980b9] transition-colors text-lg  shadow-transparent hover:shadow-blue-500/50">
            Register
          </button>
        </Link>

        <Link href="https://docs.hyperce.io/hyperce-events-club-proposal.pdf">
          <button className="bg-gradient-to-tl from-purple-600 to-purple-400 shadow-lg shadow-transparent hover:shadow-purple-500/50 border border-transparent font-medium rounded-3xl py-3 px-8 transition-colors text-lg">
            View Hyperce Events Club Proposal
          </button>
        </Link>
      </div> */}
    </div>
  );
}
