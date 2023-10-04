import { CollectionConfig } from 'payload/types';
import formatSlug from '../../utilities/formatSlug';
import { makeDescriptionWithHref } from '../../components/cms/descriptions/makeDescriptionWithHref';
import SlugFieldForTitle from '../../components/cms/SlugField/SlugFieldForTitle';

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
    },
    {
      name: 'about',
      type: 'richText',
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
        mimeType: { contains: 'pdf' },
      },
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
        components: {
          Field: SlugFieldForTitle,
        },
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
  ],
};

export default Volumes;
