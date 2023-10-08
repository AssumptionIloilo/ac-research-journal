import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';

const Guide: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ a }) => {
  return (
    <>
      <div className="h-screen bg-red-500">Hello World!</div>
      <div className="h-screen bg-blue-500" />
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      a: 1,
    },
  };
}

Guide.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default Guide;
