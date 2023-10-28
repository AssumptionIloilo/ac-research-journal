import React, { FC } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import TransformateurLogo from '../TransformateurLogo';

import useIsOnTop from '@/hooks/useIsOnTop';
import useScrollCallback from '@/hooks/useScrollCallback';
import pageRoutes, { navLinks } from '@/lib/pageRoutes';
import { cn } from '@/lib/utils';
import { button } from '@/styles/variants';

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
    <nav
      className={cn(
        'relative top-0 left-0 right-0 z-[999999] w-full',
        position,
      )}
    >
      <div
        className={cn('absolute inset-0', isOnTop ? '' : 'backdrop-blur-sm')}
      />
      <div
        className={cn(
          'absolute inset-0 transition duration-700',
          isOnTop ? 'bg-primary-100/0' : 'bg-primary-100/40 border-b',
        )}
      />

      <div
        className="
          'max-w-7xl w-full mx-auto flex items-center justify-between md:container md:px-16 md:py-6"
      >
        <span className="hidden md:block">
          <TransformateurLogo color="#040593" />
        </span>
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
                  pathname?.split('/')[1] === navLink.url.split('/')[1]
                    ? navLink.activeIcon
                    : navLink.icon
                }
                className={cn(
                  'text-2xl block md:hidden',
                  pathname?.split('/')[1] === navLink.url.split('/')[1]
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
