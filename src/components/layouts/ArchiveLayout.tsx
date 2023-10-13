import { FC, PropsWithChildren, useState } from 'react';
import ArchiveAside, { ArchiveAsideProps } from './ArchiveAside';

type ArchiveLayoutType = PropsWithChildren & {} & ArchiveAsideProps;
/** A Horizontal Layout. */
const ArchiveLayout: FC<ArchiveLayoutType> = ({ children, collapsed }) => {
  return (
    <div className="h-screen max-h-screen flex">
      <ArchiveAside collapsed={collapsed} />
      <main className="flex-1 overflow-auto flex flex-col">{children}</main>
    </div>
  );
};

export default ArchiveLayout;
