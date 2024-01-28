import type { CollectionConfig } from 'payload/types';

import { makeDescriptionWithHref } from '../../components/cms/descriptions/makeDescriptionWithHref';
import { makeSlugField } from '../../components/cms/SlugField/makeSlugField';
import formatSlug from '../../utilities/formatSlug';

const Archives: CollectionConfig = {
  slug: 'archives',
  admin: {
    defaultColumns: ['title'],
    useAsTitle: 'title',
    description: makeDescriptionWithHref({
      displayedText: 'Archived items found in',
      displayedHref: '/archive',
      href: '/archive',
    }),
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'archiveCover',
      label: 'Archive Cover (Image)',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Recommended Size: 720px(w) x 1080px(h)',
      },
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title of this archive.',
      },
    },
    {
      name: 'about',
      type: 'richText',
      admin: {
        description:
          'A longer description about what this archived item is about.',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'application/pdf' },
      },
      label: 'Archived PDF',
      admin: {
        description:
          'The downloadable PDF File that can also be a flipbook on the website.',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'archive-categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        components: {
          Field: (props: unknown) =>
            makeSlugField({
              fieldNameToSlug: 'title',
              fieldProps: props,
            }),
        },
        description: "A unique identifier for this archive item's page.",
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
  ],
};

export default Archives;
