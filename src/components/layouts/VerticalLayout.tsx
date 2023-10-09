import { FC } from 'react';
import VerticalNav, { type VerticalNavProps } from './VerticalNav';
import VerticalFooter from './VerticalFooter';

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
    </div>
  );
};

export default VerticalLayout;
