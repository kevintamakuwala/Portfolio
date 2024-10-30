import 'server-only';
import { globby } from 'globby';

type Photo = { id: number; path: string; description: string };

// *************** cache to store photos ***************
const cache: Map<string, Photo | Photo[]> = new Map();

export const getCompetitiveProgrammingAchievements = async (): Promise<Photo[] | null> => {
  const files = await globby(
    'public/assets/competitive-programming/*.{jpg,png,jpeg}'
  );
  const photos: Photo[] = [];

  const descriptions = [
    'Achieved 4 stars (1800+) on CodeChef.',
    'Secured the Knight Badge on LeetCode.',
    'Achieved a global rank of 583 in the LeetCode Weekly Contest.',
    'Reached the Specialist rank (1400+) on Codeforces.',
    'Achieved a global rank of 154 in CodeChef Starters.',
    '2nd Runner-Up in the Coding Ninjas Contest organized by CSI DDU.',
  ];

  for (const file of files) {
    if (cache.has(file)) {
      photos.push(cache.get(file) as Photo);
      continue;
    }
    const name = parseInt(file.split('/').slice(-1)[0].split('.')[0]);
    const path = file.split('/').slice(1).join('/');

    const description = descriptions[name - 1] || 'Description not available';
    const photo: Photo = { id: name, path: '/' + path, description };
    photos.push(photo);
    cache.set(file, photo);
  }

  photos.sort((a, b) => a.id - b.id);
  return photos;
};
