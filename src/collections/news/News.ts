import { CollectionConfig } from 'payload/types';
import { readingTime } from 'reading-time-estimator';

import { makeDescriptionWithHref } from '../../components/cms/descriptions/makeDescriptionWithHref';
import { makeSlugField } from '../../components/cms/SlugField/makeSlugField';
import isAdmin from '../../utilities/collectionAccessControls/isAdmin';
import isAdminOrCurrentUser from '../../utilities/collectionAccessControls/isAdminOrCurrentUser';
import { extractTextFromContent } from '../../utilities/extractTextFromContext';
import formatSlug from '../../utilities/formatSlug';

const News: CollectionConfig = {
  slug: 'news',
  admin: {
    defaultColumns: ['title', 'author', 'status'],
    useAsTitle: 'title',
    description: makeDescriptionWithHref({
      displayedText: 'Blog posts appearing in',
      displayedHref: '/news',
      href: '/news',
    }),
  },
  access: {
    read: () => true,
    update: () => true,
    delete: isAdminOrCurrentUser,
  },
  fields: [
    {
      name: 'featureImage',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
      admin: {
        description: makeDescriptionWithHref({
          displayedText:
            'Will be used as the thumbnail for this news post. Tip: to optimize size, compress it before uploading with ',
          displayedHref: 'TinyJPG',
          href: 'https://tinyjpg.com',
        }),
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Title for your news post.',
      },
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
        description: 'Who wrote this news post.',
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
      admin: {
        description: 'Categorize your news post using tags.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        description:
          'Write anything about your news/story article. Tip: To create hard line breaks, SHIFT + ENTER.',
      },
    },
    {
      name: 'readTime',
      type: 'number',
      defaultValue: 0,
      admin: {
        readOnly: true,
        position: 'sidebar',
        description: ({ value }: any) =>
          `It will take ${
            value ?? 0
          } minutes to read based on the average reading speed.`,
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
        description:
          "Draft posts aren't visible on the website, but you can keep writing them. Set to publish to make it visible.",
      },
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        components: {
          Field: (fieldProps: any) =>
            makeSlugField({
              fieldNameToSlug: 'title',
              fieldProps,
            }),
        },
        description: "A unique identifier for this news post's page.",
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        // Update Author on Create
        if (operation === 'create') {
          if (req.user) {
            data.author = req.user.id;
            return data;
          }
        }
      },
      ({ req, operation, data }) => {
        // If no Author, update it to current.
        if (operation === 'update' && req.user && !data.author) {
          data.author = req.user.id;
          return data;
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
