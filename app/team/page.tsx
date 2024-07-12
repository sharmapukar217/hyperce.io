import { cn } from '@/lib/utils';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';

type PersonInfoProps = {
  name: string;
  imageUrl: string;
  position: string;
  hideLinks?: boolean;
  facebookLink?: string;
  linkedInLink?: string;
  animateBorder?: boolean;
};

const boardOfDirectors: Omit<PersonInfoProps, 'hideLinks'>[] = [
  {
    imageUrl: '/biplab.png',
    name: 'Biplab Karki',
    position: 'CEO',
    facebookLink: 'https://www.facebook.com/biplab.karki1',
    linkedInLink: 'https://www.linkedin.com/in/beeplove'
  },
  {
    imageUrl: '/Huw Davies.webp',
    name: 'Huw Davies',
    position: 'CEO, Hyperce UK',
    linkedInLink: 'https://www.linkedin.com/in/huw-davies-583990142'
  },
  {
    imageUrl: '/Jawwad Aamer Khan.jpeg',
    name: 'Jawwad Aamer Khan',
    position: 'CEO, Hyperce APAC',
    facebookLink: 'https://www.facebook.com/aamerk2',
    linkedInLink: 'https://www.linkedin.com/in/jawwadaamerkhan'
  },
  {
    imageUrl: '/Roshanara Mulla Khan.webp',
    name: 'Roshanara Mulla Khan',
    position: 'COO, Hyperce APAC',
    linkedInLink: 'https://www.linkedin.com/in/roshanara-m-145455223'
  }
];

const executives: Omit<PersonInfoProps, 'hideLinks'>[] = [
  {
    name: 'Gulab Miya',
    imageUrl: '/teams/gulab-miya.jpg',
    position: 'Chief HR Officer',
    facebookLink: 'https://www.facebook.com/sunil.don.58760',
    linkedInLink: 'https://www.linkedin.com/in/gulab-miya-sunil/'
  },
  {
    name: 'Ujal Bhatta',
    imageUrl: '/teams/ujal-bhatta.jpg',
    position: 'COO',
    facebookLink: 'https://www.facebook.com/ujalbhatta1',
    linkedInLink: 'https://www.linkedin.com/in/ujal-bhatta/'
  },
  {
    name: 'Rohan Poudel',
    imageUrl: '/teams/rohan-poudel.jpg',
    position: 'CTO',
    facebookLink: 'https://www.facebook.com/rohan.poudel.3597',
    linkedInLink: 'https://www.linkedin.com/in/rohan-poudel/'
  },
  {
    name: 'Nikesh Singh',
    imageUrl: '/teams/nikesh-singh.jpg',
    position: 'CFO',
    facebookLink: 'https://www.facebook.com/nikesh.singh.796',
    linkedInLink: 'https://www.linkedin.com/in/nikesh-singh-3a41b0bb/'
  },
  {
    name: 'Saurabh Chalise',
    imageUrl: '/teams/saurabh-chalise.jpg',
    position: 'Chief Project Officer',
    facebookLink: 'https://www.facebook.com/saurabh.chalise',
    linkedInLink: 'https://www.linkedin.com/in/saurabh-chalise-9983461ba/'
  },
  {
    name: 'Bhabishya Bhatt',
    imageUrl: '/teams/bhabishya-bhatt.jpg',
    position: 'Associate CTO',
    facebookLink: 'https://www.facebook.com/lighterharayeko.manxema',
    linkedInLink: 'https://www.linkedin.com/in/bhabishya/'
  }
];

