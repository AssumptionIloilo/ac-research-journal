import path from 'path'
import type { CollectionConfig } from 'payload/types'
import MediaDescription from '../../components/cms/descriptions/MediaDescription'

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    description: MediaDescription,
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
        description: 'Recommended Alt: <Collection_Name> <Purpose>',
      },
    },
  ],
}

export default Media
