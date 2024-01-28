import React, { FC } from 'react';
import Link from 'next/link';

import pageRoutes from '@/lib/pageRoutes';
import { Icon } from '@iconify/react';

import Logo from '../Logo';

type VerticalFooterProps = {};

const quickLinks = [
  {
    href: pageRoutes.about,
    name: 'About',
  },
  {
    href: pageRoutes.news,
    name: 'News and Updates',
  },
  {
    href: pageRoutes.guide,
    name: 'Guidelines',
  },
  {
    href: pageRoutes.archive,
    name: 'Archive',
  },
];

const VerticalFooter: FC<VerticalFooterProps> = () => {
  return (
    <footer className="w-full bg-primary-600 pb-40 md:pb-20 p-6 md:p-20 flex flex-col gap-y-2">
      <Logo color="white" className="text-[26px] md:text-[60px]" />
      <div className="flex flex-col justify-between md:flex-row gap-y-6">
        <div className="md:w-[40%]">
          <p className="text-secondary-500 text-[14px] md:text-[22px]">
            Illuminating Minds, Inspiring Change, and Redefining Excellence
          </p>
          <div className="flex gap-x-2 mt-6">
            <Link
              href="https://www.facebook.com/ACIloiloMariale"
              className="bg-white w-max h-max p-1 rounded-md"
            >
              <Icon icon="formkit:facebook" color="#040593" />
            </Link>
            <Link
              href="https://assumptioniloilo.edu.ph/"
              className="bg-white w-max h-max p-1 rounded-md"
            >
              <Icon icon="ri:earth-fill" color="#040593" />
            </Link>
          </div>
        </div>
        <div className="flex gap-x-20 flex-wrap">
          <div>
            <h3 className="text-primary-200 md:text-[22px]">Quick Links</h3>
            <div className="flex flex-col mt-2">
              {quickLinks.map((item) => (
                <FooterLink key={item.name} href={item.href}>
                  {item.name}
                </FooterLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} className="text-white my-1 md:text-[22px]">
      {children}
    </Link>
  );
};

export default VerticalFooter;
