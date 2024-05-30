import { FC, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import qs from 'querystring';
import { useQuery } from 'urql';

import Badge from '@/components/Badge';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import {
  GetAllNewsDocument,
  GetAllNewsQuery,
  GetMainNewsDocument,
  GetNewsTagsDocument,
} from '@/gql/graphql';
import useSizeChange from '@/hooks/useSizeChange';
import pageRoutes from '@/lib/pageRoutes';
import { cn } from '@/lib/utils';
import { NextPageWithLayout } from '@/pages/_app';
import { container } from '@/styles/variants';
import { extractTextFromContent } from '@/utilities/extractTextFromContext';
import { formatDate } from '@/utilities/formatDate';

const NewsOverviewPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ a }) => {
  /** For navigation only. */
  const router = useRouter();

  /** For searchParams (server-side compatible in Next.JS) */
  const searchParams = useSearchParams();

  /** Search Params in /news page. */
  const pageSearch = Number(searchParams.get('page')) || 1;
  const tagsSearch = useMemo(() => {
    return searchParams.getAll('tags');
  }, [searchParams]);

  // ===========================================================================
  // Queries
  // ===========================================================================

  const [newsQuery] = useQuery({
    query: GetAllNewsDocument,
    variables: {
      limit: 15,
      page: pageSearch,
      tagIds: tagsSearch.length > 0 ? tagsSearch : undefined,
    },
  });

  const [newsTagsQuery] = useQuery({
    query: GetNewsTagsDocument,
  });

  /** Derived state from newsTagsQuery. (Used as input for mainNewsQuery) */
  const mainNewsTagId = useMemo(
    () =>
      newsTagsQuery?.data?.NewsTags?.docs?.find((tag) => tag?.name === 'MAIN')
        ?.id,
    [newsTagsQuery?.data?.NewsTags?.docs],
  );
  const [mainNewsQuery] = useQuery({
    query: GetMainNewsDocument,
    variables: {
      mainNewsTagId: mainNewsTagId,
    },
    pause: !mainNewsTagId,
  });

  // ===========================================================================
  // Derived States
  // ===========================================================================

  type NewsDataType = NonNullable<
    NonNullable<NonNullable<GetAllNewsQuery['allNews']>['docs']>[0]
  >;

  /** @ts-ignore A single derived state for all the news. */
  const newsToDisplay: {
    /** Will either show: Main Story or 'Latest' Story if no main stories. */
    bigCard: NewsDataType;
    /** Will be null when there's no other 'main stories' */
    mainStories?: NewsDataType[];
    /** Will show ALL the stories. */
    otherStories: NewsDataType[];
  } = useMemo(() => {
    // 1. If Main News exists
    if (mainNewsQuery?.data?.allNews?.docs?.length) {
      return {
        bigCard: mainNewsQuery?.data?.allNews?.docs?.at(0),
        mainStories: mainNewsQuery?.data?.allNews?.docs?.slice(1),
        otherStories: newsQuery?.data?.allNews?.docs,
      };
    }

    // 2. If Main News Doesn't exist. Fall back everything to otherNews
    return {
      bigCard: newsQuery?.data?.allNews?.docs?.at(0),
      // mainStories: newsQuery?.data?.allNews?.docs?.slice(1, 4),
      otherStories: newsQuery?.data?.allNews?.docs?.slice(1),
    };
  }, [mainNewsQuery?.data?.allNews?.docs, newsQuery?.data?.allNews?.docs]);

  // ===========================================================================
  // Functions
  // ===========================================================================

  /** Whenever a tag button is clicked in the 'filters' */
  function handleTagClick(tagId: string) {
    // 1. Parse URL
    const oldURL = new URL(window.location.href);

    /** Get search params without the `?` */
    const oldSearchString = oldURL.search.replace('?', '');

    const oldSearchObject = qs.parse(oldSearchString);

    // Cleaning Input
    if (!Array.isArray(oldSearchObject?.tags)) {
      // When only 1 item
      // @ts-ignore
      if (oldSearchObject?.tags) oldSearchObject.tags = [oldSearchObject.tags];
      // When undefined
      if (!oldSearchObject?.tags) oldSearchObject.tags = [];
    }

    // 2.1. Remove
    if (oldSearchObject.tags?.includes(tagId)) {
      // @ts-ignore
      oldSearchObject.tags = oldSearchObject.tags.filter(
        (tag: any) => tag !== tagId,
      );
    }
    // 2.2. Add
    // @ts-ignore
    else oldSearchObject.tags.push(tagId);

    const newSearchString = qs.stringify(oldSearchObject);

    // Navigate
    // 1. If empty, remove all search queries.
    if (newSearchString === '') {
      router.replace(
        window.location.origin + window.location.pathname,
        undefined,
        { scroll: false },
      );
      return;
    }
    // 2. If Not empty, add the new search query
    router.replace(
      window.location.origin + window.location.pathname + '?' + newSearchString,
      undefined,
      { scroll: false },
    );
  }

  // ===========================================================================
  // Returns
  // ===========================================================================

  return (
    <div className={container({ class: 'gap-y-10 pt-5 pb-20' })}>
      <NextSeo title="News" />
      <FeaturedNewsCard
        loading={mainNewsQuery?.fetching || newsTagsQuery?.fetching}
        href={`${pageRoutes.news}/${newsToDisplay?.bigCard?.slug}`}
        contentString={extractTextFromContent(newsToDisplay?.bigCard?.content)
          .join(' ')
          .slice(0, 250)
          .trim()}
        publishedDate={
          newsToDisplay?.bigCard?.publishedDate ??
          newsToDisplay?.bigCard?.createdAt
        }
        image={{
          url: newsToDisplay?.bigCard?.featureImage?.url,
          alt: newsToDisplay?.bigCard?.featureImage?.alt ?? '',
        }}
        title={newsToDisplay?.bigCard?.title}
      />

      {/* ====================================================================== */}

      {newsToDisplay?.mainStories && newsToDisplay?.mainStories?.length > 0 && (
        <>
          <h2 className="text-3xl text-primary-500 font-bold">Main Stories</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            {newsToDisplay?.mainStories?.map((news) => (
              <NewsCard
                key={news?.id}
                href={`${pageRoutes.news}/${news?.slug}`}
                image={{
                  url: news?.featureImage?.url ?? '',
                  alt: news?.featureImage?.alt ?? '',
                }}
                title={news?.title}
                date={news?.publishedDate}
              />
            ))}
          </div>
        </>
      )}

      {/* ====================================================================== */}

      <h2 className="text-3xl text-primary-500 font-bold">All Stories</h2>

      {/* Tag Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        <span>Filter:</span>
        <button
          onClick={() => {
            router.replace(
              window.location.origin + window.location.pathname,
              undefined,
              { scroll: false },
            );
          }}
        >
          <Badge
            className={cn(
              tagsSearch?.length === 0
                ? 'bg-primary-500 text-white'
                : 'bg-gray-50 text-gray-500',
            )}
          >
            All
          </Badge>
        </button>
        {newsTagsQuery?.data?.NewsTags?.docs?.map((newsTag) => (
          <button
            key={newsTag?.id}
            onClick={() => {
              handleTagClick(newsTag?.id!);
            }}
          >
            <Badge
              className={cn(
                tagsSearch.includes(newsTag?.id!)
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-50 text-gray-500',
              )}
            >
              {newsTag?.name}
            </Badge>
          </button>
        ))}
      </div>

      {/* EMPTY */}
      {!newsToDisplay?.otherStories ||
        (newsToDisplay?.otherStories?.length === 0 && (
          <div className="">🥲 No news data found.</div>
        ))}

      {/* EXISTS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {newsToDisplay?.otherStories?.map((newsItem) => (
          <NewsCard
            key={newsItem?.id}
            title={newsItem?.title ?? ''}
            image={{
              url: newsItem?.featureImage?.url ?? '',
              alt: newsItem?.featureImage?.alt ?? undefined,
            }}
            href={`${pageRoutes.news}/${newsItem?.slug}`}
            date={newsItem?.publishedDate}
          />
        ))}
      </div>

      <div className="flex gap-x-2">
        <button
          className="disabled:opacity-20"
          disabled={!newsQuery?.data?.allNews?.hasPrevPage}
          onClick={() => {
            if (!newsQuery?.data?.allNews?.hasPrevPage) return;

            const newPageSearch = pageSearch - 1;

            const url = new URL(window.location.href);

            url.searchParams.set('page', newPageSearch.toString());

            router.replace(url, undefined, { scroll: false });
          }}
        >
          Previous
        </button>
        <button>
          {pageSearch} / {newsQuery?.data?.allNews?.totalPages}
        </button>
        <button
          className="disabled:opacity-20"
          disabled={!newsQuery?.data?.allNews?.hasNextPage}
          onClick={() => {
            if (!newsQuery?.data?.allNews?.hasNextPage) return;

            const newPageSearch = pageSearch + 1;

            const url = new URL(window.location.href);

            url.searchParams.set('page', newPageSearch.toString());

            router.replace(url, undefined, { scroll: false });
          }}
        >
          Next
        </button>
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
  loading?: boolean;
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
  const {
    title,
    href,
    publishedDate,
    contentString,
    image,
    loading = false,
  } = props;

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
        {loading ? (
          <div className="inset-0 absolute bg-primary-100" />
        ) : (
          <Image
            className="w-full h-full object-cover group-hover:scale-105 transition"
            src={image.url ?? ''}
            fill
            alt={image?.alt ?? ''}
          />
        )}
      </Link>
      <div className="flex justify-center">
        <div
          ref={featuredOverlayRef}
          className="w-11/12 p-5 absolute bg-[#F9F9FF] bottom-0 group-hover:bg-primary-500 transition"
          {...hoverProps}
        >
          <h2 className="text-dark-500 text-2xl font-bold group-hover:text-white transition">
            {loading ? 'Loading...' : title}
          </h2>

          {loading ? (
            'Loading...'
          ) : (
            <p className="text-dark-400 group-hover:text-primary-200 transition">
              {contentString}
              ...
            </p>
          )}
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
  date: string;
};

const NewsCard: FC<NewsCardType> = (props) => {
  const { title, href, image } = props;

  return (
    <Link href={href} className="flex flex-col gap-y-4 group">
      <div className="relative aspect-[5/4] overflow-hidden rounded-md transition bg-primary-100">
        <Image
          src={image.url}
          fill
          alt={image.alt ?? title}
          className="object-cover group-hover:scale-105 transition"
        />
      </div>
      <div>
        <p className="text-xs text-gray-400">{formatDate(props.date)}</p>
        <h3 className="text-dark-700 font-medium line-clamp-4">{title}</h3>
      </div>
    </Link>
  );
};
