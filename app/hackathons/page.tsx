import { Description, Header1 } from '@/components/Headers';
import { Fragment } from 'react';
import { ButtonPrimary } from '@/components/Button';
import { Icons } from '@/components/Icons';
import { AchievementCard } from '@/components/AchievementCard';
import { hackathonAchievements } from '@/config';
import { meta } from '@/config';
export const metadata = {
  title: 'Hackathons',
  description:
    'Explore some of my finest photos, captured during my travels and adventures.',
};

export default function Page() {
  return (
    <div className="mb-16 mt-20 flex flex-col items-start justify-center">
      <Header1>Hackathons</Header1>
      <Description className="mb-16">
        Here are my hackathon projects, showcasing my journey of collaborating
        with a team to develop innovative solutions for real-world challenges.
        For more details, feel free to explore my GitHub profile.
      </Description>

      {hackathonAchievements.map((achievement) => (
        <Fragment key={`project-${achievement.name}`}>
          <AchievementCard achievement={achievement} className="mb-6" />
          {achievement !==
            hackathonAchievements[hackathonAchievements.length - 1] && (
            <hr className="mx-auto mb-16 w-full max-w-56 border border-neutral-200 dark:border-neutral-800" />
          )}
        </Fragment>
      ))}

      <Description>Want to learn more? Check out my Resume.</Description>

      <ButtonPrimary
        href="/Kevin_Tamakuwala_Public_Resume.pdf"
        download="Kevin_Tamakuwala_Public_Resume"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4"
      >
        <Icons.Resume className="mr-2 size-5 fill-white stroke-2" />
        Download Resume
      </ButtonPrimary>
    </div>
  );
}
