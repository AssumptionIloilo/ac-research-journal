import { FC } from 'react';
import VerticalNav from './VerticalNav';
import VerticalFooter from './VerticalFooter';

type LayoutProps = {
  children: React.ReactNode;
};

const VerticalLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <VerticalNav />
      <main className="flex flex-col flex-grow gap-0">{children}</main>
      <VerticalFooter />
    </div>
  );
};

export default VerticalLayout;
