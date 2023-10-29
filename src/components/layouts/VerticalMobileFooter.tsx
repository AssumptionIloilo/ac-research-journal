import { FC } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import TransformateurLogo from '../TransformateurLogo';

import pageRoutes, { navLinks } from '@/lib/pageRoutes';
import { cn } from '@/lib/utils';
import { button } from '@/styles/variants';

type VerticalMobileFooterProps = {};

const VerticalMobileFooter: FC<VerticalMobileFooterProps> = (props) => {
  const pathname = usePathname();

  return (
    <nav className="relative top-0 left-0 right-0 z-[999998] w-full md:hidden">
      <div className="relative max-w-7xl w-full mx-auto flex items-center justify-between md:hidden">
        <ul className="fixed bottom-0 bg-white w-full justify-evenly items-center flex border-t border-primary-400">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.url}
              className={`flex-1 py-4 flex flex-col gap-y-3 items-center ${
                navLink.label === 'Journal' ? 'block' : ''
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

export default VerticalMobileFooter;
