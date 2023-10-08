import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';

const News: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ a }) => {
  return <div className="h-screen bg-red-500">Hello World!</div>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      a: 1,
    },
  };
}

News.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default News;
