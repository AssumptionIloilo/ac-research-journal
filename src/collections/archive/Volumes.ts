import { CollectionConfig } from 'payload/types';

import { makeDescriptionWithHref } from '../../components/cms/descriptions/makeDescriptionWithHref';
import { makeSlugField } from '../../components/cms/SlugField/makeSlugField';
import formatSlug from '../../utilities/formatSlug';

const Volumes: CollectionConfig = {
  slug: 'volumes',
  admin: {
    defaultColumns: ['title', 'author'],
    useAsTitle: 'title',
    description: makeDescriptionWithHref({
      displayedText: 'Volumes found in',
      displayedHref: '/archive',
      href: '/archive',
    }),
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'volumeCover',
      label: 'Volume Cover (Image)',
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
        description: 'Title of this volume.',
      },
    },
    {
      name: 'about',
      type: 'richText',
      admin: {
        description: 'A long description about what this volume is about.',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'volumePdf',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'application/pdf' },
      },
      label: 'Volume PDF',
      admin: {
        description:
          'The downloadable PDF File that can also be a flipbook on the website.',
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        components: {
          Field: (props: any) =>
            makeSlugField({
              fieldNameToSlug: 'title',
              fieldProps: props,
            }),
        },
        description: "A unique identifier for this volume's page.",
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
  ],
};

export default Volumes;
