import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';

const About: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ a }) => {
  return (
    <>
      <div className="h-screen bg-red-500">about</div>
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

About.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default About;
