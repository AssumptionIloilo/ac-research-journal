import { useEffect } from 'react';
import { Router } from 'next/router';
import NProgress from 'nprogress';

export default function useNProgress() {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });
  }, []);
}
