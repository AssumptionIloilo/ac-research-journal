import type { CollectionConfig } from 'payload/types';

const VolumeTags: CollectionConfig = {
  slug: 'volume-tags',
  admin: {
    useAsTitle: 'name',
    description:
      'Tags related to the volumes you make to categorize them. e.g. Earth Science, Mathemtatics, Technology, etc.',
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
          'A unique tag name that you can attach on your volume to categorize them.',
      },
    },
  ],
  timestamps: false,
};

export default VolumeTags;
