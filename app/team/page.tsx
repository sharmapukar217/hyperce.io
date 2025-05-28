import { gql, request } from 'graphql-request';

import { cn } from '@/lib/utils';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

type SocialLinks = {
  github?: string;
  facebook?: string;
  linkedin?: string;
};

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

const PersonInfo = ({
  member,
  hideLinks,
  animateBorder
}: {
  member: Member;
  hideLinks?: boolean;
  animateBorder?: boolean;
}) => {
  const socialLinks = (member.links || []).reduce((acc, link) => {
    if (link.includes('facebook.com')) acc.facebook = link;
    if (link.includes('linkedin.com')) acc.linkedin = link;
    if (link.includes('github.com')) acc.github = link;
    return acc;
  }, {} as SocialLinks);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-40 h-40 md:h-52 md:w-52 rounded-full flex overflow-hidden relative ">
        {animateBorder && (
          <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#357D8A_20deg,transparent_240deg)]"></div>
        )}

        <img
          alt={member.name}
          src={member.asset?.source}
          draggable="false"
          className={cn(
            'p-1 z-10 h-full w-full aspect-square rounded-full object-cover',
            !animateBorder &&
              'hover:scale-110 transition-transform duration-500'
          )}
        />
      </div>

      <div>
        <h3 className="text-md md:text-xl font-bold text-[#357D8A]">
          {member.name}
        </h3>
        <small className="block font-medium text-sm md:text-base">
          {member.role}
        </small>

        {hideLinks ? null : (
          <div className="inline-flex items-center gap-4 pt-4 md:pt-6">
            {socialLinks.facebook ? (
              <a
                href={socialLinks.facebook}
                target="_blank"
                className="group outline-none"
              >
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

            {socialLinks.linkedin ? (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                className="group outline-none"
              >
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

type TeamType = 'Directors' | 'Team Members' | 'Executive Directors';
type Member = {
  id: string;
  name: string;
  role: string;
  position?: number;
  links?: Array<string>;
  asset: { source: string };
};

type TeamsQueryResponse = {
  teams: {
    items: Array<{
      name: TeamType;
      members: Array<Member>;
    }>;
  };
};
const getTeams = async function () {
  const response = await request<TeamsQueryResponse>(
    process.env.NEXT_PUBLIC_BACKEND_URL!,
    gql`
      query Teams {
        teams {
          items {
            id
            name
            members {
              id
              name
              role
              links
              position
              asset {
                source
              }
            }
          }
          totalItems
        }
      }
    `
  );

  const groupedTeams = response.teams.items.reduce(
    (acc, team) => {
      acc[team.name] = team.members;
      return acc;
    },
    {} as Record<TeamType, Member[]>
  );

  return {
    Directors: groupedTeams['Directors'] || [],
    Members: groupedTeams['Team Members'] || [],
    Executives: groupedTeams['Executive Directors'] || []
  };
};

function sortByPosition(arr: Member[]): Member[] {
  const result: Member[] = [];
  const usedIndexes = new Set<number>();
  const positioned: (Member & { position: number })[] = [];
  const unpositioned: Member[] = [];

  // Separate positioned and unpositioned items
  arr.forEach((item) => {
    const pos = Number(item.position);
    if (item.position != null && !isNaN(pos)) {
      positioned.push({ ...item, position: pos });
    } else {
      unpositioned.push(item);
    }
  });

  // Sort positioned items by position
  positioned.sort((a, b) => a.position - b.position);

  // Insert positioned items, using position - 1 as index
  positioned.forEach((item) => {
    let index = item.position - 1;
    while (usedIndexes.has(index)) {
      index++; // shift if index is occupied
    }
    result.splice(index, 0, item);
    usedIndexes.add(index);
  });

  // Insert unpositioned items in first available free slots
  let insertIndex = 0;
  unpositioned.forEach((item) => {
    while (usedIndexes.has(insertIndex)) {
      insertIndex++;
    }
    result.splice(insertIndex, 0, item);
    usedIndexes.add(insertIndex);
  });

  return result;
}

export default async function Page() {
  const teams = await getTeams();

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
              Directors
            </h1>

            <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 py-16">
              {sortByPosition(teams.Directors).map((bod, idx) => (
                <PersonInfo key={idx} member={bod} animateBorder />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-[#357D8A] text-2xl md:text-3xl lg:text-4xl font-semibold">
              Executive Directors
            </h1>

            <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 py-16">
              {sortByPosition(teams.Executives).map((executiveMember, idx) => (
                <PersonInfo key={idx} member={executiveMember} />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-[#357D8A] text-2xl md:text-3xl lg:text-4xl font-semibold">
              Team Members
            </h1>

            <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 py-16">
              {sortByPosition(teams.Members).map((member, idx) => (
                <PersonInfo key={idx} member={member} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
