import { ItemFastify } from './Item';

const responseSchema = {
    200: ItemFastify,
};

export const getItemOpt = {
    response: responseSchema,
    tags: ['items'],
};
