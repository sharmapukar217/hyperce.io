import Navbar from '@/components/Navbar/Navbar';

const boardOfDirectors = [
  {
    src: '/biplab.png',
    alt: 'Biplab Karki',
    name: 'Biplab Karki',
    position: 'CEO'
  },
  {
    src: '/Huw Davies.webp',
    alt: 'Huw Davies',
    name: 'Huw Davies',
    position: 'CEO, Hyperce UK'
  },
  {
    src: '/Jawwad Aamer Khan.jpeg',
    alt: 'Jawwad Aamer Khan',
    name: 'Jawwad Aamer Khan',
    position: 'CEO, Hyperce APAC'
  },
  {
    src: '/Roshanara Mulla Khan.webp',
    alt: 'Roshanara Mulla Khan',
    name: 'Roshanara Mulla Khan',
    position: 'CEO, Hyperce APAC'
  }
];

const executives = [
  {
    alt: 'Gulab Miya',
    name: 'Gulab Miya',
    src: '/teams/gulab-miya.jpg',
    position: 'Chief HR Officer'
  },
  {
    alt: 'Ujal Bhatta',
    name: 'Ujal Bhatta',
    src: '/teams/ujal-bhatta.jpg',
    position: 'COO'
  },
  {
    alt: 'Rohan Poudel',
    name: 'Rohan Poudel',
    src: '/teams/rohan-poudel.jpg',
    position: 'CTO'
  },
  // TODO: add image for nikesh sir
  // {
  //   alt: 'Nikesh Singh',
  //   name: 'Nikesh Singh',
  //   src: '/teams/nikesh-singh.jpg',
  //   position: 'CFO'
  // },
  {
    alt: 'Saurabh Chalise',
    name: 'Saurabh Chalise',
    src: '/teams/saurabh-chalise.jpg',
    position: 'Chief Project Officer / SEO Head'
  },
  {
    alt: 'Bhabishya Bhatt',
    name: 'Bhabishya Bhatt',
    src: '/teams/bhabishya-bhatt.jpg',
    position: 'Associate CTO'
  }
];

const teamMembers = [
  {
    alt: 'Ankit Poudel',
    name: 'Ankit Poudel',
    src: '/teams/ankit-poudel.jpg',
    position: 'Full Stack Developer'
  },
  {
    alt: 'Falguni Mandal',
    name: 'Falguni Mandal',
    src: '/teams/falguni-mandal.jpg',
    position: 'Graphics Designer'
  },
  {
    alt: 'Prakash Poudel',
    name: 'Prakash Poudel',
    src: '/teams/prakash-poudel.jpg',
    position: 'Frontend Developer'
  },
  {
    alt: 'Pratikshya Poudel',
    name: 'Pratikshya Poudel',
    src: '/teams/pratikshya-poudel.jpg',
    position: 'Backend Developer'
  },
  {
    alt: 'Pukar Sharma',
    name: 'Pukar Sharma',
    src: '/teams/pukar-sharma.jpg',
    position: 'Full Stack Developer'
  },
  {
    alt: 'Ritika Bogati',
    name: 'Ritika Bogati',
    src: '/teams/ritika-bogati.jpg',
    position: 'Content Writer'
  },
  {
    alt: 'Sangam Ghimire',
    name: 'Sangam Ghimire',
    src: '/teams/sangam-ghimire.jpg',
    position: 'Junior Devops Engineer'
  },
  {
    alt: 'Silson Sapkota',
    name: 'Silson Sapkota',
    src: '/teams/silson-sapkota.jpg',
    position: 'Frontend Developer'
  },
  {
    alt: 'Sonam Syangbo',
    name: 'Sonam Syangbo',
    src: '/teams/sonam-syangbo.jpg',
    position: 'UI/UX Designer'
  },
  {
    alt: 'Sovit Kumar Karn',
    name: 'Sovit Kumar Karn',
    src: '/teams/sovit-kumar-karn.jpg',
    position: 'Accounting Officer'
  },
  {
    alt: 'Subharaj Bhandari',
    name: 'Subharaj Bhandari',
    src: '/teams/subharaj-bhandari.jpg',
    position: 'Backend Developer'
  },
  {
    alt: 'Suruchi Gautam',
    name: 'Suruchi Gautam',
    src: '/teams/suruchi-gautam.jpg',
    position: 'Sales & Marketing Officer'
  },
  {
    alt: 'Tasnuva Ferdush',
    name: 'Tasnuva Ferdush',
    src: '/teams/tasnuva-ferdush.jpg',
    position: 'Sales & Marketing Officer'
  }
];

