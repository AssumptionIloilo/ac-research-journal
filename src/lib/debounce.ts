/** Utility for debouncing. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = (callback: () => any, wait: number) => {
  let timeoutId: number | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any) => {
    window.clearTimeout(timeoutId ?? undefined);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};
