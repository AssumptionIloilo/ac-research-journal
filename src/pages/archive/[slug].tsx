import {
  ComponentProps,
  FC,
  memo,
  PropsWithChildren,
  ReactPropTypes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import { OnDocumentLoadSuccess } from 'react-pdf/dist/cjs/shared/types';
import Select from 'react-select';
import { Icon } from '@iconify/react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NextSeo } from 'next-seo';
import { useQuery } from 'urql';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { RichText } from '@/components/RichText';
import { DocumentType } from '@/gql';
import {
  GetVolumeBySlugDocument,
  GetVolumeBySlugQuery,
  GetVolumesDocument,
} from '@/gql/graphql';
import useArchiveWasPrevious from '@/hooks/useArchiveWasPrevious';
import useMounted from '@/hooks/useMounted';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import pageRoutes from '@/lib/pageRoutes';
import { client, ssrCache } from '@/lib/urqlClient';
import { NextPageWithLayout } from '@/pages/_app';
import { button } from '@/styles/variants';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

// =============================================================================
// Server-Side Calls from the Page.
// =============================================================================
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { slug } = ctx.params as { slug: string };

  const { data } = await client
    .query(GetVolumeBySlugDocument, { slug: slug })
    .toPromise();

  return {
    props: {
      slug,
      urqlState: ssrCache.extractData(),
    },
  };
}

// =============================================================================
// Archive Page (For Querying & Hydrating)
// =============================================================================
const ArchivePage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { slug } = props;

  const [{ data }] = useQuery({
    query: GetVolumeBySlugDocument,
    variables: {
      slug,
    },
  });

  const volume = data?.Volumes?.docs?.at(0);

  return <ArchivePageComponent volume={volume} />;
};

// =============================================================================
// ArchivePageComponent (For Rendering Data)
// =============================================================================
type ArchivePageComponentProps = {
  volume?: NonNullable<
    NonNullable<GetVolumeBySlugQuery['Volumes']>['docs']
  >[number];
};

