import { Static } from '@sinclair/typebox';
import {
    FastifyReply,
} from 'fastify';
import { IItem, ItemSchema } from '../../schemas/item/Item';

const responseSchema = {
    200: ItemSchema,
};

type ResponseBody = Static<typeof responseSchema['200']>;

import { Items } from './mock';

export const getItemController = async (_request: any, reply: FastifyReply)
    : Promise<ResponseBody> => {
    const ID = (_request?.params?._id) ? _request.params._id : '';

    if (Items.filter((item: IItem) => item.id === ID).length === 0) {
        return reply.code(400).send({message: 'no item', statusCode: 400, errorType: ''});
    }

    return reply.code(200).send(Items.filter((item: IItem) => item.id === ID)[0]);
};
