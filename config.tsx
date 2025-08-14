export const meta = {
  title: 'Kevin Tamakuwala',
  description:
    "I'm a Software Engineer based in India (IN), passionate about building scalable web applications and solving complex problems. I am Specialist @Codeforces, 4 ⭐ on @Codechef, Knight @Leetcode",
  shortDescription: 'Software Engineer, Competitive Programmer and Youtuber',
  url: 'http://localhost:3000',
  accounts: {
    github: {
      username: 'kevintamakuwala',
      repo: 'kevintamakuwala.github.io',
    },
    leetcode: {
      username: 'kevint16',
    },
    codechef: {
      username: 'kevin_t16',
    },
    codeforces: {
      username: 'kevintamakuwala16',
    },
    linkedin: {
      username: 'kevintamakuwala',
    },
    twitter: {
      username: '@kev_t16',
    },
    discord: {
      username: '@majonez.exe',
      invite: 'https://google.com/com',
      id: '5441647293549772',
    },
    instagram: {
      username: 'kev.t16',
    },
    youtube: {
      username: '@kevintamakuwala',
    },
  },
};

export const header = {
  title: 'Kevin Tamakuwala',
  subtitle: 'Software Engineer and Competitive Programmer',
  description: meta.description,
  code: {
    user: 'kevintamakuwala',
  },
};

export type Project = {
  name: string;
  started: string;
  ended?: string;
  description: string | string[];
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  technologies: {
    name: string;
    icon: string;
  }[];
  website: string | null;
  github: string | null;
};

export const projects = [
  {
    name: 'ByteBattles - Competitive Programming Platform',
    started: '2024-01-01T16:59:08Z',
    ended: '2024-02-20',
    description:
      'ByteBattles: Solve, compete, and get personalized problem recommendations based on topic accuracy. Admins manage testcases, problems and contests.',
    images: [
      {
        src: '/assets/projects/bytebattles/image-01.png',
        alt: 'ByteBattles main page screenshot',
        width: 1920,
        height: 1080,
      },
    ],
    technologies: [
      {
        name: 'Java',
        icon: '/assets/tech/java.svg',
      },
      {
        name: 'Springboot',
        icon: '/assets/tech/springboot.svg',
      },

      {
        name: 'AWS',
        icon: '/assets/tech/aws.svg',
      },
      {
        name: 'Nginx',
        icon: '/assets/tech/nginx.svg',
      },
      {
        name: 'React.js',
        icon: '/assets/tech/react.svg',
      },
    ],
    website: 'https://bytebattles.vercel.app',
    github: 'https://github.com/kevintamakuwala/bytebattles',
  },
  {
    name: 'Anubhav बांटें - DuHacks3.0 Hackathon (11th  rank)',
    started: '2024-02-23',
    ended: '2024-02-24',
    description: `Built at Duhacks3.0 "Anubhav बांटें" provides a platform where students can learn from the experiences of alumni who have successfully navigated through placement interviews.`,
    images: [
      {
        src: '/assets/projects/anubhavbaatein/image-01.png',
        alt: 'Anubhav बांटें main page screenshot',
        width: 1920,
        height: 1080,
      },
    ],
    technologies: [
      {
        name: 'Java',
        icon: '/assets/tech/java.svg',
      },
      {
        name: 'Springboot',
        icon: '/assets/tech/springboot.svg',
      },

      {
        name: 'AWS',
        icon: '/assets/tech/aws.svg',
      },
      {
        name: 'Nginx',
        icon: '/assets/tech/nginx.svg',
      },
      {
        name: 'React.js',
        icon: '/assets/tech/react.svg',
      },
    ],
    website: 'https://anubhav-baatein.vercel.app/',
    github: 'https://github.com/kevintamakuwala/Duhacks3.0-AnubhavBaatein',
  },
  {
    name: 'Faculty of Technology - Backend',
    description: [
      'Developed a platform for HoD to monitor faculties, labs, and classrooms with role-based access control using Spring Security.',
      'Documented APIs with Swagger OpenAPI for better developer experience.',
    ],
    images: [
      {
        src: '/assets/projects/fot/image-01.png',
        alt: 'Faculty of Technology - Backend main image',
        width: 1920,
        height: 1080,
      },
    ],
    technologies: [
      {
        name: 'Java',
        icon: '/assets/tech/java.svg',
      },
      {
        name: 'Springboot',
        icon: '/assets/tech/springboot.svg',
      },

      {
        name: 'Spring Security',
        icon: '/assets/tech/springboot.svg',
      },
    ],
    website: 'https://anubhav-baatein.vercel.app/',
    github: 'https://github.com/kevintamakuwala/Duhacks3.0-AnubhavBaatein',
  },
] as Project[];

