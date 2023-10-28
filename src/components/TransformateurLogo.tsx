import { FC } from 'react';
import Link from 'next/link';

import pageRoutes from '@/lib/pageRoutes';

type TransformateurLogoType = { color: string; size?: string };

const TransformateurLogo: FC<TransformateurLogoType> = ({ color, size }) => {
  return (
    <Link
      style={{ color: color }}
      className={`z-20 font-mixOldGirl ${size || 'text-3xl'} flex-shrink-0`}
      href={pageRoutes.home}
    >
      transformateur
    </Link>
  );
};

export default TransformateurLogo;
