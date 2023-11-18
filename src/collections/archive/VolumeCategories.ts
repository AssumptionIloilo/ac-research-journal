import type * as types from 'payload/types';

const VolumeCategories: types.CollectionConfig = {
  slug: 'volume-categories',
  admin: {
    useAsTitle: 'name',
    description:
      'Categories related to the volumes you make to categorize them. e.g. Earth Science, Mathemtatics, Technology, etc.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      unique: true,
      admin: {
        description:
          'A unique category name that you can attach on your volume to categorize them.',
      },
    },
  ],
  timestamps: false,
};

export default VolumeCategories;
