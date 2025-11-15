import { Fragment } from 'react';
import { Description, Header1 } from '@/components/Headers';
import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences } from '@/config';

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
         
        </Fragment>
      ))}
    </div>
  );
}
