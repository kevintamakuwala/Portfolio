'use client';

import {
  Transition,
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverProps,
} from '@headlessui/react';
import Link from 'next/link';
import { Icons } from '../Icons';
import { meta } from '@/config';

export default function NavPopover(props: PopoverProps) {
  const currentTheme = 'dark';

  return (
    <Popover {...props}>
      <>
        <PopoverButton className="group relative hidden rounded-lg p-1 text-neutral-700 transition-all duration-200 hover:bg-black/10 hover:text-neutral-800 ui-open:bg-black/10 ui-open:text-neutral-800 motion-reduce:transition-none dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-neutral-200 dark:ui-open:bg-white/10 dark:ui-open:text-neutral-200 sm:px-3 sm:py-2 md:flex md:items-center">
          <span>Achievements</span>
          <Icons.ChevronRight className="ml-1 size-4 text-neutral-700 duration-150 ease-in-out group-hover:rotate-90 group-hover:text-neutral-800 ui-open:rotate-90 ui-open:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-400 dark:ui-open:text-neutral-200" />
        </PopoverButton>
        <Transition
          enter="transition ease-out duration-100 motion-reduce:transition-none"
          enterFrom="transform opacity-0 duration-100 scale-95 motion-reduce:transition-none"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100 motion-reduce:transition-none"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform rounded-xl border border-black/10 bg-white/90 p-2 opacity-100 shadow-lg backdrop-blur-xl duration-100 dark:border-neutral-800 dark:bg-[#161617]/70">
            {/* Hackathon Achievement Link */}
            <Link
              href="/hackathons"
              className="flex items-center rounded-md p-3 transition hover:bg-black/10 dark:hover:bg-white/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-black/10 text-black dark:bg-white/10 dark:text-white sm:h-12 sm:w-12">
                <Icons.hackathon
                  theme={currentTheme}
                  className="h-6 w-6 fill-current stroke-current stroke-2 transition-colors duration-200"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                  Hackathon Achievements
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Explore my projects and ideas in Hackathons.
                </p>
              </div>
            </Link>

            {/* Competitive Programming Achievement Link */}
            <Link
              href="/competitive-programming"
              className="mt-1 flex items-center rounded-md p-3 transition duration-150 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white sm:h-12 sm:w-12">
                <Icons.CP
                  theme={currentTheme}
                  className="h-6 w-6 fill-current stroke-current stroke-2 transition-colors duration-200"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                  Competitive Programming Achievements
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  View my journey of Competitive Programming and DSA.
                </p>
              </div>
            </Link>
          </PopoverPanel>
        </Transition>
      </>
    </Popover>
  );
}