const ArchivePageComponent: FC<ArchivePageComponentProps> = (props) => {
  const { volume } = props;

  // =============================================================================
  // States
  // =============================================================================
  const router = useRouter();

  const mounted = useMounted();

  const windowWidth = useWindowWidth(600);

  const [range, setRange] = useState(1);

  const { archiveWasPrevious, removeArchiveWasPrevious } =
    useArchiveWasPrevious();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [pageNumbers, setPageNumbers] = useState<number>();

  const [pageSize, setPageSize] = useState<{ width: number; height: number }>();

  const [isPortrait, setIsPortrait] = useState<boolean>(false);

  // =============================================================================
  // Handlers
  // =============================================================================

  const handlePDFLoadSuccess: OnDocumentLoadSuccess = useCallback(
    async (loadResult): Promise<void> => {
      setPageNumbers(loadResult.numPages);

      const page = await loadResult.getPage(1);
      const width = page.view[2];
      const height = page.view[3];

      setPageSize({
        width,
        height,
      });
    },
    [],
  );

  const handlePageFlip = useCallback((event: { data: number }) => {
    setCurrentPage(event.data);
  }, []);

  const generateAutoFitSizeModifier = () => {
    if (!pageSize?.width) return 1;

    const padding = 150;

    // Calculate c such that (c * elementWidth) is approximately equal to windowWidth
    const c = (windowWidth - padding) / (pageSize.width * 2);

    return c;
  };

  // =============================================================================
  // Variables
  // =============================================================================

  const [sizeModifier, setSizeModifier] = useState<number>(1);

  const getSizeOptionDisabled = useCallback(
    (value: number) =>
      value * (pageSize?.width ?? 1) * 2 >= windowWidth ?? 1 ?? false,
    [pageSize?.width, windowWidth],
  );

  const sizeModifierOptions: {
    value: number | 'autofit';
    label: string;
    disabled?: boolean;
  }[] = useMemo(() => {
    const options = [
      {
        label: 'AutoFit',
        value: 'autofit' as const, // casted with `const` to it's a 'string literal' and not 'string'.
      },
      {
        label: '100%',
        value: 1,
      },
      {
        label: '75%',
        value: 0.75,
      },
      {
        label: '80%',
        value: 0.8,
      },
      {
        label: '50%',
        value: 0.5,
      },
    ];

    return options.map((option) => {
      // Never disabled for autofit.
      if (option.value === 'autofit') return option;

      // For number values (disabled)
      const disabled = getSizeOptionDisabled(option.value);

      if (disabled)
        return { ...option, label: `${option.label} (too big!)`, disabled };

      // FOr number values (enabled)
      return option;
    });
  }, [getSizeOptionDisabled]);

  const [selectedSizeModifierOption, setSelectedSizeModifierOption] =
    useState<typeof sizeModifierOptions[0]>();

  return (
    <div className="flex-1 flex flex-col py-16 bg-[EDF1FD]">
      <NextSeo
        title={volume?.title ?? 'Read Archive Volume'}
        description={`Read ${volume?.title ?? 'Archive Volume'}`}
      />
      <div className="px-16 flex flex-col">
        <Link
          href={pageRoutes.archive}
          className="self-start"
          onClick={(e) => {
            // so it doesn't actually open the link on href.
            // it will actually happen on JS. but middle-mouse click will still work.
            e.preventDefault();

            router.replace(pageRoutes.archive);
            if (archiveWasPrevious) router.back(); // replace and back.
            removeArchiveWasPrevious();
          }}
        >
          <Icon
            icon="uil:arrow-up"
            className="text-primary-500 -rotate-90"
            fontSize={40}
          />
        </Link>
        <h1 className="text-primary-500 text-3xl pt-8 pb-5 font-semibold">
          {volume?.title}
        </h1>
        <section className="flex gap-x-10">
          <div className="relative rounded-lg overflow-hidden bg-white aspect-[9/13] flex-shrink-0 w-60 shadow border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={volume?.volumeCover?.url ?? ''}
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-y-5">
            <h2 className="font-bold text-2xl">{volume?.title}</h2>
            <h3 className="font-semibold">About the Cover</h3>
            <RichText content={volume?.about} />
            <Link
              href={volume?.volumePdf?.url ?? '404'}
              target="_blank"
              download={volume?.title}
              className={button({
                class: 'self-start flex items-center gap-x-1',
              })}
              onClick={(e) => {
                // Prevent the href to work when clicking. But middle click
                // will still work.
                e.preventDefault();

                async function download() {
                  const response = await fetch(volume?.volumePdf?.url ?? '');
                  const blob = await response.blob();

                  const downloadLink = document.createElement('a');
                  downloadLink.href = window.URL.createObjectURL(blob);
                  downloadLink.download = volume?.title ?? 'Volume PDF';
                  downloadLink.click();
                }

                toast.promise(download(), {
                  loading: 'Downloading...',
                  error: 'Failed to download.',
                  success: `Downloaded ${volume?.title}!`,
                });
              }}
            >
              <Icon
                icon="material-symbols:sim-card-download-outline-rounded"
                className="relative top-[1px] flex-shrink-0"
              />
              <span className="truncate">Download Volume</span>
            </Link>
          </div>
        </section>
      </div>

      <div className="h-12" />

      {/* Size Changer */}
      <div className="px-16 flex gap-x-5 items-center">
        <Select
          isOptionDisabled={(option) => option.disabled ?? false}
          placeholder="Change Size"
          value={selectedSizeModifierOption}
          options={sizeModifierOptions}
          onChange={(value) => {
            if (value?.value === 'autofit') {
              const _sizeModifier = generateAutoFitSizeModifier();
              setSizeModifier(_sizeModifier);
              setSelectedSizeModifierOption({
                label: `${(_sizeModifier * 100).toFixed(2)}%`,
                value: _sizeModifier,
              });
              return;
            }

            setSizeModifier(value?.value ?? 1);
            setSelectedSizeModifierOption({
              label: value?.label ?? '',
              value: value?.value ?? 1,
            });
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#E6E6FA',
              primary50: '#ABACDB',
              primary: '#2E2FA5',
              primary75: '#03047A',
            },
          })}
        />

        <button
          className={button({ class: 'rounded-md' })}
          onClick={() => setIsPortrait(!isPortrait)}
        >
          {isPortrait ? 'View Two-Page' : 'View One-Page'}
        </button>
      </div>

      <div className="h-16" />

      {/* Do not server render this. Heavy. */}
      {mounted && (
        <Document
          file={volume?.volumePdf?.url}
          onLoadSuccess={handlePDFLoadSuccess}
        >
          <div className="relative bottom-40 flex flex-col items-center mx-auto justify-center py-40 pointer-events-none w-full overflow-hidden">
            <FlipBook
              isPortrait={isPortrait}
              pageNumbers={pageNumbers}
              pageSize={pageSize}
              onPageFlip={handlePageFlip}
              sizeModifier={sizeModifier}
            />
          </div>
        </Document>
      )}
    </div>
  );
};

