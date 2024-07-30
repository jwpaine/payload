import { CollectionConfig } from 'payload/types';

const APIUsers: CollectionConfig = {
  slug: 'api-users',
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true, // No local login for API users
  },
  admin: {
    useAsTitle: 'username',
  },
  fields: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      unique: false,
    },
  ],
};

export default APIUsers;