export type Experience = {
  name: string;
  started: string;
  ended?: string;
  description: string | string[];
  logo: { src: string; alt: string; width: number; height: number };
  images?:
    | {
        src: string;
        //  alt: string;
        //  width: number;
        //  height: number;
      }[]
    | [];
  technologies: {
    name: string;
    icon: string;
  }[];
  website: string | null;
  target?: string | null;
  github?: string | null;
};

export const experiences = [
  {
    name: 'SDE 1 - Pirimid Fintech',
    started: '2025-04-11',
    logo: { src: '/assets/experience/pirimid/logo-01.png' },

    description: [
      'Strengthened authentication by implementing JWT token invalidation and refresh token flows in Spring Boot, preventing reuse of expired tokens and reducing unauthorized access attempts.',
      'Engineered secure SMS provider integration in Spring Boot, achieving 99% message delivery rate while ensuring international compliance with telecom and data-protection regulations.',
      'Optimized API performance with Redis, reducing database queries by 60% and improving response time by 200ms.',
      'Reduced time-to-market by 50% by building a cross-platform mobile app from scratch using Flutter, delivering Android, iOS, and Web support from a single codebase.',
      'Enhanced application security through Jailbreak/Root detection in Flutter, blocking compromised devices.',
      'Enabled monetization by integrating in-app purchases for Android and iOS in Flutter, delivering seamless payment flow with less than 2% transaction failure rate.',
    ],

    technologies: [
      {
        name: 'Flutter',
        icon: '/assets/tech/flutter.svg',
      },
      {
        name: 'Java',
        icon: '/assets/tech/java.svg',
      },
      {
        name: 'Spring Boot',
        icon: '/assets/tech/springboot.svg',
      },
      {
        name: 'React.js',
        icon: '/assets/tech/react.svg',
      },

      {
        name: 'AWS',
        icon: '/assets/tech/aws.svg',
      },
      {
        name: 'PostgreSql',
        icon: '/assets/tech/posgresql.svg',
      },
    ],
    website: 'https://www.pirimidtech.com',
  },
  {
    name: 'SDE Intern - Pirimid Fintech',
    started: '2025-01-06',
    ended: '2025-04-10',
    logo: { src: '/assets/experience/pirimid/logo-01.png' },

    description: [
      'Designed Early Warning System for bank loans, improving disbursement accuracy and default analysis.',
      'Upgraded Rule Engine with nested rules for flexible loan risk evaluation.',
      'Built Spring Boot microservices with Spring Cloud API Gateway, Keycloak based authentication and rate limiting.',
    ],

    technologies: [
      {
        name: 'Java',
        icon: '/assets/tech/java.svg',
      },
      {
        name: 'Spring Boot',
        icon: '/assets/tech/springboot.svg',
      },
      {
        name: 'React.js',
        icon: '/assets/tech/react.svg',
      },
      {
        name: 'Flutter',
        icon: '/assets/tech/flutter.svg',
      },
      {
        name: 'AWS',
        icon: '/assets/tech/aws.svg',
      },
      {
        name: 'PostgreSql',
        icon: '/assets/tech/posgresql.svg',
      },
    ],
    website: 'https://www.pirimidtech.com',
  },
  {
    name: 'DSA Tutor & Problem Setter - Decrypters Competitive Programming Club',
    started: '2023-07-03',
    ended: '2023-10-07',
    logo: { src: '/assets/experience/decrypters/logo-01.jpeg' },

    description: [
      'Contributed to the programming community by conducting workshops and mentoring fellow programmers.',
      'Conducted a "Recursion and Backtracking" masterclass and mentored 50+ competitive programming enthusiasts.',
      'Set problems for coding contests along with arranging test cases.',
    ],
    technologies: [
      {
        name: 'C++',
        icon: '/assets/tech/cpp.svg',
      },
      {
        name: 'Java',
        icon: '/assets/tech/java.svg',
      },
    ],
    website: 'https://www.linkedin.com/company/decrypters/',
  },
  {
    name: 'DSA Educator - Youtube',
    started: '2024-09-13',
    logo: { src: '/assets/experience/youtube/logo-01.svg' },
    description: [
      'Teach Data Structures and Algorithms with simple explanations and easy-to-follow examples.',
      'Share knowledge and help others understand tricky topics in programming.',
      'Make complex ideas clear and accessible so viewers can learn and grow their coding skills confidently.',
    ],
    technologies: [
      {
        name: 'C++',
        icon: '/assets/tech/cpp.svg',
      },
      {
        name: 'Java',
        icon: '/assets/tech/java.svg',
      },
    ],
    website: `https://youtube.com/${meta.accounts.youtube.username}`,
  },
] as Experience[];

