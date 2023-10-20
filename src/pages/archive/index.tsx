import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { Maybe, useQuery } from '~gqty';
import Link from 'next/link';
import { button } from '@/styles/variants';
import pageRoutes from '@/lib/pageRoutes';
import ArchiveLayout from '@/components/layouts/ArchiveLayout';
import { FC } from 'react';
import useArchiveWasPrevious from '@/hooks/useArchiveWasPrevious';
import { NextSeo } from 'next-seo';

const ArchiveOverviewPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { Volumes } = useQuery();

  const volumes = Volumes({
    page: 1,
  });

  return (
    <div className=" flex-1 pt-16 px-16 bg-[#EDF1FD]">
      <NextSeo title="Archive" />
      <h1 className="font-medium text-3xl text-dark-600 mb-7">Volumes</h1>
      <div>
        {volumes?.docs?.map((volume) => (
          <VolumeCard
            subtitle={volume?.title}
            title={volume?.title}
            volumeCoverUrl="https://publiscience684370512.files.wordpress.com/2019/05/cropped-bg02-4.png?w=200"
            href={`${pageRoutes.archive}/${volume?.slug}`}
          />
        ))}
      </div>
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

ArchiveOverviewPage.getLayout = (page) => <ArchiveLayout>{page}</ArchiveLayout>;
export default ArchiveOverviewPage;

// =====================================================
// Subcomponents
// =====================================================
type VolumeCardType = {
  volumeCoverUrl?: Maybe<string>;
  title?: Maybe<string>;
  subtitle?: Maybe<string>;
  href: string;
};

const VolumeCard: FC<VolumeCardType> = (props) => {
  const { volumeCoverUrl, title, subtitle, href } = props;
  const { saveArchiveWasPrevious } = useArchiveWasPrevious();
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-y-4 max-w-[242px]"
      onClick={() => saveArchiveWasPrevious()}
    >
      <div className="-inset-3 bg-primary-200/10 absolute rounded-lg group-hover:opacity-100 opacity-0 transition" />

      <div className="relative rounded-md overflow-hidden bg-white aspect-[9/13]">
        <img
          src={volumeCoverUrl ?? ''}
          alt={title ?? ''}
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="relative">
        <h3 className="font-medium text-dark-500 mb-1">{title}</h3>
        <p className="font-medium text-dark-400">{subtitle}</p>
      </div>
    </Link>
  );
};
