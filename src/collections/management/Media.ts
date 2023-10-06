import path from 'path';
import type { CollectionConfig } from 'payload/types';
import { makeDescriptionWithTip } from '../../components/cms/descriptions/makeDescriptionWithTip';
import { makeDescriptionWithHref } from '../../components/cms/descriptions/makeDescriptionWithHref';

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    description: makeDescriptionWithTip({
      text: 'Store assets, images, and files here.',
      tip: "Tip: You can't rename file names, so make sure you properly named them before uploading.",
    }),
    listSearchableFields: ['fileName', 'alt'],
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
    // Specify the size name that you'd like to use as admin thumbnail
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: 'center',
        name: 'thumbnail',
      },
      {
        width: 900,
        height: 450,
        crop: 'center',
        name: 'sixteenByNineMedium',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      admin: {
        description:
          'Recommended: <Collection_Name> - <Purpose>. e.g. news - journal showcase event.',
      },
    },
  ],
};

export default Media;
