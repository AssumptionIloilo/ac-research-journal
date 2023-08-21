import { CollectionConfig } from 'payload/types';
import isAdmin from '../../utilities/collectionAccessControls/isAdmin';
import isAdminOrCurrentUser from '../../utilities/collectionAccessControls/isAdminOrCurrentUser';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: true,
  },
  admin: {
    useAsTitle: 'email',
    description: 'Manage admins, moderators, and user roles here.',
    defaultColumns: ['email', 'role', 'name'],
  },
  access: {
    read: () => true,
    create: isAdmin,
    delete: isAdmin,
    update: isAdminOrCurrentUser,
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      required: true,
      defaultValue: 'user',
    },
  ],
};

export default Users;
