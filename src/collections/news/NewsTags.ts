import { CollectionConfig } from 'payload/types';

const NewsTags: CollectionConfig = {
  slug: 'news-tags',
  admin: {
    useAsTitle: 'name',
    description:
      'Tags related to the news post you make. e.g. Research, Story, etc.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
};

export default NewsTags;
