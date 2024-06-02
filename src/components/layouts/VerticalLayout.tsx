import { FC } from 'react';

import VerticalFooter from './VerticalFooter';
import VerticalMobileFooter from './VerticalMobileFooter';
import VerticalNav, { type VerticalNavProps } from './VerticalNav';

type LayoutProps = {
  children: React.ReactNode;
  /** {@inheritDoc VerticalNavProps.position} */
  navPosition?: VerticalNavProps['position'];
  /** {@inheritDoc VerticalNavProps.position} */
  navVariant?: VerticalNavProps['variant'];
};

const VerticalLayout: FC<LayoutProps> = ({
  children,
  navPosition,
  navVariant,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <VerticalNav position={navPosition} variant={navVariant} />
      <main className="flex flex-col flex-grow gap-0">{children}</main>
      <VerticalFooter />
      <VerticalMobileFooter />
    </div>
  );
};

export default VerticalLayout;
