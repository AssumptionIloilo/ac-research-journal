import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { Icons } from '@/components/Icons';
import Image from 'next/image';

const Home: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ a }) => {
  return (
    <div className="h-screen flex flex-col gap-y-10 item-center justify-center bg-[#E6E6FA]">
      <p className="text-dark-800 text-center leading-[42px] text-[28px] font-[300] z-10 px-5 md:text-[52px] md:leading-[64px]">
        <span className="font-bold text-primary-600">Transformateur</span> is Assumption Iloilo’s
        <br className="hidden md:block" /> Official Research Journal. Discover
        <br className="hidden md:block" /> the latest in Assumption Research,
        <br className="hidden md:block" /> explore our wealth of past
        <br className="hidden md:block" /> manuscripts, and view guidelines.
      </p>
      <Image src="/logo.png" alt="Logo" height={120} width={120} className="mx-auto hidden md:block" />
      <Icons.star1 className="absolute z-0 top-20 right-10 w-[75px] md:top-36 md:right-28 md:w-[120px]" />
      <Icons.star2 className="absolute z-0 w-[75px] bottom-44 right-44 hidden md:block" />
      <Icons.star3 className="absolute bottom-20 left-8 z-0 w-[56px] md:w-[100px] md:bottom-40 md:left-40" />
      <div className="absolute top-32 right-10 w-[95px] h-[95px] rounded-full bg-[#040593] opacity-75 blur-3xl z-0 md:w-[460px] md:h-[460px] md:blur-[150px] md:top-6 md:opacity-50" />
      <div className="absolute bottom-32 left-4 w-[155px] h-[155px] rounded-full bg-[#B99608] opacity-75 blur-3xl z-0 md:w-[360px] md:h-[360px] md:blur-[120px] md:bottom-10 md:opacity-50" />
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

Home.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default Home;
