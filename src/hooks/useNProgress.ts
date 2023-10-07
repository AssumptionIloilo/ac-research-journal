import { Router } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';

export default function useNProgress() {
  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', (url) => {
      NProgress.done();
    });
  }, [Router]);
}
