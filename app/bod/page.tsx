import Navbar from '@/components/Navbar/Navbar';

const boardOfDirectors = [
  { src: '/biplab.png', alt: 'Biplab Karki', name: 'Biplab Karki' },
  {
    src: 'https://media.discordapp.net/attachments/1129807618907590656/1206929912116682824/huwd.png?ex=65ddcc12&is=65cb5712&hm=f7e20df1890216a63f6ae55f09306f668bf1655d154b79a99387363837d67a2b&=&format=webp&quality=lossless&width=575&height=603',
    alt: 'Huw Davies',
    name: 'Huw Davies'
  },
  {
    src: 'https://media.discordapp.net/attachments/1129807618907590656/1208043723418632242/WhatsApp_Image_2024-02-16_at_19.16.28.jpeg?ex=65e1d964&is=65cf6464&hm=742ed45a9bf082210a2945a7ab7bfa2423ce047bfb92c81d7dcb9a2682b409ea&=&width=575&height=603',
    alt: 'Jawwad Aamer Khan',
    name: 'Jawwad Aamer Khan'
  },
  {
    src: 'https://media.discordapp.net/attachments/1129807618907590656/1211365766171983984/WhatsApp_Image_2024-02-19_at_02.58.42.jpeg?ex=65edef48&is=65db7a48&hm=64d754b123bb37a575973d649345a07e12ea48b477151eca642731f64c035488&=&format=webp&width=452&height=603',
    alt: 'Roshanara Mulla',
    name: 'Roshanara Mulla'
  }
];

// const members = [
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp'
//   },
//   {
//     alt: '',
//     src: 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp'
//   }
// ];

export default function BOD() {
  return (
    <>
      <Navbar />
      <div className="py-10">
        <div className="mx-auto px-4 md:w-10/12">
          <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl text-[#357D8A]">
            Board Of Directors
          </h2>
          <p className="mt-4 text-center font-semibold">
            Our valuable members from board of directors.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-4 2xl:gap-y-12 my-10">
            {boardOfDirectors.map((bod, idx) => (
              <div
                key={idx}
                className="relative max-w-none rounded-xl w-64 h-64 lg:h-96 lg:w-96 border-2 dark:border-gray-700 cursor-pointer shadow-md group overflow-clip mx-auto"
              >
                <img
                  key={idx}
                  loading="lazy"
                  alt={bod.alt}
                  src={bod.src}
                  className="rounded-xl w-full h-full object-cover aspect-square group-hover:scale-110 transition duration-200 ease-in"
                />
                <div className="absolute bottom-0 w-full bg-white/80 dark:bg-black/60 rounded-b-xl flex flex-col justify-center px-4 py-4 border-t-2 dark:border-gray-700">
                  <h1 className="font-semibold">{bod.name}</h1>
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
