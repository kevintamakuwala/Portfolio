import { Fragment } from 'react';
import { ButtonPrimary } from '@/components/Button';
import { Description, Header1 } from '@/components/Headers';
import { Icons } from '@/components/Icons';
import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences } from '@/config';
import { meta } from '@/config';

export const metadata = {
  title: 'My Experience',
  description: 'Explore my Work Experience.',
};

export default function Page() {
  return (
    <div className="mb-16 mt-20 flex flex-col items-start justify-center">
      <Header1>My Experience</Header1>
      <Description className="mb-16">
        Here's where I've put my skills to work. From tackling projects to
        instructing DSA, each role has added a new layer to my expertise—and a
        few stories to tell!
      </Description>

      {experiences.map((experience) => (
        <Fragment key={`project-${experience.name}`}>
          <ExperienceCard experience={experience} className="mb-6" />
          {experience !== experience[experiences.length - 1] && (
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
