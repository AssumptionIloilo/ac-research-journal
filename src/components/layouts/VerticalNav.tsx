import Link from 'next/link';
import React, { FC } from 'react';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';

import pageRoutes, { navLinks } from '@/lib/pageRoutes';
import { button } from '@/styles/variants';
import { cn } from '@/lib/utils';
import useScrollCallback from '@/hooks/useScrollCallback';
import useIsOnTop from '@/hooks/useIsOnTop';

export type VerticalNavProps = {
  /**
   * Usecase: make it fixed for the homepage.
   *
   * Note for future devs:
   * Currently uses the same strings as tailwind. If you need different usecases,
   * use the { 'tailwind-class': position === 'your value' } syntax in the cn().
   * @defaultValue `"sticky"`
   */
  position?: 'sticky' | 'fixed';
};

const VerticalNav: FC<VerticalNavProps> = (props) => {
  const pathname = usePathname();
  const { position = 'sticky' } = props;

  const isOnTop = useIsOnTop();

  return (
    <nav className={cn('relative top-0 left-0 right-0 z-50 w-full', position)}>
      <div
        className={cn(
          'absolute inset-0',
          isOnTop ? '' : 'backdrop-blur-sm bg-primary-100/20 border-b',
        )}
      />
      <div
        className="
          'max-w-7xl w-full mx-auto flex items-center justify-between md:container md:px-16 md:py-6"
      >
        <Link
          className="hidden md:block z-20 text-primary-800 font-mixOldGirl text-3xl"
          href={pageRoutes.home}
        >
          transformateur
        </Link>
        <ul
          className={`fixed bottom-0 py-4 bg-white w-full justify-evenly items-center flex gap-4 Z-10
        md:justify-center md:gap-x-12 md:bg-transparent md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]
      `}
        >
          {navLinks.map((navLink) => (
            <Link
              key={navLink.url}
              className={`flex flex-col gap-y-3 items-center ${
                navLink.label === 'Journal' ? 'block md:hidden' : ''
              }`}
              href={navLink.url}
            >
              <Icon
                icon={
                  pathname.split('/')[1] === navLink.url.split('/')[1]
                    ? navLink.activeIcon
                    : navLink.icon
                }
                className={cn(
                  'text-2xl block md:hidden',
                  pathname.split('/')[1] === navLink.url.split('/')[1]
                    ? 'text-primary-600'
                    : 'text-primary-300',
                )}
              />
              <span className="text-primary-300 md:text-[#2B2B43]">
                {navLink.label}
              </span>
            </Link>
          ))}
        </ul>
        <Link
          href={pageRoutes.archive}
          className={button({ class: 'hidden md:block z-10' })}
        >
          Read Journals
        </Link>
      </div>
    </nav>
  );
};

export default VerticalNav;
