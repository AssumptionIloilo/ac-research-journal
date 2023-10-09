import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';

const Journal: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ a }) => {
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

Journal.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default Journal;
