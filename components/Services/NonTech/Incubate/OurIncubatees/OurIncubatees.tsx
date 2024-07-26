import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function OurIncubatees() {
  const incubatees = [
    {
      name: 'LogicLand',
      url: 'https://logicland.net',
      image: '/incubate/LogicLand.png',
      description: "Building Tomorrow's Innovators Today."
    },
    {
      name: 'WedGlam',
      url: 'https://wedglam.co',
      image: '/incubate/wedglam.png',
      description: 'One stop wedding dress marketplace.'
    },
    {
      name: 'OnBlockIT',
      url: 'https://onblockit.com',
      image: '/incubate/onblockit.png',
      description: 'Your Corporate Marketing Agency'
    },
    {
      name: 'Samaajpatra',
      url: 'https://www.samaajpatra.com/',
      image: '/incubate/samaajpatra.png',
      description: 'Your online news portal.'
    }
  ];

  return (
    <section className="text-black dark:text-white pt-20 pb-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-10 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          Our Incubatees
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 pb-12">
          {incubatees.map((incubatee, index) => (
            <div
              key={index}
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 shadow-sm shadow-blue-400 hover:shadow-lg hover:shadow-blue-500"
            >
              <Image
                src={incubatee.image}
                alt={`${incubatee.name} logo`}
                className="hover:scale-110 mb-4 object-contain overflow-hidden rounded-xl"
                width={600}
                height={200}
              />
              <h3 className="text-xl font-semibold mb-2">{incubatee.name}</h3>
              <p className="text-sm mb-3">{incubatee.description}</p>
              <Link href={incubatee.url} target="_blank">
                <FaExternalLinkAlt className="text-2xl text-blue-500" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
