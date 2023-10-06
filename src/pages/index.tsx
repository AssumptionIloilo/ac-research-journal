import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { useQuery } from '~gqty/index';

const Home: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ a }) => {
  const { allNews } = useQuery();

  const news = allNews({
    page: 1,
    sort: 'publishedDate',
  });

  return <div>Hello World!</div>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      a: 1,
    },
  };
}

Home.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default Home;
