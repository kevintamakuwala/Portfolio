import Image from 'next/image';
import Link from 'next/link';
import { Icons } from './Icons';
import { ButtonSecondary, ButtonPrimary } from '@/components/Button';
import { type Achievement } from '@/config';
import { parseISO } from '@/lib/utils';
import { DescriptionRenderer } from './DescriptionRenderer';

export interface AchievementCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div
      key={achievement.name}
      className="mb-16 overflow-hidden duration-200 motion-reduce:transition-none"
    >
      <h3 className="mb-2 text-2xl font-bold tracking-[-0.03em]">
        {achievement.name}
      </h3>
      {achievement.started && (
        <time
          className="my-2 block text-sm font-normal leading-none text-neutral-500 dark:text-neutral-500"
          dateTime={new Date(achievement.started).toUTCString()}
        >
          {parseISO(achievement.started)} -{' '}
          {achievement.ended ? parseISO(achievement.ended) : 'Present'}
        </time>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {achievement.technologies.map((tech) => (
          <div
            key={`project-tech-${tech.name}`}
            className="flex cursor-default items-center gap-2 rounded-md border border-black/10 px-2 py-1 font-mono text-sm font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={20}
              height={20}
              className="size-5"
            />{' '}
            {tech.name}
          </div>
        ))}
      </div>
      <DescriptionRenderer description={achievement.description} />

      {achievement.images &&
        achievement.images.length > 0 &&
        achievement.images.map((image) => (
          <Link
            key={`project-image-${image.alt}-${image.height}`}
            href={achievement.website || achievement.github || image.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="aspect-video cursor-zoom-in rounded-xl border border-black/10 duration-200 hover:opacity-70 dark:border-neutral-800"
            />
          </Link>
        ))}

      <div className="mt-6 flex flex-wrap gap-4">
        {achievement.website && (
          <ButtonPrimary href={achievement.website} rel="noopener noreferrer">
            <Icons.Link className="mr-2 size-5 stroke-2" />
            Visit website
          </ButtonPrimary>
        )}
        {achievement.github && (
          <ButtonSecondary href={achievement.github} rel="noopener noreferrer">
            <Icons.Github className="mr-2 size-5 fill-neutral-700 dark:fill-white" />
            View on Github
          </ButtonSecondary>
        )}
      </div>
    </div>
  );
}
