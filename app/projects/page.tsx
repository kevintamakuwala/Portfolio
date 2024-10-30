import { Fragment } from 'react';
import { ButtonPrimary } from '@/components/Button';
import { Description, Header1 } from '@/components/Headers';
import { Icons } from '@/components/Icons';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/config';
import { meta } from '@/config';

export const metadata = {
  title: 'My Projects',
  description: 'Explore some of my latest projects.',
};

export default function Page() {
  return (
    <div className="mb-16 mt-20 flex flex-col items-start justify-center">
      <Header1>My Projects</Header1>
      <Description className="mb-16">
        Here are some of my best projects, where I've applied my skills to
        create effective and innovative solutions. Below are some of my best
        projects; you can find more on my GitHub profile.
      </Description>

      {projects.map((project) => (
        <Fragment key={`project-${project.name}`}>
          <ProjectCard project={project} className="mb-6" />
          {project !== projects[projects.length - 1] && (
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
