import { Block, GroupField } from 'payload/types';

  
  const ElementTypes = [
    { label: 'H1', value: 'H1' },
    { label: 'Container', value: 'Container' },
    { label: 'Cloud', value: 'Cloud' },
    { label: 'P', value: 'P' },
  ]

  const QuaternaryElement: Block = {
    slug: 'QuaternaryElement',
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
      {
        name: 'styling',
        type: 'json',
        admin: {
          description: 'Enter styling configurations in JSON format',
        },
      },
    ],
  };

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
      {
        name: 'styling',
        type: 'json',
        admin: {
          description: 'Enter styling configurations in JSON format',
        },
      },
      {
        name: 'elements',
        type: 'blocks',
        minRows: 1,
        maxRows: 20,
        blocks: [QuaternaryElement],
      },
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
      {
        name: 'styling',
        type: 'json',
        admin: {
          description: 'Enter styling configurations in JSON format',
        },
      },
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
      {
        name: 'styling',
        type: 'json',
        admin: {
          description: 'Enter styling configurations in JSON format',
        },
      },
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