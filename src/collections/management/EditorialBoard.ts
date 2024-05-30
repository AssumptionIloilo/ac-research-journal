import type { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';
import type { GlobalConfig } from 'payload/types';

import { makeDescriptionWithHref } from '../../components/cms/descriptions/makeDescriptionWithHref';
import { makeDescriptionWithTip } from '../../components/cms/descriptions/makeDescriptionWithTip';

const EditorialBoard: GlobalConfig = {
  slug: 'editorial-board',
  admin: {
    description: makeDescriptionWithHref({
      displayedText: 'Update the editorial board shown on',
      displayedHref: '/about',
      href: '/about',
    }),
    group: '⚙️ Management',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'boardGroups',
      type: 'array',
      admin: {
        description:
          'A "board group" single hierarchical group containing members.',
        components: {
          RowLabel: ({ data, index }: RowLabelArgs) => {
            return (
              data?.heading || `Board Group ${String(index).padStart(2, '0')}`
            );
          },
        },
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          admin: {
            placeholder: '(e.g. Editors-in-Chief)',
          },
        },
        {
          name: 'members',
          type: 'array',
          admin: {
            components: {
              RowLabel: ({ data, index }: RowLabelArgs) => {
                return data?.name || `Member ${String(index).padStart(2, '0')}`;
              },
            },
          },
          fields: [
            {
              name: 'profileImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Recommended Size: 100px(w) x 100px(h)',
              },
              filterOptions: {
                mimeType: { contains: 'image' },
              },
            },
            {
              name: 'name',
              required: true,
              type: 'text',
            },
            {
              name: 'subtitle',
              type: 'text',
              required: true,
              admin: {
                placeholder: '(e.g. Member)',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default EditorialBoard;
