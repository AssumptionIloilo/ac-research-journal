import { useEffect, useState } from 'react';

/**
 * Whenever parameter `value` changes, it will only trigger a change in
 * returned `debouncedValue` when `value` has not changed for `delay` milliseconds.
 *
 * NOTE: I have not tested this personally. Please fix if it has issues. If it
 * works, just remove this note.
 *
 * If you check `@lib/debounce`, I made a debounce utility for another purpose.
 * This one is for listening to a state parameter passed in the hook. Not sure
 * if you can use that utility here, but the clearTimeout in useEffect should
 * honestly do the job.
 */
export function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}
