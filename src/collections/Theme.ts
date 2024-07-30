import { CollectionConfig } from 'payload/types';

const Theme: CollectionConfig = {
  slug: 'themes',
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'properties',
      type: 'group',
      fields: [
        {
          name: 'showHero',
          type: 'checkbox',
          label: 'Show Hero Section',
          defaultValue: false,
        },
        {
          name: 'showTestimonials',
          type: 'checkbox',
          label: 'Show Testimonials Section',
          defaultValue: false,
        },
        {
          name: 'showGallery',
          type: 'checkbox',
          label: 'Show Gallery Section',
          defaultValue: false,
        },
        // Add more properties as needed
      ],
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
};

export default Theme;
