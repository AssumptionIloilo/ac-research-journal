import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
} from 'next';

import { NextPageWithLayout } from '../_app';

import { GetGuidelinesDocument } from '@/gql/graphql';
import pageRoutes from '@/lib/pageRoutes';
import { client } from '@/lib/urqlClient';

export async function getServerSideProps(
  ctx: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<{}>> {
  const { data } = await client
    .query(
      GetGuidelinesDocument,
      { limit: 1 },
      { requestPolicy: 'network-only' },
    )
    .toPromise();

  if (!data?.Guidelines?.docs?.length)
    return {
      redirect: {
        statusCode: 308, // idk honestly
        destination: '404',
      },
    };

  return {
    redirect: {
      permanent: true,
      destination: `${pageRoutes.guide}/${data.Guidelines.docs.at(0)?.slug}`,
    },
  };
}

const GuidelinesOverviewPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return <div>Guidelines</div>;
};

export default GuidelinesOverviewPage;