const teamMembers: Omit<PersonInfoProps, 'hideLinks'>[] = [
  {
    name: 'Aashish Shrestha',
    imageUrl: '/teams/aashish-shrestha.png',
    position: 'Graphics Designer'
  },
  {
    name: 'Ankit Poudel',
    imageUrl: '/teams/ankit-poudel.jpg',
    position: 'Full Stack Developer'
  },
  {
    name: 'Bibek Ghimire',
    imageUrl: '/teams/bibek-ghimire.jpg',
    position: 'Flutter Developer'
  },
  {
    name: 'Charchit Dahal',
    imageUrl: '/teams/charchit-dahal.jpg',
    position: 'Full Stack Developer'
  },
  {
    name: 'Kushal Subedi',
    imageUrl: '/teams/kushal-subedi.png',
    position: 'Frontend Developer'
  },
  {
    name: 'Pawan Pandey',
    imageUrl: '/teams/pawan-pandey.jpg',
    position: 'Full Stack Developer'
  },
  {
    name: 'Pragati Shrestha',
    imageUrl: '/teams/pawan-pandey.jpg',
    position: 'Project Manager'
  },
  {
    name: 'Prakash Poudel',
    imageUrl: '/teams/prakash-poudel.jpg',
    position: 'Frontend Developer'
  },
  {
    name: 'Pratikshya Poudel',
    imageUrl: '/teams/pratikshya-poudel.jpg',
    position: 'Backend Developer'
  },
  {
    name: 'Pukar Sharma',
    imageUrl: '/teams/pukar-sharma.jpg',
    position: 'Full Stack Developer'
  },
  {
    name: 'Rahul Raj Yadav',
    imageUrl: '/teams/rahul-raj-yadav.jpg',
    position: 'Backend Developer'
  },
  {
    name: 'Ritesh Bista',
    imageUrl: '/teams/ritesh-bista.png',
    position: 'Frontend Developer'
  },
  {
    name: 'Ritika Bogati',
    imageUrl: '/teams/ritika-bogati.jpg',
    position: 'Content Writer'
  },
  {
    name: 'Sajan Nagarkoti',
    imageUrl: '/teams/sajan-nagarkoti.jpg',
    position: 'Frontend Developer'
  },
  {
    name: 'Silson Sapkota',
    imageUrl: '/teams/silson-sapkota.jpg',
    position: 'Frontend Developer'
  },
  {
    name: 'Smriti Panta',
    imageUrl: '/teams/smriti-panta.jpg',
    position: 'Frontend Developer'
  },
  {
    name: 'Sonam Syangbo',
    imageUrl: '/teams/sonam-syangbo.jpg',
    position: 'UI/UX Designer'
  },
  {
    name: 'Subharaj Bhandari',
    imageUrl: '/teams/subharaj-bhandari.jpg',
    position: 'Backend Developer'
  },
  {
    name: 'Suman Khatri',
    imageUrl: '/teams/suman-khatri.png',
    position: 'Frontend Developer'
  },
  {
    name: 'Suruchi Gautam',
    imageUrl: '/teams/suruchi-gautam.jpg',
    position: 'Sales & Marketing Officer'
  },
  {
    name: 'Tasnuva Ferdush',
    imageUrl: '/teams/tasnuva-ferdush.jpg',
    position: 'Sales & Marketing Officer'
  },
  {
    name: 'Yogesh Lamichhane',
    imageUrl: '/teams/yogesh-lamichhane.jpg',
    position: 'DevOps Engineer'
  }
];

const PersonInfo = ({
  name,
  imageUrl,
  position,
  hideLinks,
  facebookLink,
  linkedInLink,
  animateBorder
}: PersonInfoProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-40 h-40 md:h-52 md:w-52 rounded-full flex overflow-hidden relative ">
        {animateBorder && (
          <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#357D8A_20deg,transparent_240deg)]"></div>
        )}

        <Image
          u
          alt={name}
          src={imageUrl}
          draggable="false"
          layout="fill"
          objectFit="cover"
          className={cn(
            'p-1 z-10 h-full w-full aspect-square rounded-full',
            !animateBorder &&
              'hover:scale-110 transition-transform duration-500'
          )}
        />
      </div>

      <div>
        <h3 className="text-md md:text-xl font-bold text-[#357D8A]">{name}</h3>
        <small className="block font-medium text-sm md:text-base">
          {position}
        </small>

        {hideLinks ? null : (
          <div className="inline-flex items-center gap-4 pt-4 md:pt-6">
            {facebookLink ? (
              <a href={facebookLink} className="group outline-none">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white group-focus-visible:text-black dark:group-focus-visible:text-white transition-colors"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            ) : null}

            {linkedInLink ? (
              <a href={linkedInLink} className="group outline-none">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white group-focus-visible:text-black dark:group-focus-visible:text-white transition-colors"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="fixed inset-0 select-none">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-900 bg-[size:6rem_4rem]
      bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
      dark:bg-[linear-gradient(to_right,rgb(30,41,59)_1px,transparent_1px),linear-gradient(to_bottom,rgb(30,41,59)_1px,transparent_1px)] overflow-auto
       "
      >
        <Navbar className="!bg-transparent" />

        <div className="fixed -z-50 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>

        <div className="container py-8 md:px-20 grid justify-center text-center">
          <div className="space-y-1">
            <h1 className="text-[#357D8A] text-3xl md:text-5xl lg:text-6xl font-bold">
              Meet the Hyperce Team
            </h1>
            <div>
              <h2 className="text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-semibold">
                Discover the tallent and dedication shaping our innovations.
              </h2>
              <h3 className="md:text-md lg:text-lg text-gray-600 dark:text-gray-400 font-medium">
                Welcome to the core of the creativity.
              </h3>
            </div>
          </div>

          <div className="mt-16">
            <h1 className="text-[#357D8A] text-2xl md:text-3xl lg:text-4xl font-semibold">
              Core Team
            </h1>

            <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 py-16">
              {boardOfDirectors.map((bod, idx) => (
                <PersonInfo key={idx} {...bod} animateBorder />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-[#357D8A] text-2xl md:text-3xl lg:text-4xl font-semibold">
              Executive Directors
            </h1>

            <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 py-16">
              {executives.map((executiveMember, idx) => (
                <PersonInfo key={idx} {...executiveMember} />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-[#357D8A] text-2xl md:text-3xl lg:text-4xl font-semibold">
              Team Members
            </h1>

            <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 py-16">
              {teamMembers.map((member, idx) => (
                <PersonInfo key={idx} {...member} hideLinks />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
