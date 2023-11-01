/* eslint-disable import/named */
import { cacheExchange, Client, fetchExchange, ssrExchange } from 'urql';

// =====================
// FOR URQL

const isServerSide = typeof window === 'undefined';

// The `ssrExchange` must be initialized with `isClient` and `initialState`
const ssrCache = ssrExchange({
  isClient: !isServerSide,
  initialState: !isServerSide ? (window as any).__URQL_DATA__ : undefined,
});

const client = new Client({
  url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`,
  exchanges: [cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () => {
    return { headers: {} };
  },
});
// =====================

export { client, ssrCache };
