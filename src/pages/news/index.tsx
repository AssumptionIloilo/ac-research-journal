import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { useQuery } from '~gqty/index';
import Link from 'next/link';
import { button } from '@/styles/variants';
import Image from 'next/image';

const NewsOverviewPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ a }) => {
  const { allNews, $state } = useQuery();

  const news = allNews({
    page: 1,
    sort: 'publishedDate',
  });

  return (
    <div className="w-full flex flex-col gap-y-10">
      {news?.docs?.map((newsItem) => (
        <div className="bg-yellow-900">
          <Image
            width={100}
            height={100}
            src={newsItem?.featureImage()?.url ?? ''}
            alt={newsItem?.title ?? ''}
          />
          <span>{newsItem?.author?.name}</span>
          <span>{newsItem?.tags?.map((tag) => tag.name)}</span>
          <Link href={`/news/${newsItem?.slug}`} className={button({})}>
            READ ARTICLE
          </Link>
        </div>
      ))}
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

NewsOverviewPage.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default NewsOverviewPage;
