import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { useQuery } from '~gqty/index';
import { RichText } from '@/components/RichText';

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
    <div className="px-9 max-w-7xl w-full mx-auto flex flex-col">
      <div
        className="h-48 w-full bg-red-200"
        style={{
          backgroundImage: `url('${newsArticle?.featureImage()?.url}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <h1 className="font-bold text-xl">News Page {newsArticle?.title}</h1>
      <RichText content={newsArticle?.content({ depth: 0 })} className="" />
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