export const nav = {
  main: [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '/projects/',
      title: 'Projects',
    },
    {
      href: '/experience/',
      title: 'Experience',
    },
  ],
  // Only for mobile navigation, will be merged with the main navigation
  mobile: [
    {
      title: 'Hackathons',
      href: '/hackathons',
    },
    {
      title: 'Competitive Programming',
      href: '/competitive-programming/',
    },
  ],
};

export type Achievement = {
  name: string;
  started: string;
  ended?: string;
  description: string | string[];
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  technologies: {
    name: string;
    icon: string;
  }[];
  website: string | null;
  github: string | null;
};

export const hackathonAchievements = [
  {
    name: 'FarMart - DuHacks 2.0 (8th Rank)',
    started: '2023-02-18',
    ended: '2023-02-19/',
    description: [
      'FarMart connects farmers with customers seeking fresh, chemical-free produce.',
      'Support sustainable farming by providing fair prices and workforce solutions.',
      'Offer a wide range of farm-fresh products, from fruits and vegetables to dairy and meats.',
    ],
    technologies: [
      {
        name: 'PHP',
        icon: '/assets/tech/php.svg',
      },
      {
        name: 'Javascript',
        icon: '/assets/tech/javascript.svg',
      },
      {
        name: 'CSS',
        icon: '/assets/tech/css.svg',
      },
      {
        name: 'PostgreSql',
        icon: '/assets/tech/posgresql.svg',
      },
    ],
    github: 'https://github.com/kevintamakuwala/DUHACKS2.0/',
  },
  {
    name: 'Anubhav बांटें - DuHacks3.0 Hackathon (11th rank)',
    started: '2024-02-23',
    ended: '2024-02-24',
    description: [
      'Built at Duhacks3.0 "Anubhav बांटें" provides a platform where students can learn from the experiences of alumni.',
      'Help students navigate through placement interviews successfully.',
      'Connect current students with successful alumni for mentorship and guidance.',
    ],
    technologies: [
      {
        name: 'Java',
        icon: '/assets/tech/java.svg',
      },
      {
        name: 'Springboot',
        icon: '/assets/tech/springboot.svg',
      },

      {
        name: 'AWS',
        icon: '/assets/tech/aws.svg',
      },
      {
        name: 'Nginx',
        icon: '/assets/tech/nginx.svg',
      },
      {
        name: 'React.js',
        icon: '/assets/tech/react.svg',
      },
    ],
    website: 'https://anubhav-baatein.vercel.app/',
    github: 'https://github.com/kevintamakuwala/Duhacks3.0-AnubhavBaatein',
  },
  {
    name: 'Acehacks 3.0 - Participant',
    started: '2024-04-06',
    ended: '2024-04-07',
    description: [
      'WisNet is a collaborative platform tackling societal challenges by harnessing the collective wisdom of admins and users.',
      'Admins post unsolved problems while users contribute suggestions and engage in discussions.',
      'Foster community-driven problem-solving and knowledge sharing.',
    ],
    technologies: [
      {
        name: 'Java',
        icon: '/assets/tech/java.svg',
      },
      {
        name: 'Springboot',
        icon: '/assets/tech/springboot.svg',
      },
      {
        name: 'React.js',
        icon: '/assets/tech/react.svg',
      },
    ],
    github: 'https://github.com/kevintamakuwala/Acehacks3.0-WiseNet',
  },
] as Achievement[];