export default ArchivePage;

// =============================================================================
// Subcomponent: (Flipbook)
// =============================================================================
type FlipBookType = {
  onPageFlip?: (event: { data: any }) => void;
  pageSize?: {
    width: number;
    height: number;
  };
  pageNumbers?: number;
  /** perecent size modifier */
  sizeModifier?: number;

  /** @defaultValue `false` */
  isPortrait?: boolean;
};

const FlipBook: FC<FlipBookType> = memo((props) => {
  const {
    pageSize,
    pageNumbers,
    onPageFlip,
    sizeModifier,
    isPortrait = false,
  } = props;

  const applySizeModification = useCallback(
    (size?: number, modifier?: number) => {
      if (!size) return undefined;

      if (!modifier) return size;

      return size * modifier;
    },
    [],
  );

  const height = useMemo(
    () => applySizeModification(pageSize?.height, sizeModifier),
    [applySizeModification, pageSize?.height, sizeModifier],
  );

  const width = useMemo(
    () => applySizeModification(pageSize?.width, sizeModifier),
    [applySizeModification, pageSize?.width, sizeModifier],
  );

  const renderedPages = useMemo(() => {
    if (!pageNumbers) return null;

    return [...Array(pageNumbers).keys()].map((pageNumber) => {
      return (
        <div className="w-full h-full bg-gray-50" key={pageNumber}>
          <Page pageNumber={pageNumber + 1} height={height} width={width} />
        </div>
      );
    });
  }, [pageNumbers, height, width]);

  return (
    <>
      {`${width}-width x ${height}-height`}
      {!!(pageNumbers && pageSize) && (
        <div
          style={{ width: width! * 2, height: height }}
          className="relative bg-primary-100 pointer-events-auto"
        >
          {isPortrait ? (
            <div className="absolute inset-0 flex items-center">
              <Icon
                icon="uil:arrow-left"
                className="left-0 absolute text-primary-300 mx-5"
                fontSize={80}
              />
              <Icon
                icon="uil:arrow-right"
                className="right-0 absolute text-primary-300 mx-5"
                fontSize={80}
              />
            </div>
          ) : (
            <div className="absolute grid grid-cols-2 inset-0">
              <div className="grid place-items-center w-full h-full text-primary-500 text-center p-8">
                Click on the Cover to start reading! 👉
              </div>
              <div className="grid place-items-center w-full h-full text-primary-500 text-center p-8">
                Done! 🎉
              </div>
            </div>
          )}

          {/* @ts-ignore */}
          <HTMLFlipBook
            key={`${width}-${height}-${isPortrait}`}
            className="carlo-antonio-taleon"
            style={{
              minHeight: 0,
              height: height,
            }}
            usePortrait={isPortrait}
            width={width!}
            height={height!}
            maxShadowOpacity={0.2}
            showCover
            onFlip={onPageFlip}
          >
            {renderedPages}
          </HTMLFlipBook>
        </div>
      )}
    </>
  );
});

//  DEBUGGING
// {/* <div>
// PAGE WIDTH: {pageSize?.width} <br />
// WINDOW WIDTH: {windowWidth} <br />
// PERCENT: {responsivePercent} <br />
// CALCULATED NEW PAGE:{' '}
// {pageSize?.width && pageSize.width * responsivePercent} <br />{' '}
// CALCULATED NEW BOOK:{' '}
// {pageSize?.width && 2 * pageSize.width * responsivePercent}
// <br />
// </div> */}
