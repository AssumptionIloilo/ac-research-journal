import { FC } from 'react';
import {
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
} from 'next';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useQuery } from 'urql';

import VerticalLayout from '@/components/layouts/VerticalLayout';
import { RichText } from '@/components/RichText';
import { graphql } from '@/gql';
import { AllNewsSlugsDocument, NewsPageBySlugDocument } from '@/gql/graphql';
import { client, ssrCache } from '@/lib/urqlClient';
import { NextPageWithLayout } from '@/pages/_app';
import { button, container } from '@/styles/variants';
import { formatDate } from '@/utilities/formatDate';

// =============================================================================
// Server-Side Calls from the Page.
// =============================================================================
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client
    .query(AllNewsSlugsDocument, {}) // no need for request-policy, this only gets called once.
    .toPromise();

  const paths: GetStaticPathsResult['paths'] = [];

  data?.allNews?.docs?.forEach((newsItem) => {
    if (!newsItem?.slug) return;

    paths.push({
      params: {
        slug: newsItem.slug,
      },
    });
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { slug } = ctx.params as { slug: string };

  await client
    .query(
      NewsPageBySlugDocument,
      { slug: slug },
      { requestPolicy: 'network-only' },
    )
    .toPromise();

  return {
    props: { slug, urqlState: ssrCache.extractData() },
    revalidate: 600,
  };
}

// =============================================================================
// News Page (For Querying & Hydrating)
// =============================================================================
const NewsPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getStaticProps>
> = (props) => {
  const { slug } = props;

  const [{ data }] = useQuery({
    query: NewsPageBySlugDocument,
    variables: {
      slug: slug,
    },
  });

  const newsArticle = data?.allNews?.docs?.at(0);

  return (
    <div className={container({ class: 'pt-10 pb-20 gap-y-12' })}>
      <NextSeo
        title={newsArticle?.title}
        openGraph={{
          images: newsArticle?.featureImage?.url
            ? [
                {
                  url: newsArticle.featureImage.url,
                },
              ]
            : undefined,
        }}
      />
      <header className="flex flex-col gap-y-8">
        <h1 className="font-bold text-2xl max-w-lg mx-auto text-center">
          {newsArticle?.title}
        </h1>
        <div className="flex gap-x-2 justify-center">
          <div className="relative w-10 h-10">
            <Image
              src={newsArticle?.author?.avatarImage?.url ?? ''}
              alt={newsArticle?.author?.name ?? 'author profile'}
              width={40}
              height={40}
              className="object-cover w-full h-full rounded-full bg-primary-300 flex-shrink-0"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-dark-800 font-medium">
              {newsArticle?.author?.name}
            </span>
            <span className="text-sm text-dark-400 font-medium">
              {formatDate(newsArticle?.publishedDate)}
            </span>
          </div>
        </div>
        <div
          className="relative h-80 w-full bg-primary-50 rounded-md overflow-hidden"
          style={{
            backgroundImage: `url('${newsArticle?.featureImage?.url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Image
            alt={newsArticle?.featureImage?.alt ?? ''}
            src={newsArticle?.featureImage?.url ?? ''}
            fill
            className="object-cover"
          />
        </div>
      </header>

      <div className="max-w-4xl mx-auto w-full">
        <RichText content={newsArticle?.content} />
      </div>
    </div>
  );
};

NewsPage.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default NewsPage;

// // =============================================================================
// // NewsPageComponent (For Rendering Data)
// // =============================================================================
// type NewsPageComponentProps = {
//   slug: string;
// };

// const NewsPageComponent: FC<NewsPageComponentProps> = (props) => {
//   return (

//   );
// };
