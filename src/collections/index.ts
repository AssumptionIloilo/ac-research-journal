/**
 * This file contains all the collections to be used for the CMS.
 *
 * You are required to organize the collections here to their respective groups.
 * Just edit `groups`
 *
 * The exported `collections` will be the final variable.
 */

import { CollectionConfig } from 'payload/types';

// Collections
import Users from './management/Users';
import Media from './management/Media';
import Pages from './Pages';
import NewsTags from './news/NewsTags';
import News from './news/News';

type GroupedCollections = Record<string, CollectionConfig[]>;
export const groups: GroupedCollections = {
  Management: [Media, Users],
  'News & Stories': [News, NewsTags],
  Collections: [Pages],

  // news: 'News & Stories',
  // archive: 'Journal Archive',
  // guidelines: 'Guidelines',
  // management: 'Management',
};

/**
 * Collections with their Groups Applied to them.
 */
const appliedGroups = Object.keys(groups).map((groupKey) => {
  return groups[groupKey].map((collection) => ({
    ...collection,
    admin: {
      ...collection.admin,
      group: groupKey,
    },
  }));
});

/**
 * Final Collections Config Array with respective groups.
 */
const collections: CollectionConfig[] = appliedGroups.filter((arr) => arr.length > 0).flat();

export default collections;
