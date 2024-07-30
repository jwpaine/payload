import { Block, GroupField } from 'payload/types';

const Styling: GroupField = {
    name: 'style',
    type: 'group',
    fields: [
      {
        type: 'collapsible',
        label: 'Styling',
        fields: [
          {
            name: 'background',
            type: 'text',
          },
          {
            name: 'minHeight',
            type: 'text',
          },
          {
            name: 'minWidth',
            type: 'text',
          },
          {
            name: 'maxWidth',
            type: 'text',
          },
          {
            name: 'margin',
            type: 'text',
          },
          {
            name: 'padding',
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
      },
    ],
  };
  
  const ElementTypes = [
    { label: 'H1', value: 'H1' },
    { label: 'Container', value: 'Container' },
  ]

  const TertiaryElement: Block = {
    slug: 'TertiaryElement',
    fields: [
      {
        name: 'type',
        type: 'select',
        options: ElementTypes
      },
      {
        name: 'text',
        type: 'text',
      },
      Styling,
    ],
  };
  
  const SubElement: Block = {
    slug: 'SubElement',
    fields: [
      {
        name: 'type',
        type: 'select',
        options: ElementTypes
      },
      {
        name: 'text',
        type: 'text',
      },
      Styling,
      {
        name: 'elements',
        type: 'blocks',
        minRows: 1,
        maxRows: 20,
        blocks: [TertiaryElement],
      },
    ],
  };
  
  const Element: Block = {
    slug: 'Element',
    fields: [
      {
        name: 'type',
        type: 'select',
        options: ElementTypes
      },
      {
        name: 'text',
        type: 'text',
      },
      Styling,
      {
        name: 'elements',
        type: 'blocks',
        minRows: 1,
        maxRows: 20,
        blocks: [SubElement],
      },
    ],
  };

  export default Element;