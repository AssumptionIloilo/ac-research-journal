import { FC, PropsWithChildren, useState } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useQuery } from 'urql';

import Sider from '../Sider';

import { GetGuidelinesDocument } from '@/gql/graphql';
import { useMediaQueryClient } from '@/hooks/useMediaQuery';
import pageRoutes from '@/lib/pageRoutes';
import { client, ssrCache } from '@/lib/urqlClient';
import { cn } from '@/lib/utils';
import { container } from '@/styles/variants';

// =============================================================================
// Server-Side Calls from the Page.
// =============================================================================
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { slug } = ctx.params as { slug: string };

  const { data: guidelinesData } = await client
    .query(
      GetGuidelinesDocument,
      { limit: 0 },
      { requestPolicy: 'network-only' },
    )
    .toPromise();

  return {
    props: {
      slug,
      urqlState: ssrCache.extractData(),
    },
  };
}

type GuideLayoutProps = {} & PropsWithChildren;

const GuideLayout: FC<GuideLayoutProps> = (props) => {
  const [{ data: guidelinesData }] = useQuery({
    query: GetGuidelinesDocument,
    variables: {
      limit: 0,
    },
  });

  const currentGuidelineSlug = usePathname()?.split('/')?.at(-1) ?? '404';

  const isMobile = useMediaQueryClient('(max-width: 768px)');

  const [siderCollapsed, setSiderCollapsed] = useState<boolean>(true);

  // ===========================================================================
  // Handlers
  // ===========================================================================
  const handleClose = () => {
    setSiderCollapsed(true);
  };

  const handleOpen = () => {
    setSiderCollapsed(false);
  };

  return (
    <div
      className={container({
        class: 'relative flex flex-row flex-1 pt-10 pb-20 gap-x-5',
      })}
    >
      {isMobile && siderCollapsed && (
        <button
          className="select-none mt-5 fixed w-10 h-10 grid place-items-center text-white left-0 top-0 bg-secondary-400 rounded-r-md"
          onClick={handleOpen}
        >
          <Icon icon="lucide:chevron-last" />
        </button>
      )}
      <Sider
        isMobileMediaQuery="(min-width: 768px)"
        collapsed={siderCollapsed}
        containerClassName={cn(
          'h-full bg-white border-r w-72',
          'md:w-56 md:border-none',
        )}
        className="flex flex-col bg-white px-3 w-72 md:w-56"
        onClose={handleClose}
      >
        {isMobile && !siderCollapsed && (
          <button
            className="select-none mt-5 mb-5 w-10 h-10 grid place-items-center text-white bg-secondary-400 rounded-md"
            onClick={handleClose}
          >
            <Icon icon="lucide:chevron-first" />
          </button>
        )}
        {guidelinesData?.Guidelines?.docs?.map((guideline) => (
          <Link
            onClick={handleClose}
            href={`${pageRoutes.guide}/${guideline?.slug}`}
            className="select-none relative py-3 px-2"
          >
            {currentGuidelineSlug === guideline?.slug && (
              <motion.span
                className="block absolute inset-0 rounded-md bg-secondary-500"
                layoutId="guide-side-nav"
                transition={{
                  ease: 'circOut',
                }}
              />
            )}
            <span
              className={cn(
                'relative transition',
                currentGuidelineSlug === guideline?.slug &&
                  'text-white font-medium',
              )}
            >
              {guideline?.title}
            </span>
          </Link>
        ))}
      </Sider>
      {props.children}
    </div>
  );
};

export default GuideLayout;
