import { FC, PropsWithChildren, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import ArchiveAside, { ArchiveAsideProps } from './ArchiveAside';

type ArchiveLayoutType = PropsWithChildren & {} & ArchiveAsideProps;
/** A Horizontal Layout. */
const ArchiveLayout: FC<ArchiveLayoutType> = ({ children, collapsed }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    import('react-device-detect').then(({ isMobile }) => {
      setIsMobile(isMobile);
    });
  }, []);

  return (
    <div className="h-screen max-h-screen flex">
      <ArchiveAside collapsed={isMobile ? true : collapsed} />
      <main className="flex-1 overflow-auto flex flex-col">{children}</main>
    </div>
  );
};

export default ArchiveLayout;
