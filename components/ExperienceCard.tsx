import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icons";
import { ButtonSecondary, ButtonPrimary } from "@/components/Button";
import { type Experience } from "@/config";
import { parseISO } from "@/lib/utils";
import { DescriptionRenderer } from "./DescriptionRenderer";

export interface ExperienceCardProps extends React.HTMLAttributes<HTMLDivElement> {
 experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
 return (
  <div key={experience.name} className="mb-16 overflow-hidden duration-200">
   <div className="mb-2 flex items-center gap-3">
    <Image src={experience?.logo?.src} alt={`${experience.name} Logo`} width={40} height={40} className="rounded-md" />
    <h3 className="text-2xl font-bold tracking-[-0.03em]">{experience.name}</h3>
   </div>
   {experience.started && (
    <time className="my-2 block text-sm font-normal leading-none text-neutral-500 dark:text-neutral-500" dateTime={new Date(experience.started).toUTCString()}>
     {parseISO(experience.started)} - {experience.ended ? parseISO(experience.ended) : "Present"}
    </time>
   )}
   <div className="mt-4 flex flex-wrap gap-2">
    {experience.technologies.map((tech) => (
     <div key={`experience-tech-${tech.name}`} className="flex cursor-default items-center gap-2 rounded-md border border-black/10 px-2 py-1 font-mono text-sm font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5">
      <Image src={tech.icon} alt={tech.name} width={20} height={20} className="size-5" /> {tech.name}
     </div>
    ))}
   </div>
   <DescriptionRenderer description={experience.description} />

   {experience.images &&
    experience.images.length > 0 &&
    experience.images.map((image) => (
     <Link key={`experience-image-${image.alt}-${image.height}`} href={experience.website || experience.github || image.src} target="_blank" rel="noopener noreferrer">
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="aspect-video cursor-zoom-in rounded-xl border border-black/10 duration-200 hover:opacity-70 dark:border-neutral-800" />
     </Link>
    ))}

   <div className="mt-6 flex flex-wrap gap-4">
    {experience.website && (
     <ButtonPrimary href={experience.website} target="_blank" rel="noopener noreferrer">
      <Icons.Link className="mr-2 size-5 stroke-2" />
      Visit website
     </ButtonPrimary>
    )}
    {experience.github && (
     <ButtonSecondary href={experience.github} target="_blank" rel="noopener noreferrer">
      <Icons.Github className="mr-2 size-5 fill-white stroke-2" />
      View on Github
     </ButtonSecondary>
    )}
   </div>
  </div>
 );
}
