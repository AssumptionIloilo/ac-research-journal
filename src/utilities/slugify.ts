/** Utility function for converting a string into a slug.  */
export const slugify = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-/]+/g, '')
    .toLowerCase();
