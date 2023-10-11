import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { useQuery } from '~gqty';
import Link from 'next/link';
import { button } from '@/styles/variants';
import pageRoutes from '@/lib/pageRoutes';

const ArchiveOverviewPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { Volumes } = useQuery();

  const volumes = Volumes({
    page: 1,
  });
  return (
    <div>
      <h1>Archive</h1>
      <div>
        {volumes?.docs?.map((volume) => (
          <div>
            {volume?.title}

            <Link
              href={`${pageRoutes.archive}/${volume?.slug}` ?? '404'}
              className={button({ class: 'text-white' })}
            >
              Open
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      a: 1,
    },
  };
}

ArchiveOverviewPage.getLayout = (page) => (
  <VerticalLayout>{page}</VerticalLayout>
);
export default ArchiveOverviewPage;