export const CPAchievements = [
  {
    name: 'Trakky Services - SDE Intern',
    started: '2023-05-01T16:59:08Z',
    ended: '2023-07-26',
    description: [
      'Developed the entire user and admin frontend using ReactJs, CSS, Redux, and Material-UI.',
      'Rendered API calls from the backend server, making it dynamic.',
      'Maintained the highest quality of code and worked on various needs of the employer.',
      'Interacted with clients and solved numerous issues regarding user experience and interactivity.',
    ],
    technologies: [
      {
        name: 'React.js',
        icon: '/assets/tech/react.svg',
      },
      {
        name: 'Redux',
        icon: '/assets/tech/redux.svg',
      },
      {
        name: 'PostgreSql',
        icon: '/assets/tech/posgresql.svg',
      },

      {
        name: 'TailwindCSS',
        icon: '/assets/tech/tailwindcss.svg',
      },
    ],
    website: 'https://trakky.in',
  },
  {
    name: 'DSA Tutor & Problem Setter - Decrypters Competitive Programming Club',
    started: '2023-07-03',
    ended: '2023-10-07',
    description: [
      'Contributed to the programming community by conducting workshops and mentoring fellow programmers.',
      'Conducted a "Recursion and Backtracking" masterclass and mentored 50+ competitive programming enthusiasts.',
      'Set problems for coding contests along with arranging test cases.',
    ],
    technologies: [
      {
        name: 'C++',
        icon: '/assets/tech/cpp.svg',
      },
      {
        name: 'Java',
        icon: '/assets/tech/java.svg',
      },
    ],
    website: 'https://www.linkedin.com/company/decrypters/',
  },
  {
    name: 'DSA Educator - Youtube',
    started: '2024-09-13',
    description: [
      'Teach Data Structures and Algorithms with simple explanations and easy-to-follow examples.',
      'Share knowledge and help others understand tricky topics in programming.',
      'Make complex ideas clear and accessible so viewers can learn and grow their coding skills confidently.',
    ],
    technologies: [
      {
        name: 'C++',
        icon: '/assets/tech/cpp.svg',
      },
      {
        name: 'Java',
        icon: '/assets/tech/java.svg',
      },
    ],
    website: `https://youtube.com/${meta.accounts.youtube.username}`,
  },
] as Achievement[];

