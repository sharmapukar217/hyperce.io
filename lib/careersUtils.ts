import fs from 'fs';
import { join } from 'path';
import html from 'remark-html';
import { remark } from 'remark';
import matter from 'gray-matter';

export type Career = {
  deadline: Date;
  draft?: boolean;

  slug: string;
  title: string;
  content: string;

  totalVacancies?: number;
  location: 'remote' | 'onsite' | 'unknown';
  type: 'part-time' | 'full-time' | 'internship';
};

const careersDirectory = join(process.cwd(), 'content/careers');

function parseDate(dateString = '') {
  let cleanedString = dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');
  const hasTime = /\d{1,2}:\d{2}/.test(cleanedString);

  if (hasTime === false) cleanedString += ' 00:00';
  return new Date(cleanedString);
}

export function getCareersSlugs() {
  return fs.readdirSync(careersDirectory).map((filename) => {
    return filename.replace(/^\d+-/, '').replace(/\.md$/, '');
  });
}

export async function getCareersBySlug(slug: string) {
  const files = fs.readdirSync(careersDirectory);

  const matchingFile = files.find((filename) => {
    return filename.replace(/^\d+-/, '').replace(/\.md$/, '') === slug;
  });

  if (!matchingFile) return null;

  const fullPath = join(careersDirectory, matchingFile);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  if (data.draft) return null;

  return {
    ...data,
    deadline: parseDate(data.deadline),
    slug: slug.replace(/^\d+-/, '').replace(/\.md$/, ''),
    content: (await remark().use(html).process(content)).value
  } as Career;
}

export async function getAllCareers(): Promise<Career[]> {
  const careers: Career[] = [];
  const slugs = getCareersSlugs();

  for (const slug of slugs) {
    const career = await getCareersBySlug(slug);
    if (career && !career.draft) careers.push(career);
  }

  return careers;
}
