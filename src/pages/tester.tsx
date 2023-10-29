import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';

import VerticalLayout from '@/components/layouts/VerticalLayout';
import useMounted from '@/hooks/useMounted';
import { NextPageWithLayout } from '@/pages/_app';
import { button } from '@/styles/variants';
import { useLazyQuery, useQuery, useTransactionQuery } from '~gqty';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const TesterPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { a } = props;

  const { data, isCalled } = useTransactionQuery(
    (query) => {
      return {
        awesome: query.Volumes({ limit: 1 })?.docs?.map((vol) => ({
          title: vol?.title,
          id: vol?.id,
        })),
      };
    },
    {
      suspense: false,
      skip: typeof window === 'undefined' ? true : false,
    },
  );

  const [counter, setCounter] = useState<number>(1);

  const hasMounted = useMounted();

  if (!hasMounted) return null;

  return (
    <div className="flex flex-col">
      <div>
        <button onClick={() => setCounter(counter + 1)} className={button()}>
          Increment {counter}
        </button>
        {JSON.stringify(data)}
        {data?.awesome?.at(0)?.id}
        {isCalled ? 'called' : 'no'}
        {/* {Volumes({ limit: 1 })?.docs?.map((volume, i) => (
          <>
            {volume?.volumePdf()?.url}
            <Document
              key={volume?.id ?? 0}
              file={volume?.volumePdf()?.url ?? ''}
            >
              <Page key={1} pageNumber={1} />
            </Document>
          </>
        ))} */}
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

TesterPage.getLayout = (page) => <VerticalLayout>{page}</VerticalLayout>;
export default TesterPage;

// export default dynamic(() => Promise.resolve(TesterPage), {
//   ssr: false,
// });
