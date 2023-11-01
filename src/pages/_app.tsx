/* eslint-disable import/named */
import type { ReactElement, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';

import '@/styles/globals.css';
import '@/styles/app.scss';
import '@/styles/nprogress.css';
import DefaultSeo from '@/components/cms/DefaultSeo';
import useNProgress from '@/hooks/useNProgress';
import { client, ssrCache } from '@/lib/urqlClient';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useNProgress();

  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Provider value={client}>
        <DefaultSeo />
        <Toaster
          position="bottom-center"
          toastOptions={{
            success: {
              iconTheme: {
                primary: '#5858B7',
                secondary: 'white',
              },
            },
          }}
        />
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}
