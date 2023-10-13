import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { useQuery } from '~gqty';
import Link from 'next/link';
import { container } from '@/styles/variants';
import Image from 'next/image';
import { extractTextFromContent } from '@/utilities/extractTextFromContext';
import { FC, useRef, useState } from 'react';
import { formatDate } from '@/utilities/formatDate';
import useSizeChange from '@/hooks/useSizeChange';
import pageRoutes from '@/lib/pageRoutes';

const NewsOverviewPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ a }) => {
  const { allNews, $state } = useQuery();

  const news = allNews({
    page: 1,
    sort: 'publishedDate',
  });
  /** The first news. */
  const featuredNews = news?.docs?.at(0);
  /** ALl the other news (besides the featured). */
  const otherNews = news?.docs?.slice(1);

  return (
    <div className={container({ class: 'gap-y-10 pt-5 pb-20' })}>
      <FeaturedNewsCard
        href={`${pageRoutes.news}/${featuredNews?.slug}`}
        contentString={extractTextFromContent(featuredNews?.content())
          .join(' ')
          .slice(0, 250)
          .trim()}
        publishedDate={featuredNews?.publishedDate ?? featuredNews?.createdAt}
        image={{
          url: featuredNews?.featureImage()?.url,
          alt: featuredNews?.featureImage()?.alt ?? '',
        }}
        title={featuredNews?.title}
      />

      <h2 className="text-3xl text-primary-500 font-bold">Latest Happenings</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {otherNews?.map((newsItem) => (
          <NewsCard
            key={newsItem?.id}
            title={newsItem?.title ?? ''}
            image={{
              url: newsItem?.featureImage()?.url ?? '',
              alt: newsItem?.featureImage()?.alt ?? undefined,
            }}
            href={`${pageRoutes.news}/${newsItem?.slug}`}
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

NewsOverviewPage.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default NewsOverviewPage;

// =========================
// Subcomponent (Featured News)
// =========================
type FeaturedNewsCardType = {
  title?: string;
  href: string;
  publishedDate?: string | null;
  contentString: string;
  image: {
    url?: string | null;
    alt?: string | null;
  };
};

const FeaturedNewsCard: FC<FeaturedNewsCardType> = (props) => {
  const { title, href, publishedDate, contentString, image } = props;

  const featuredOverlayRef = useRef<HTMLDivElement>(null);
  const featuredOverlaySize = useSizeChange(featuredOverlayRef);

  /**
   * A special state for indicating that the element is hovered. The shape is
   * different so I can't just use a different way to setHoverred.
   */
  const [hovered, setHoverred] = useState<boolean>(false);

  const hoverProps = {
    onMouseEnter: () => setHoverred(true),
    onMouseLeave: () => setHoverred(false),
  };

  return (
    <div className={`${hovered ? 'group ' : ''}relative`}>
      <Link
        href={href}
        className="relative block h-80 w-full object-cover overflow-hidden rounded-md bg-primary-50"
        {...hoverProps}
      >
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition"
          src={image.url ?? ''}
          fill
          alt={image?.alt ?? ''}
        />
      </Link>
      <div className="flex justify-center">
        <div
          ref={featuredOverlayRef}
          className="w-11/12 p-5 absolute bg-[#F9F9FF] bottom-0 group-hover:bg-primary-500 transition"
          {...hoverProps}
        >
          <h2 className="text-dark-500 text-2xl font-bold group-hover:text-white transition">
            {title}
          </h2>
          <p className="text-dark-400 group-hover:text-primary-200 transition">
            {contentString}
            ...
          </p>
          <div className="h-8" />
          <Link
            href={href}
            className="text-primary-300 font-bold text-sm flex justify-between"
          >
            <span>{formatDate(publishedDate)}</span>
            <span className="group-hover:opacity-100 group-hover:translate-y-0 translate-y-5 opacity-0 transition">
              Read More
            </span>
          </Link>
        </div>
      </div>
      <div
        className="h-20"
        style={{ height: (featuredOverlaySize?.height ?? 2) / 2 }}
      />
    </div>
  );
};

// =========================
// Subcomponent (News Card)
// =========================
type NewsCardType = {
  title: string;
  href: string;
  image: {
    alt?: string;
    url: string;
  };
};

const NewsCard: FC<NewsCardType> = (props) => {
  const { title, href, image } = props;

  return (
    <Link href={href} className="flex flex-col gap-y-4 group">
      <div className="relative aspect-[5/4] overflow-hidden rounded-md transition bg-primary-50">
        <Image
          src={image.url}
          fill
          alt={image.alt ?? title}
          className="object-cover group-hover:scale-105 transition"
        />
      </div>
      <h3 className="text-dark-700 font-medium line-clamp-4">{title}</h3>
    </Link>
  );
};