export const contact = {
  links: [
    {
      href: 'mailto:kevintamakuwala16@gmail.com',
      title: 'Email',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 duration-200 motion-reduce:transition-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      ),
    },
    {
      href: `https://www.linkedin.com/in/${meta.accounts.linkedin.username}`,
      title: 'Linkedin',
      icon: (
        <svg
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          viewBox="0 0 24 24"
          id="linkedIn"
        >
          <g fill="#0077b5">
            <path d="M23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801zM.396 7.977h4.976v16.023h-4.976zM2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"></path>
          </g>
        </svg>
      ),
    },
    {
      href: `https://x.com/${meta.accounts.twitter.username}`,
      title: 'Twitter / X',
      icon: (
        <svg
          className="size-5 fill-black duration-200 motion-reduce:transition-none dark:fill-white"
          fill="currentColor"
          height="16"
          viewBox="0 0 22 20"
        >
          <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"></path>
        </svg>
      ),
    },
    {
      href: `https://www.instagram.com/${meta.accounts.instagram.username}/`,
      title: 'Instagram',
      icon: (
        <svg
          fill="none"
          className="size-5"
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#g)">
            <path
              d="m11.001 0c-2.9874 0-3.3624 0.013063-4.5357 0.066458-1.171 0.053625-1.9704 0.23902-2.6698 0.51104-0.72349 0.28096-1.3372 0.65679-1.9486 1.2684-0.61188 0.61141-0.98771 1.2251-1.2696 1.9484-0.27271 0.69965-0.45834 1.4992-0.51105 2.6698-0.052251 1.1733-0.066001 1.5485-0.066001 4.5359 0 2.9874 0.013292 3.3612 0.066459 4.5345 0.053855 1.1711 0.23925 1.9704 0.51105 2.6698 0.28119 0.7235 0.65702 1.3372 1.2687 1.9486 0.61119 0.6119 1.2249 0.9886 1.9479 1.2696 0.69988 0.272 1.4994 0.4574 2.6703 0.511 1.1734 0.0534 1.5481 0.0665 4.5353 0.0665 2.9876 0 3.3614-0.0131 4.5348-0.0665 1.171-0.0536 1.9713-0.239 2.6711-0.511 0.7233-0.281 1.3361-0.6577 1.9473-1.2696 0.6119-0.6114 0.9877-1.2251 1.2696-1.9484 0.2704-0.6996 0.456-1.4992 0.511-2.6697 0.0528-1.1734 0.0665-1.5474 0.0665-4.5348 0-2.9874-0.0137-3.3623-0.0665-4.5357-0.055-1.171-0.2406-1.9704-0.511-2.6698-0.2819-0.72348-0.6577-1.3372-1.2696-1.9486-0.6119-0.61188-1.2238-0.98771-1.9479-1.2684-0.7013-0.27202-1.5011-0.45742-2.6721-0.51104-1.1734-0.053396-1.5469-0.066458-4.5353-0.066458h0.0032zm-0.9868 1.9823c0.2929-4.6e-4 0.6197 0 0.9868 0 2.937 0 3.2851 0.01054 4.445 0.06325 1.0725 0.04904 1.6546 0.22825 2.0423 0.37881 0.5134 0.19938 0.8793 0.43771 1.2641 0.82271 0.385 0.385 0.6233 0.75167 0.8232 1.265 0.1506 0.38729 0.33 0.96938 0.3788 2.0419 0.0527 1.1596 0.0642 1.5079 0.0642 4.4436 0 2.9356-0.0115 3.2839-0.0642 4.4435-0.049 1.0725-0.2282 1.6546-0.3788 2.0419-0.1994 0.5133-0.4382 0.8789-0.8232 1.2636-0.385 0.385-0.7505 0.6234-1.2641 0.8227-0.3873 0.1513-0.9698 0.33-2.0423 0.3791-1.1596 0.0527-1.508 0.0641-4.445 0.0641-2.9372 0-3.2854-0.0114-4.445-0.0641-1.0725-0.0495-1.6546-0.2287-2.0426-0.3793-0.51333-0.1994-0.88-0.4377-1.265-0.8227-0.385-0.385-0.62334-0.7508-0.82317-1.2643-0.15057-0.3873-0.33001-0.9694-0.37882-2.0419-0.05271-1.1596-0.06325-1.5079-0.06325-4.4454 0-2.9374 0.01054-3.2839 0.06325-4.4435 0.04904-1.0725 0.22825-1.6546 0.37882-2.0423 0.19937-0.51333 0.43817-0.88 0.82317-1.265 0.38501-0.385 0.75168-0.62333 1.265-0.82316 0.38775-0.15125 0.97007-0.33 2.0426-0.37927 1.0148-0.04584 1.408-0.05959 3.4582-0.06188v0.00275z"
              fill="url(#f)"
            />
            <path
              d="m16.849 3.7817c-0.2611 0-0.5163 0.07742-0.7334 0.22249-0.2171 0.14506-0.3863 0.35125-0.4861 0.59245-0.1 0.24126-0.1261 0.50669-0.0751 0.76276s0.1768 0.49124 0.3614 0.67585c0.1846 0.18458 0.4199 0.31025 0.676 0.36113 0.2561 0.05087 0.5215 0.0247 0.7627-0.07531 0.2412-0.09996 0.4473-0.26922 0.5923-0.48634 0.145-0.21715 0.2223-0.4724 0.2222-0.73351 0-0.72873-0.5912-1.32-1.32-1.32v4.6e-4z"
              fill="url(#e)"
            />
            <path
              d="m10.977 5.324c-3.1196 0-5.649 2.5293-5.649 5.6489 0 3.1197 2.5294 5.6478 5.649 5.6478 3.1197 0 5.6484-2.5281 5.6484-5.6478 0-3.1196-2.5287-5.6489-5.6484-5.6489zm0.0229 9.2853c1.9934 0 3.6094-1.6159 3.6094-3.6093 0-1.9934-1.616-3.6094-3.6094-3.6094-1.9934 0-3.6094 1.616-3.6094 3.6094 0 1.9934 1.616 3.6093 3.6094 3.6093z"
              clipRule="evenodd"
              fill="url(#d)"
              fillRule="evenodd"
            />
            <path
              d="m11.001 0c-2.9874 0-3.3624 0.013063-4.5357 0.066458-1.171 0.053625-1.9704 0.23902-2.6698 0.51104-0.72349 0.28096-1.3372 0.65679-1.9486 1.2684-0.61188 0.61141-0.98771 1.2251-1.2696 1.9484-0.27271 0.69965-0.45834 1.4992-0.51105 2.6698-0.052251 1.1733-0.066001 1.5485-0.066001 4.5359 0 2.9874 0.013292 3.3612 0.066459 4.5345 0.053855 1.1711 0.23925 1.9704 0.51105 2.6698 0.28119 0.7235 0.65702 1.3372 1.2687 1.9486 0.61119 0.6119 1.2249 0.9886 1.9479 1.2696 0.69988 0.272 1.4994 0.4574 2.6703 0.511 1.1734 0.0534 1.5481 0.0665 4.5353 0.0665 2.9876 0 3.3614-0.0131 4.5348-0.0665 1.171-0.0536 1.9713-0.239 2.6711-0.511 0.7233-0.281 1.3361-0.6577 1.9473-1.2696 0.6119-0.6114 0.9877-1.2251 1.2696-1.9484 0.2704-0.6996 0.456-1.4992 0.511-2.6697 0.0528-1.1734 0.0665-1.5474 0.0665-4.5348 0-2.9874-0.0137-3.3623-0.0665-4.5357-0.055-1.171-0.2406-1.9704-0.511-2.6698-0.2819-0.72348-0.6577-1.3372-1.2696-1.9486-0.6119-0.61188-1.2238-0.98771-1.9479-1.2684-0.7013-0.27202-1.5011-0.45742-2.6721-0.51104-1.1734-0.053396-1.5469-0.066458-4.5353-0.066458h0.0032zm-0.9868 1.9823c0.2929-4.6e-4 0.6197 0 0.9868 0 2.937 0 3.2851 0.01054 4.445 0.06325 1.0725 0.04904 1.6546 0.22825 2.0423 0.37881 0.5134 0.19938 0.8793 0.43771 1.2641 0.82271 0.385 0.385 0.6233 0.75167 0.8232 1.265 0.1506 0.38729 0.33 0.96938 0.3788 2.0419 0.0527 1.1596 0.0642 1.5079 0.0642 4.4436 0 2.9356-0.0115 3.2839-0.0642 4.4435-0.049 1.0725-0.2282 1.6546-0.3788 2.0419-0.1994 0.5133-0.4382 0.8789-0.8232 1.2636-0.385 0.385-0.7505 0.6234-1.2641 0.8227-0.3873 0.1513-0.9698 0.33-2.0423 0.3791-1.1596 0.0527-1.508 0.0641-4.445 0.0641-2.9372 0-3.2854-0.0114-4.445-0.0641-1.0725-0.0495-1.6546-0.2287-2.0426-0.3793-0.51333-0.1994-0.88-0.4377-1.265-0.8227-0.385-0.385-0.62334-0.7508-0.82317-1.2643-0.15057-0.3873-0.33001-0.9694-0.37882-2.0419-0.05271-1.1596-0.06325-1.5079-0.06325-4.4454 0-2.9374 0.01054-3.2839 0.06325-4.4435 0.04904-1.0725 0.22825-1.6546 0.37882-2.0423 0.19937-0.51333 0.43817-0.88 0.82317-1.265 0.38501-0.385 0.75168-0.62333 1.265-0.82316 0.38775-0.15125 0.97007-0.33 2.0426-0.37927 1.0148-0.04584 1.408-0.05959 3.4582-0.06188v0.00275z"
              fill="url(#c)"
            />
            <path
              d="m16.849 3.7817c-0.2611 0-0.5163 0.07742-0.7334 0.22249-0.2171 0.14506-0.3863 0.35125-0.4861 0.59245-0.1 0.24126-0.1261 0.50669-0.0751 0.76276s0.1768 0.49124 0.3614 0.67585c0.1846 0.18458 0.4199 0.31025 0.676 0.36113 0.2561 0.05087 0.5215 0.0247 0.7627-0.07531 0.2412-0.09996 0.4473-0.26922 0.5923-0.48634 0.145-0.21715 0.2223-0.4724 0.2222-0.73351 0-0.72873-0.5912-1.32-1.32-1.32v4.6e-4z"
              fill="url(#b)"
            />
            <path
              d="m10.977 5.324c-3.1196 0-5.649 2.5293-5.649 5.6489 0 3.1197 2.5294 5.6478 5.649 5.6478 3.1197 0 5.6484-2.5281 5.6484-5.6478 0-3.1196-2.5287-5.6489-5.6484-5.6489zm0.0229 9.2853c1.9934 0 3.6094-1.6159 3.6094-3.6093 0-1.9934-1.616-3.6094-3.6094-3.6094-1.9934 0-3.6094 1.616-3.6094 3.6094 0 1.9934 1.616 3.6093 3.6094 3.6093z"
              clipRule="evenodd"
              fill="url(#a)"
              fillRule="evenodd"
            />
          </g>
          <defs>
            <radialGradient
              id="f"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(5.8438 23.694) rotate(-90) scale(21.804 20.279)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD600" offset="0" />
              <stop stopColor="#FF7A00" offset=".5" />
              <stop stopColor="#FF0069" offset="1" />
            </radialGradient>
            <radialGradient
              id="e"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(5.8437 23.694) rotate(-90) scale(21.804 20.279)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD600" offset="0" />
              <stop stopColor="#FF7A00" offset=".5" />
              <stop stopColor="#FF0069" offset="1" />
            </radialGradient>
            <radialGradient
              id="d"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(5.8438 23.694) rotate(-90) scale(21.804 20.279)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7A00" offset="0" />
              <stop stopColor="#fd5" offset=".1" />
              <stop stopColor="#FF7A00" offset=".5" />
              <stop stopColor="#FF0069" offset="1" />
            </radialGradient>
            <radialGradient
              id="c"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(-3.6855 1.5849) rotate(78.681) scale(9.7463 40.175)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7638FA" offset="0" />
              <stop stopColor="#7638FA" offset=".128" />
              <stop stopColor="#D300C5" stopOpacity="0" offset="1" />
            </radialGradient>
            <radialGradient
              id="b"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(-3.6856 1.5849) rotate(78.681) scale(9.7463 40.175)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3771C8" offset="0" />
              <stop stopColor="#3771C8" offset=".128" />
              <stop stopColor="#60f" stopOpacity="0" offset="1" />
            </radialGradient>
            <radialGradient
              id="a"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(-3.6855 1.5849) rotate(78.681) scale(9.7463 40.175)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3771C8" offset="0" />
              <stop stopColor="#60f" stopOpacity="0" offset="1" />
            </radialGradient>
            <clipPath id="g">
              <rect width="22" height="22" fill="#fff" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ],
};

export const footer = {
  categories: [
    {
      title: 'Important Links',
      links: [
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Projects',
          href: '/projects',
        },
        {
          title: 'Experience',
          href: '/experience',
        },
      ],
    },
    {
      title: 'Socials',
      links: [
        {
          title: 'LinkedIn',
          href: `https://www.linkedin.com/in/${meta.accounts.linkedin.username}`,
          target: '_blank',
        },
        {
          title: 'Twitter',
          href: `https://x.com/${meta.accounts.twitter.username}`,
          target: '_blank',
        },
        {
          title: 'Instagram',
          href: `https://instagram.com/${meta.accounts.instagram.username}`,
          target: '_blank',
        },
      ],
    },

    {
      title: 'Other Links',
      links: [
        {
          title: 'Hackathons',
          href: '/hackathons',
        },
        {
          title: 'Competitive Programming',
          href: '/competitive-programming',
        },
        {
          title: 'Contact',
          href: '/contact',
        },
      ],
    },
  ],
};

