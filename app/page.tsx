import Image from 'next/image';
import Link from 'next/link';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
} from '../components/Button';
import { Icons } from '../components/Icons';
import { ContactForm } from '@/components/client/ContactForm';
import { Description, Header2 } from '@/components/Headers';
import { ProjectCard } from '@/components/ProjectCard';
import { experiences, projects } from '@/config';
import { header, contact, meta, technologies } from '@/config';
import { GetUserData, getTotalContributionsForYears } from '@/lib/graphql';
import { ConvertNumber } from '@/lib/utils';
import { List } from 'lucide-react';
import { ExperienceCard } from '@/components/ExperienceCard';
import { getCompetitiveProgrammingAchievements } from '@/lib/getCompetitiveProgrammingAchievements';
import Page from './competitive-programming/page';

export const metadata = {
  title: header.title,
  description: meta.shortDescription,
};
const SocialLink = ({ href, Icon }) => (
  <Link href={href}>
    <div className="ml-4 flex size-10 shrink-0 items-center justify-center rounded-md bg-black/10 text-white dark:bg-white/10 dark:text-neutral-800 sm:size-12">
      <Icon className="inline size-6 fill-black stroke-2 duration-200 motion-reduce:transition-none dark:fill-white/70" />
    </div>
  </Link>
);
const GitHubStatLink = ({ href, Icon, label }) => (
  <Link
    target="_blank"
    href={href}
    className="flex items-center gap-2 duration-200 hover:text-neutral-800 motion-reduce:transition-none dark:hover:text-white"
  >
    <Icon className="size-4 stroke-2" /> <span>{label}</span>
  </Link>
);
export default async function HomePage() {
  const userData = await GetUserData();
  const contributions = await getTotalContributionsForYears();

  return (
    <>
      {/* Intro */}
      <section className="mb-16 mt-20">
        <h1 className="dark:color-black relative m-0 text-4xl font-black tracking-[-0.03em] text-neutral-800 duration-300 dark:text-white md:text-left">
          Hey, I'm {header.title}
        </h1>
        <p className="mt-2 text-lg text-neutral-700 dark:text-neutral-400">
          {header.description}
        </p>
        <div className="mt-9 flex flex-row flex-wrap gap-4">
          <ButtonPrimary
            href="/Kevin_Tamakuwala_Public_Resume.pdf"
            download="Kevin_Tamakuwala_Public_Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.Resume className="mr-2 size-5 fill-white stroke-2" />
            Download Resume
          </ButtonPrimary>
          <ButtonSecondary href="/#contact">Contact me</ButtonSecondary>
        </div>
      </section>

      {/* Socials */}
      <section className="mb-16 flex flex-wrap justify-start gap-4 text-center text-xs font-semibold text-neutral-800/70 dark:text-white/70">
        <SocialLink
          href={`https://www.linkedin.com/in/${meta.accounts.linkedin.username}`}
          Icon={Icons.Linkedin}
        />
        <SocialLink
          href={`https://codeforces.com/profile/${meta.accounts.codeforces.username}`}
          Icon={Icons.Codeforces}
        />
        <SocialLink
          href={`https://codechef.com/users/${meta.accounts.codechef.username}`}
          Icon={Icons.Codechef}
        />
        <SocialLink
          href={`https://leetcode.com/u/${meta.accounts.leetcode.username}`}
          Icon={Icons.Leetcode}
        />
        <SocialLink
          href={`https://github.com/${meta.accounts.github.username}`}
          Icon={Icons.Github}
        />
        <SocialLink
          href={`https://youtube.com/${meta.accounts.youtube.username}`}
          Icon={Icons.Youtube}
        />
        <SocialLink
          href={`https://x.com/${meta.accounts.twitter.username}`}
          Icon={Icons.Twitter}
        />
        <SocialLink
          href={`https://instagram.com/${meta.accounts.instagram.username}`}
          Icon={Icons.Instagram}
        />
      </section>

      {/* Github Stats */}
      <section className="mb-16 flex flex-wrap justify-around gap-4 text-center text-xs font-semibold text-neutral-800/70 dark:text-white/70">
        <GitHubStatLink
          href={`https://github.com/${meta.accounts.github.username}`}
          Icon={Icons.Star}
          label={`${userData && ConvertNumber(userData.userStars)} stars`}
        />
        <GitHubStatLink
          href={`https://github.com/${meta.accounts.github.username}`}
          Icon={Icons.GitGraph}
          label={`${userData && ConvertNumber(contributions.total)} commits`}
        />
        <GitHubStatLink
          href={`https://github.com/${meta.accounts.github.username}`}
          Icon={Icons.GitFork}
          label={`${userData && ConvertNumber(userData.userForks)} repositories forks`}
        />
        <GitHubStatLink
          href={`https://github.com/${meta.accounts.github.username}?tab=followers`}
          Icon={Icons.Users}
          label={`${userData && ConvertNumber(userData.userFollowers)} Github followers`}
        />
      </section>

      {/*  Experience  */}
      <section className="mt-8 mb-16">
        <Header2 id="projects">Recent Experience</Header2>
        <Description>
          Discover some of my most recent professional experiences below.
        </Description>

        <ul className="mt-6 list-disc pl-5">
          {' '}
          {experiences.slice(0, 2).map((experience) => (
            <li key={`experience-${experience.name}`}>
              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ul>

        <ButtonSecondary href="/experience">
          View All Experiences
        </ButtonSecondary>
      </section>
      <hr className=" w-full  border border-neutral-200 dark:border-neutral-800" />

      {/* Competitive Programming */}
      <section className="mb-16">
        <Page />
      </section>
      <hr className=" w-full  border border-neutral-200 dark:border-neutral-800" />

      {/* Projects */}
      <section className="mt-8 mb-16">
        <Header2 id="projects">Recent Projects</Header2>
        <Description>
          Explore some of my recent projects below. For more, visit my GitHub
          profile.
        </Description>

        <ul className="mt-6 list-disc pl-5">
          {' '}
          {projects.slice(0, 2).map((project) => (
            <li key={`project-${project.name}`}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <ButtonSecondary href="/projects">View All Projects</ButtonSecondary>
      </section>
      <hr className=" w-full  border border-neutral-200 dark:border-neutral-800" />

      {/* Technologies I use */}
      <section className="mt-8 my-6 mb-16">
        <Header2 id="tech">Technologies I use</Header2>
        <Description>
          Over the years, I have worked with a variety of technologies. Here are
          some of the technologies I have experience with:
        </Description>
        <div className="mt-4 flex flex-wrap gap-4">
          {technologies.map((tech) => {
            return (
              <Link
                href={tech.link || '#'}
                key={`tech-link-${tech.name}`}
                className="flex cursor-pointer items-center gap-2 rounded-md border border-black/10 px-2 py-1 font-mono font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="size-5 rounded"
                />{' '}
                {tech.name}
              </Link>
            );
          })}
        </div>
        <p className="mt-4 text-center text-neutral-700 dark:text-neutral-400">
          ...and many more!
        </p>
      </section>
      <hr className=" w-full  border border-neutral-200 dark:border-neutral-800" />
      {/* Contact */}
      <section className="mt-8 mb-12">
        <Header2 id="contact">Contact me</Header2>
        <Description>
          I'm always eager to explore new opportunities and take on exciting
          projects. If you have a project in mind, or just want to say hi, feel
          free to send me a message.
        </Description>

        <div className="my-6 flex w-full rounded-md border border-black/15 bg-white p-5 dark:border-neutral-800 dark:bg-[#161617]">
          <ContactForm />
        </div>
        <Description>Or contact me with...</Description>
        <div className="mt-4 flex flex-wrap gap-4">
          {contact.links.map((element) => (
            <ButtonTertiary
              href={element.href}
              key={`contact-link-${element.href}`}
              className="gap-2"
            >
              {element.icon} {element.title}
            </ButtonTertiary>
          ))}
        </div>
      </section>
    </>
  );
}
