import pageRoutes from '@/lib/pageRoutes';
import Link from 'next/link';
import { FC } from 'react';

type TransformateurLogoType = {};

const TransformateurLogo: FC<TransformateurLogoType> = (props) => {
  return (
    <Link
      className="hidden md:block z-20 text-primary-500 font-mixOldGirl text-3xl flex-shrink-0"
      href={pageRoutes.home}
    >
      transformateur
    </Link>
  );
};

export default TransformateurLogo;
