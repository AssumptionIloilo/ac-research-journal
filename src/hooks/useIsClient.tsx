import { useMemo } from 'react';

export default function useIsClient() {
  return useMemo(() => typeof window !== 'undefined', []);
}
