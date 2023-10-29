import { FC } from 'react';
import Link from 'next/link';

import pageRoutes from '@/lib/pageRoutes';

type TransformateurLogoType = { color: '#2E2FA5' | string; size?: string };

const TransformateurLogo: FC<TransformateurLogoType> = ({ color, size }) => {
  return (
    <Link
      style={{ color: color }}
      className={`font-mixOldGirl ${size || 'text-3xl'} flex-shrink-0`}
      href={pageRoutes.home}
    >
      transformateur
    </Link>
  );
};

export default TransformateurLogo;
