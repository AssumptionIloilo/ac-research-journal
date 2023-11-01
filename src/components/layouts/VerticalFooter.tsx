import React, { FC } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

import TransformateurLogo from '../TransformateurLogo';
import pageRoutes from '@/lib/pageRoutes';

type VerticalFooterProps = {};

const researchJournal = [
  {
    href: pageRoutes.archive,
    name: 'Journal',
  },
  {
    href: pageRoutes.archive,
    name: 'Manuscript',
  },
];

const aboutUs = [
  {
    href: pageRoutes.news,
    name: 'News and Updates',
  },
  {
    href: pageRoutes.guide,
    name: 'Guidelines',
  },
  {
    href: pageRoutes.about,
    name: 'About',
  },
];

const guide = [
  {
    href: pageRoutes.guide,
    name: 'Announcements',
  },
  {
    href: pageRoutes.guide,
    name: 'Schedules',
  },
  {
    href: pageRoutes.guide,
    name: 'Guidelines',
  },
];

const VerticalFooter: FC<VerticalFooterProps> = () => {
  return (
    <footer className="w-full bg-primary-600 pb-40 md:pb-20 p-6 md:p-20 flex flex-col gap-y-6">
      <TransformateurLogo color="white" size="text-[26px] md:text-[60px]" />
      <div className="flex flex-col justify-between md:flex-row gap-y-6">
        <div className="md:w-[40%]">
          <p className="text-secondary-500 text-[14px] md:text-[22px]">
            Illuminating Minds, Inspiring Change, and Redefining Excellence
          </p>
          <div className="flex gap-x-2 mt-6">
            <div className="bg-white w-max h-max p-1 rounded-md">
              <Icon icon="formkit:facebook" color="#040593" />
            </div>
            <div className="bg-white w-max h-max p-1 rounded-md">
              <Icon icon="ri:earth-fill" color="#040593" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-20 flex-wrap">
          <div>
            <h3 className="text-primary-200 md:text-[22px]">
              Research Journal
            </h3>
            <div className="flex flex-col mt-2">
              {researchJournal.map((item) => (
                <FooterLinks key={item.name} href={item.href}>
                  {item.name}
                </FooterLinks>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-primary-200 md:text-[22px]">About Us</h3>
            <div className="flex flex-col mt-2">
              {aboutUs.map((item) => (
                <FooterLinks key={item.name} href={item.href}>
                  {item.name}
                </FooterLinks>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-primary-200 md:text-[22px]">Guide</h3>
            <div className="flex flex-col mt-2">
              {guide.map((item) => (
                <FooterLinks key={item.name} href={item.href}>
                  {item.name}
                </FooterLinks>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = ({
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