export default function BOD() {
  return (
    <>
      <Navbar />
      <div className="py-10">
        <div className="mx-auto px-4 md:w-10/12">
          <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl text-[#357D8A]">
            Directors
          </h2>
          <p className="mt-4 text-center font-semibold">
            Our valuable members from board of directors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-y-8 2xl:gap-y-12 my-10">
            {boardOfDirectors.map((bod, idx) => (
              <div
                key={idx}
                className="relative max-w-none rounded-xl w-72 h-72 lg:h-96 lg:w-96 border-2 dark:border-gray-700 cursor-pointer shadow-md group overflow-clip mx-auto"
              >
                <img
                  key={idx}
                  loading="lazy"
                  alt={bod.alt}
                  src={bod.src}
                  className="rounded-xl w-full h-full object-cover aspect-square group-hover:scale-110 transition duration-200 ease-in"
                />
                <div className="absolute bottom-0 w-full bg-white/80 dark:bg-black/60 rounded-b-xl flex flex-col justify-center px-4 py-4 border-t-2 dark:border-gray-700">
                  <h1 className="font-semibold">
                    {bod.name} - {bod.position}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto px-4 pt-10 md:w-10/12">
          <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl text-[#357D8A]">
            Executive Directors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-y-8 2xl:gap-y-12 my-10">
            {executives.map((executive, idx) => (
              <div
                key={idx}
                className="relative max-w-none rounded-xl w-72 h-72 lg:h-96 lg:w-96 border-2 dark:border-gray-700 cursor-pointer shadow-md group overflow-clip mx-auto"
              >
                <img
                  key={idx}
                  loading="lazy"
                  alt={executive.alt}
                  src={executive.src}
                  className="rounded-xl w-full h-full object-cover aspect-square group-hover:scale-110 transition duration-200 ease-in"
                />
                <div className="absolute bottom-0 w-full bg-white/80 dark:bg-black/60 rounded-b-xl flex flex-col justify-center px-4 py-4 border-t-2 dark:border-gray-700">
                  <h1 className="font-semibold">{executive.name}</h1>
                  <p className="text-sm font-bold text-gray-500 dark:text-gray-300">
                    {executive.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto px-4 pt-10 md:w-10/12">
          <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl text-[#357D8A]">
            Core Members
          </h2>
          <p className="mt-4 text-center font-semibold">
            Aside from the board &amp; executive members, here&apos;s our core
            teams who actively contribute on hyperce..
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-y-8 2xl:gap-y-12 my-10">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="relative max-w-none rounded-xl w-72 h-72 lg:h-96 lg:w-96 border-2 dark:border-gray-700 cursor-pointer shadow-md group overflow-clip mx-auto"
              >
                <img
                  key={idx}
                  loading="lazy"
                  alt={member.alt}
                  src={member.src}
                  className="rounded-xl w-full h-full object-cover aspect-square group-hover:scale-110 transition duration-200 ease-in"
                />
                <div className="absolute bottom-0 w-full bg-white/80 dark:bg-black/60 rounded-b-xl flex flex-col justify-center px-4 py-4 border-t-2 dark:border-gray-700">
                  <h1 className="font-semibold">{member.name}</h1>
                  <p className="text-sm font-bold text-gray-500 dark:text-gray-300">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mx-auto md:w-3/5">
          <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl text-[#357D8A]">
            Core members
          </h2>
          <p className="mt-4 text-center font-semibold">
            Aside from the board members, here&apos;s our core teams who
            actively contribute on hyperce.
          </p>

          {members.map((member, idx) => (
              <div
                key={idx}
                className="border-2 dark:border-gray-700 rounded-xl shaodw-sm group relative overflow-hidden"
              >
                <img
                  className="rounded-xl aspect-auto h-full w-full group-hover:scale-125 transition-all duration-150 ease-in"
                  src="https://source.unsplash.com/bYuI23mnmDQ"
                />

                <div className="absolute bg-white rounded-xl bottom-2 inset-x-2 border-2 py-2 px-3 dark:bg-gray-800 dark:border-gray-700">
                  <h1 className="font-semibold">DEVELOPER NAME</h1>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-300">
                    POSITION
                  </p>
                </div>
              </div>
            ))} 

          <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>:not(:first-child)]:mt-8 mt-5">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="border-2 dark:border-gray-700 rounded-xl shaodw-sm group relative overflow-hidden cursor-pointer"
              >
                <img
                  className="rounded-xl aspect-auto h-full w-full group-hover:scale-125 transition-all duration-150 ease-in"
                  src="https://source.unsplash.com/bYuI23mnmDQ"
                />

                <div className="opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-200 flex flex-col absolute bg-white rounded-xl bottom-1 inset-x-1 border-2 py-2 px-3 dark:bg-gray-800 dark:border-gray-700">
                  <h1 className="font-semibold">DEVELOPER NAME</h1>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-300">
                    POSITION
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              {members.map((member, idx) => (
                <div key={idx} className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                  />
                </div>
              ))}

              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
