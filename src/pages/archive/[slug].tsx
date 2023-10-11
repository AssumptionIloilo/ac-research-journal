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
    };
  }, [Volumes]);

  return (
    <>
      <DocumentFlipBook volume={volume} />
    </>
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

type DocumentFlipBookType = {
  volume?:
    | (Pick<Volume, 'id' | 'title' | 'slug'> & { pdfUrl?: string | null })
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

  if (!mounted) return null;
  return (
    <div>
      <input
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
      </div>
      <Document file={volume?.pdfUrl} onLoadSuccess={handlePDFLoadSuccess}>
        <div className="flex mx-auto justify-center bg-gray-100 overflow-hidden py-32">
          <FlipBook
            pageNumbers={pageNumbers}
            pageSize={pageSize}
            onPageFlip={handlePageFlip}
            sizeModifier={range}
          />
        </div>
      </Document>
      <button className={button()} onClick={() => setCount(count + 1)}>
        CLICK ME TO CHANGE STATE {count}
      </button>
    </div>
  );
};

ArchivePage.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
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

  const bookRef = useRef(null);

  const resize = () => {
    bookRef.current;
  };

  return (
    <>
      {!!(pageNumbers && pageSize) && (
        <div
          style={{ width: width! * 2, height: height }}
          className="relative bg-primary-100"
        >
          <div className="absolute grid grid-cols-2 inset-0">
            <div className="grid place-items-center w-full h-full text-primary-500">
              Click on the Cover to start reading! 👉
            </div>
            <div className="grid place-items-center w-full h-full text-primary-500">
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
