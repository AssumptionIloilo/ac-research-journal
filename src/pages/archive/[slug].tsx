import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import VerticalLayout from '@/components/layouts/VerticalLayout';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { Volume, useLazyQuery, useQuery } from '~gqty';
import {
  FC,
  PropsWithChildren,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import HTMLPageFlip from '@/components/HTMLPageFlip';

import HTMLFlipBook from 'react-pageflip';
import { OnDocumentLoadSuccess } from 'react-pdf/dist/cjs/shared/types';
import useMounted from '@/hooks/useMounted';
import { button } from '@/styles/variants';
import ArchiveLayout from '@/components/layouts/ArchiveLayout';
import { Icon } from '@iconify/react';
import { RichText } from '@/components/RichText';
import Image from 'next/image';
import Link from 'next/link';
import pageRoutes from '@/lib/pageRoutes';
import { useRouter } from 'next/navigation';
import useArchiveWasPrevious from '@/hooks/useArchiveWasPrevious';
import toast from 'react-hot-toast';
import useIsClient from '@/hooks/useIsClient';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const ArchivePage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { a, slug } = props;

  const { Volumes } = useQuery();

  const volume = useMemo<
    Pick<Volume, 'id' | 'title' | 'slug'> & { pdfUrl?: string | null }
  >(() => {
    const _volume = Volumes({ where: { slug: { equals: slug } } })?.docs?.at(0);

    return {
      id: _volume?.id,
      pdfUrl: _volume?.volumePdf()?.url,
      slug: _volume?.slug,
      title: _volume?.title,
      aboutContent: _volume?.about(),
    };
  }, [Volumes]);

  return <DocumentFlipBook volume={volume} />;
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

type DocumentFlipBookType = {
  volume?:
    | (Pick<Volume, 'id' | 'title' | 'slug'> & {
        pdfUrl?: string | null;
        aboutContent?: any;
      })
    | null;
};

const DocumentFlipBook: FC<DocumentFlipBookType> = (props) => {
  const { volume } = props;

  const [count, setCount] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageNumbers, setPageNumbers] = useState<number>();
  const [pageSize, setPageSize] = useState<{ width: number; height: number }>();

  const mounted = useMounted();

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

  const [range, setRange] = useState(1);

  const { archiveWasPrevious, removeArchiveWasPrevious } =
    useArchiveWasPrevious();
  const router = useRouter();

  const isClient = useIsClient();

  if (!mounted) return null;

  return (
    <div className="flex-1 flex flex-col px-16 py-16 bg-[#EDF1FD]">
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
        <div className="relative rounded-md overflow-hidden bg-white aspect-[9/13] flex-shrink-0">
          <img
            src="https://publiscience684370512.files.wordpress.com/2019/05/cropped-bg02-4.png?w=200"
            className="object-cover object-center w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 className="font-bold text-2xl">{volume?.title}</h2>
          <h3 className="font-semibold">About the Cover</h3>
          <RichText
            content={volume?.aboutContent}
            className="text-sm text-dark-400"
          />
          <Link
            href={volume?.pdfUrl ?? '404'}
            target="_blank"
            download={volume?.title}
            className={button({
              class: 'self-start flex items-center gap-x-1',
            })}
            onClick={(e) => {
              // Prevent the href to work when clicking. But middle click will still work.
              e.preventDefault();

              async function download() {
                const response = await fetch(volume?.pdfUrl ?? '');
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
              className="relative top-[1px]"
            />
            <span>Download Volume</span>
          </Link>
        </div>
      </section>
      <div className="h-12" />
      {/* <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={range}
        onChange={(e) => setRange(parseFloat(e.target.value))}
      />
      {range.toString()}%{volume?.title}
      <div>{volume?.pdfUrl}</div>
      <div>
        <div
          className="bg-primary-400 h-2"
          style={{
            width: `${currentPage / (pageNumbers ?? 1)}%`,
          }}
        />
      </div> */}
      {/* Do not server render this. Heavy. */}
      {isClient && (
        <Document file={volume?.pdfUrl} onLoadSuccess={handlePDFLoadSuccess}>
          <div className="relative bottom-40 flex mx-auto justify-center overflow-hidden py-40 pointer-events-none">
            <FlipBook
              pageNumbers={pageNumbers}
              pageSize={pageSize}
              onPageFlip={handlePageFlip}
              sizeModifier={range}
            />
          </div>
        </Document>
      )}
    </div>
  );
};

// ArchivePage.getLayout = (page) => (
//   <ArchiveLayout collapsed={true}>{page}</ArchiveLayout>
// );
export default ArchivePage;

// SUBCOMPONENT 2:
type FlipBookType = {
  onPageFlip?: (event: { data: any }) => void;
  pageSize?: {
    width: number;
    height: number;
  };
  pageNumbers?: number;
  /** perecent size modifier */
  sizeModifier?: number;
};

const FlipBook: FC<FlipBookType> = memo((props) => {
  const { pageSize, pageNumbers, onPageFlip, sizeModifier } = props;

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
    [pageSize?.height, sizeModifier],
  );

  const width = useMemo(
    () => applySizeModification(pageSize?.width, sizeModifier),
    [pageSize?.width, sizeModifier],
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
      {!!(pageNumbers && pageSize) && (
        <div
          style={{ width: width! * 2, height: height }}
          className="relative bg-primary-100 pointer-events-auto"
        >
          <div className="absolute grid grid-cols-2 inset-0">
            <div className="grid place-items-center w-full h-full text-primary-500 text-center p-8">
              Click on the Cover to start reading! 👉
            </div>
            <div className="grid place-items-center w-full h-full text-primary-500 text-center p-8">
              Done! 🎉
            </div>
          </div>
          {/* @ts-ignore */}
          <HTMLFlipBook
            key={`${width}-${height}`}
            width={width!}
            height={height!}
            size="stretch"
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
