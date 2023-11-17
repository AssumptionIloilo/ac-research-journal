import { useEffect, useState } from 'react';

/**
 * @param delay 'mounted' value becomes true after `delay` milliseconds
 * @returns
 */
export default function useMounted(delay: number = 0) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mounted;
}
