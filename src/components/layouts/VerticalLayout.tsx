import { FC } from 'react';

import VerticalFooter from './VerticalFooter';
import VerticalMobileFooter from './VerticalMobileFooter';
import VerticalNav, { type VerticalNavProps } from './VerticalNav';

type LayoutProps = {
  children: React.ReactNode;
  /** {@inheritDoc VerticalNavProps.position} */
  navPosition?: VerticalNavProps['position'];
};

const VerticalLayout: FC<LayoutProps> = ({ children, navPosition }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <VerticalNav position={navPosition} />
      <main className="flex flex-col flex-grow gap-0">{children}</main>
      <VerticalFooter />
      <VerticalMobileFooter />
    </div>
  );
};

export default VerticalLayout;
