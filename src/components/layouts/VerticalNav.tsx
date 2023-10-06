import pageRoutes, { navLinks } from '@/lib/pageRoutes';
import { button } from '@/styles/variants';
import Link from 'next/link';
import React, { FC } from 'react';

type VerticalNavProps = {};

const VerticalNav: FC<VerticalNavProps> = () => {
  return (
    <nav className="max-w-7xl w-full mx-auto flex items-center justify-between sticky top-0">
      <Link href={pageRoutes.home}>Transformateur</Link>
      <ul className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {navLinks.map((navLink) => (
          <Link key={navLink.url} href={navLink.url}>
            {navLink.label}
          </Link>
        ))}
      </ul>
      <Link href={pageRoutes.archive} className={button()}>
        Read Journals
      </Link>
    </nav>
  );
};

export default VerticalNav;
