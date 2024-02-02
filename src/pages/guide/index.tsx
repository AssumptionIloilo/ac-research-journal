import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
} from 'next';

import GuideLayout from '@/components/layouts/GuideLayout';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { GetGuidelinesDocument } from '@/gql/graphql';
import pageRoutes from '@/lib/pageRoutes';
import { client } from '@/lib/urqlClient';

import { NextPageWithLayout } from '../_app';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let { data } = await client
    .query(
      GetGuidelinesDocument,
      { limit: 1 },
      { requestPolicy: 'network-only' },
    )
    .toPromise();

  if (data?.Guidelines?.docs?.length)
    return {
      redirect: {
        permanent: true,
        destination: `${pageRoutes.guide}/${data.Guidelines.docs.at(0)?.slug}`,
      },
    };

  return {
    props: {
      a: 1,
    },
  };
}

const GuidelinesOverviewPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return (
    <div className="pt-20">
      No guidelines found. Please write some guidelines on the admin page.
    </div>
  );
};

GuidelinesOverviewPage.getLayout = (page) => (
  <VerticalLayout>
    <GuideLayout>{page}</GuideLayout>
  </VerticalLayout>
);
export default GuidelinesOverviewPage;
