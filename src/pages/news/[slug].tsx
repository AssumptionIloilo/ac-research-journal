import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { useQuery } from '~gqty';
import { RichText } from '@/components/RichText';
import { container } from '@/styles/variants';
import { formatDate } from '@/utilities/formatDate';
import NewsTags from '@/collections/news/NewsTags';
import Image from 'next/image';

const NewsPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { slug } = props;

  const { allNews } = useQuery();

  const newsArticle = allNews({
    where: {
      slug: {
        equals: slug,
      },
    },
  })?.docs?.[0];

  return (
    <div className={container({ class: 'pt-10 pb-20 gap-y-12' })}>
      <header className="flex flex-col gap-y-8">
        <h1 className="font-bold text-2xl max-w-lg mx-auto text-center">
          {newsArticle?.title}
        </h1>
        <div className="flex gap-x-2 justify-center">
          <div className="w-10 h-10 rounded-full bg-primary-300" />
          <div className="flex flex-col">
            <span className="text-sm text-dark-800 font-medium">
              {newsArticle?.author?.name}asd
            </span>
            <span className="text-sm text-dark-400 font-medium">
              {formatDate(newsArticle?.publishedDate)}
            </span>
          </div>
        </div>
        <div
          className="relative h-80 w-full bg-primary-50 rounded-md overflow-hidden"
          style={{
            backgroundImage: `url('${newsArticle?.featureImage()?.url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Image
            alt={newsArticle?.featureImage()?.alt ?? ''}
            src={newsArticle?.featureImage()?.url ?? ''}
            fill
            className="object-cover"
          />
        </div>
      </header>

      <RichText content={newsArticle?.content({ depth: 0 })} />
    </div>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { slug } = ctx.params as { slug: string };

  return {
    props: {
      a: 1,
      slug,
    },
  };
}

NewsPage.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default NewsPage;
