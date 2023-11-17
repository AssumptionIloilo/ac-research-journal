import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

import VerticalLayout from '@/components/layouts/VerticalLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { container } from '@/styles/variants';

const Guide: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ a }) => {
  return (
    <>
      <div className={container({ class: 'flex flex-row pt-10 pb-20' })}>
        <aside className="w-44 flex flex-col bg-primary-100">
          <Link href="">How to do a Gigachad face.</Link>
        </aside>
        <div className="flex flex-col flex-1"></div>
      </div>
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
