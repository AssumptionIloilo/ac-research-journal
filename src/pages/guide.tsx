import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { container } from '@/styles/variants';

const Guide: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ a }) => {
  return (
    <>
      <div className={container()}>Hello World!</div>
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
