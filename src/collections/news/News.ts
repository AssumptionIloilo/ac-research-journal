import { CollectionConfig } from 'payload/types';
import isAdmin from '../../utilities/collectionAccessControls/isAdmin';
import { extractTextFromContent } from '../../utilities/extractTextFromContext';
import { readingTime } from 'reading-time-estimator';
import formatSlug from '../../utilities/formatSlug';
import { makeDescriptionWithHref } from '../../components/cms/descriptions/makeDescriptionWithHref';
import SlugFieldForTitle from '../../components/cms/SlugField/SlugFieldForTitle';

const News: CollectionConfig = {
  slug: 'news',
  admin: {
    defaultColumns: ['title', 'author'],
    useAsTitle: 'title',
    description: makeDescriptionWithHref({
      displayedText: 'Blog posts appearing in',
      displayedHref: '/news',
      href: '/news',
    }),
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'featureImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      access: {
        update: isAdmin,
      },
      relationTo: 'users',
      admin: {
        position: 'sidebar',
        // condition: (data) => Boolean(data?.author),
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'news-tags',
      hasMany: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'readTime',
      type: 'number',
      defaultValue: 0,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
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
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        // Update Author
        if (operation === 'create') {
          if (req.user) {
            data.author = req.user.id;
            return data;
          }
        }
      },
      ({ req, operation, data }) => {
        // Change ReadTime
        const text = extractTextFromContent(data.content);

        const readTime = readingTime(text.join(' '), 129).minutes;

        data.readTime = readTime;

        return data;
      },
    ],
  },
};

export default News;
