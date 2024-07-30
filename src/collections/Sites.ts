import { CollectionConfig, Block, GroupField } from 'payload/types';
import Element from './Element';
// Elements for the Content block
const Button: Block = {
  slug: 'Button',
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'link',
      type: 'text',
    },
    {
      name: 'buttonType',
      type: 'radio',
      options: [
        {
          label: 'Primary',
          value: 'primary',
        },
        {
          label: 'Secondary',
          value: 'secondary',
        },
      ],
      defaultValue: 'primary',
      admin: {
        layout: 'horizontal',
      },
    },
  ],
};

const H1: Block = {
  slug: 'H1',
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'color',
      type: 'text',
    },
    {
      name: 'fontSize',
      type: 'text',
    },
  ],
};

const P: Block = {
  slug: 'P',
  fields: [
    {
      name: 'text',
      type: 'textarea',
      admin: {
        rows: 10,
      },
    },
    {
      name: 'color',
      type: 'text',
    },
    {
      name: 'fontSize',
      type: 'text',
    },
  ],
};






const Pages: GroupField = {
  name: 'pages',
  type: 'group',
  fields: [
    {
      name: 'home',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [Element],
    },
  ],
};

const Theme: GroupField = {
  name: 'theme',
  type: 'group',
  fields: [
    {
      name: 'colors',
      type: 'group',
      fields: [
        {
          name: 'primary',
          type: 'text',
        },
        {
          name: 'secondary',
          type: 'text',
        },
      ],
    },
  ],
};

const Meta: GroupField = {
  name: 'meta',
  type: 'group',
  fields: [
    {
      name: 'vid',
      type: 'text',
      required: true,
    },
    {
      name: 'siteName',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
  ],
};

const Site: CollectionConfig = {
  slug: 'sites',
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'domainName',
      type: 'text',
      required: true,
    },
    Meta,
    Theme,
    Pages,
  ],
  admin: {
    useAsTitle: 'domainName',
  },
};

export default Site;
