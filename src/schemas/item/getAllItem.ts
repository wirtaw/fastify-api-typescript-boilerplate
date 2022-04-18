import { ItemsFastify } from './Item';

const responseSchema = {
    200: ItemsFastify,
};

export const getAllItemOpt = {
    response: responseSchema,
    tags: ['items'],
};
