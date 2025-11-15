import { Description, Header1 } from '@/components/Headers';
import Link from 'next/link';
import Image from 'next/image';
import { getCompetitiveProgrammingAchievements } from '@/lib/getCompetitiveProgrammingAchievements';

export const metadata = {
  title: 'Competitive Programming',
  description:
    "Let's walk through my journey of milestones in Competitive Programming.",
};

export default async function Page() {
  const photos = await getCompetitiveProgrammingAchievements();
  return (
    <div className="mb-16 mt-8 flex flex-col items-start justify-center">
      <Header1>Competitive Programming</Header1>
      <Description>
        Let's walk through my journey of milestones in Competitive Programming.
      </Description>
      <div className="mt-12 w-full columns-2 gap-6 md:columns-2xs">
        {!photos ? (
          <p className="mb-4 text-red-400">No images found!</p>
        ) : (
          photos.map((result) => (
            <div key={`photo-${result.path}`} className="mb-5">
              <Link href={result.path} target="_blank">
                <Image
                  className="cursor-zoom-in rounded-lg bg-neutral-200 blur-0 duration-200 hover:opacity-70 dark:bg-neutral-200/15"
                  src={result.path}
                  alt={
                    "Kevin Tamakuwala's Competitive Programming Achievements"
                  }
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                />
              </Link>
              <p className="mt-2 text-sm text-gray-600">{result.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
