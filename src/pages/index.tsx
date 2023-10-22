import { Icon } from '@iconify/react';
import { cardItems, newsCardItems } from 'data/data';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Card from '@/components/Card';
import { Icons } from '@/components/Icons';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import NewsCard from '@/components/NewsCard';
import { NextPageWithLayout } from '@/pages/_app';

const Home: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ a }) => {
  return (
    <>
      {/* HERO */}
      <div className="relative h-screen flex flex-col gap-y-6 item-center justify-center bg-[#E6E6FA]">
        <NextSeo title="Home" />
        <p className="text-dark-800 text-center leading-[42px] text-[28px] font-[300] z-10 px-5 md:text-[52px] md:leading-[64px]">
          <span className="font-bold text-primary-600">Transformateur</span> is
          Assumption Iloilo’s
          <br className="hidden md:block" /> Official Research Journal. Discover
          <br className="hidden md:block" /> the latest in Assumption Research,
          <br className="hidden md:block" /> explore our wealth of past
          <br className="hidden md:block" /> manuscripts, and view guidelines.
        </p>
        <Image
          src="/logo.png"
          alt="Logo"
          height={100}
          width={100}
          className="mx-auto mb-14"
        />
        <Icons.star1 className="absolute z-0 top-20 right-10 w-[75px] md:top-36 md:right-28 md:w-[120px]" />
        <Icons.star2 className="absolute z-0 w-[75px] bottom-44 right-44 hidden md:block" />
        <Icons.star3 className="absolute bottom-20 left-8 z-0 w-[56px] md:w-[100px] md:bottom-40 md:left-40" />
        <div className="absolute top-32 right-10 w-[95px] h-[95px] rounded-full bg-[#040593] opacity-75 blur-3xl z-0 md:w-[460px] md:h-[460px] md:blur-[150px] md:top-6 md:opacity-50" />
        <div className="absolute bottom-32 left-4 w-[155px] h-[155px] rounded-full bg-[#B99608] opacity-75 blur-3xl z-0 md:w-[360px] md:h-[360px] md:blur-[120px] md:bottom-10 md:opacity-50" />
      </div>
      {/*  */}
      <div className="absolute h-max -bottom-[160px] md:-bottom-[120px] left-0 right-0 flex bg-white rounded-xl shadow-md max-w-6xl md:w-3/4 md:h-[260px] m-auto mx-4 md:mx-auto">
        <div className="flex flex-col items-start justify-center gap-y-2 px-8 md:pl-10 py-12">
          <p className="text-secondary-900 text-[12px] bg-secondary-500 rounded-full px-4 py-1 w-max">
            Featured Manuscript{' '}
            <span className="hidden md:block">in Transformateur Volume 3</span>
          </p>
          <h2 className="text-dark-800 font-bold text-[18px] md:text-[22px]">
            "AI-Precision Farming for Sustainable Agriculture"
          </h2>
          <p className="text-dark-800 text-[12px] md:text-[14px] w-full md:w-3/4">
            This research journal explores cutting-edge methods for optimizing
            resource utilization, reducing waste, and promoting eco-friendly
            practices to ensure food security and ecological balance in the face
            of global challenges.
          </p>
          <button className="text-secondary-500 text-[13px] flex items-center gap-x-2">
            Learn More <Icon icon="uil:arrow-right" className="text-[16px]" />
          </button>
        </div>
        <img
          src="/news_electron_configuration_game.png"
          alt="..."
          className="object-cover hidden md:block"
        />
      </div>

      {/* *** */}
      <div className="bg-[#F7F7F7] flex flex-col gap-y-6 h-max pb-20">
        <h2 className="mt-60 mb-10 md:mb-0 md:mt-44 text-dark-900 text-[24px] md:text-[32px] text-center">
          <span className="text-secondary-500 font-semibold">
            Research Excellence
            <br />
          </span>{' '}
          bounded by the pillars of
          <br />
          <span className="text-primary-600 font-semibold">
            Assumption Education
          </span>
        </h2>
        <div className="max-w-6xl w-3/4 mx-auto flex flex-wrap justify-between gap-y-10 md:gap-x-10">
          {cardItems.map((item) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>

      {/* News Section */}
      <div className="h-max md:h-screen bg-[#E6E6FA] md:flex flex-col gap-y-20 justify-center pb-24 md:pb-0">
        <h2 className="text-center text-primary-600 text-[24px] md:text-[32px] font-semibold my-12 md:my-8">
          See What Is The Latest
        </h2>
        <div className="flex flex-col gap-y-6 md:flex-row w-[90%] md:w-3/4 md:gap-x-8 max-w-6xl mx-auto">
          <div>
            <div className="md:w-[480px] h-full rounded-xl relative after:absolute after:top-0 after:left-0 after:w-full after:h-[80%] after:md:h-80 after:rounded-t-xl after:bg-gradient-to-b after:from-[#01011D] after:to-transparent">
              <p className="text-white md:text-[24px] absolute p-6 z-10">
                SHS Students Unleash Innovations at Research Journal Event:
                Showcasing Bright Minds and Breakthrough Ideas for a Sustainable
                Future.
              </p>
              ohh
              <img src="/news3.png" alt="..." className="object-cover" />
              <button className="flex gap-x-1 items-center absolute bottom-0 right-0 bg-primary-600 text-white text-[12px] md:text-[14px] rounded-md px-3 md:px-3 py-1 md:py-2 mb-1 md:mb-0">
                Learn More
                <Icon
                  icon="uil:arrow-right"
                  className="hidden md:block text-[20px] text-secondary-500"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 md:gap-y-8">
            {newsCardItems.map((item) => (
              <NewsCard
                img={item.img}
                text={item.text}
                date={item.date}
                bgColor={item.bgColor}
                btnColor={item.btnColor}
              />
            ))}
          </div>
        </div>
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

Home.getLayout = (page) => (
  <VerticalLayout navPosition="fixed">{page}</VerticalLayout>
);
export default Home;
