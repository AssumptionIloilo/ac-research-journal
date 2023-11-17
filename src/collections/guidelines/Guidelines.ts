import type { CollectionConfig } from 'payload/types';

const Guidelines: CollectionConfig = {
  slug: 'guidelines',
  admin: {
    useAsTitle: 'name',
    description:
      'This is where you write guidelines for students. It can serve as their wiki page of what to do in research class.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        description:
          'The title for this guide. e.g. "How to do Review of Related Literature',
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        description: 'Write anything about your guide.',
      },
    },
    {
      name: 'orderNumber',
      type: 'number',
      defaultValue: 100,
      admin: {
        step: 1,
        position: 'sidebar',
        description:
          'By default, all order numbers are 100. But you can prioritize others to appear first by manually changing this to 1, 2, 3, etc.',
      },
    },
  ],
};

export default Guidelines;
