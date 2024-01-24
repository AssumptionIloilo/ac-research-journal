import { FC } from 'react';
import Link from 'next/link';

import pageRoutes from '@/lib/pageRoutes';
import { cn } from '@/lib/utils';

type LogoType = {
  color: '#2E2FA5' | string;
  className?: string;
};

const Logo: FC<LogoType> = (props) => {
  const { color, className } = props;
  return (
    <Link
      style={{ color: color }}
      className={cn('font-mixOldGirl text-3xl flex-shrink-0', className)}
      href={pageRoutes.home}
    >
      AC Publications
    </Link>
  );
};

export default Logo;