export const technologies = [
  {
    name: 'Java',
    icon: '/assets/tech/java.svg',
    link: 'https://www.java.com/en/',
  },
  {
    name: 'SpringBoot',
    icon: '/assets/tech/springboot.svg',
    class: 'invert-0 dark:invert',
    link: 'https://spring.io/projects/spring-boot',
  },
  {
    name: 'Javascript',
    icon: '/assets/tech/javascript.svg',
    link: 'https://www.javascript.com/',
  },
  {
    name: 'React.js',
    icon: '/assets/tech/react.svg',
    link: 'https://reactjs.org/',
  },
  {
    name: 'TailwindCSS',
    icon: '/assets/tech/tailwindcss.svg',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'AWS',
    icon: '/assets/tech/aws.svg',
    class: 'invert-0 dark:invert',
    link: 'https://aws.amazon.com/',
  },
  {
    name: 'Node.js',
    icon: '/assets/tech/nodejs.svg',
    link: 'https://nodejs.org/',
  },
  {
    name: 'Git',
    icon: '/assets/tech/git.svg',
    link: 'https://git-scm.com/',
  },
  {
    name: 'Github',
    icon: '/assets/tech/github.svg',
    class: 'dark:invert-0 invert',
    link: 'https://github.com',
  },
  {
    name: 'C++',
    icon: '/assets/tech/cpp.svg',
    link: 'https://cplusplus.com/',
  },
  {
    name: 'MySQL',
    icon: '/assets/tech/mysql.svg',
    link: 'https://www.mysql.com/',
  },
  {
    name: 'MongoDB',
    icon: '/assets/tech/mongodb.svg',
    link: 'https://www.mongodb.com/',
  },
  {
    name: 'Docker',
    icon: '/assets/tech/docker.svg',
    link: 'https://www.docker.com/',
  },
  {
    name: 'Vercel',
    icon: '/assets/tech/vercel.svg',
    class: 'invert-0 dark:invert',
    link: 'https://vercel.com/',
  },
];
