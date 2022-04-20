import { Static } from '@sinclair/typebox';
import {
    FastifyReply,
} from 'fastify';
import { IItem, ItemSchema } from '../../schemas/item/Item';
import { NotFoundSchema } from '../../schemas/item/NotFound';

const responseSchema = {
    200: ItemSchema,
    400: NotFoundSchema
};

type ResponseBody = Static<typeof responseSchema['200'] | typeof responseSchema['400']>;

import { Items } from './mock';

export const getItemController = async (_request: any, reply: FastifyReply)
    : Promise<ResponseBody> => {
    console.dir(Items, {depth: 2});
    const ID = (_request?.params?._id) ? _request.params._id : '';
    if (!ID) {
        return reply.code(400)
            .send({message: 'bad ID', statusCode: 400, errorType: ''});
    }

    const items: IItem[] = Items.filter((item: IItem) => item.id === ID);

    if (items.length === 0) {
        return reply.code(400)
            .send({message: 'no item', statusCode: 400, errorType: ''});
    }

    return reply.code(200).send(items[0]);
};
