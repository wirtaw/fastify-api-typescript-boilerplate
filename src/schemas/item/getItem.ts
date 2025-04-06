import { ItemFastify } from './Item';
import { NotFound } from './NotFound';

const responseSchema = {
  200: ItemFastify,
  400: NotFound,
};

export const getItemOpt = {
  params: {
    properties: {
      _id: {
        description: 'item id',
        type: 'string',
      },
    },
    required: ['_id'],
    type: 'object',
  },
  response: responseSchema,
  tags: ['items'],
};
