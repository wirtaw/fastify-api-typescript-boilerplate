import { Static } from '@sinclair/typebox';
import {
    FastifyReply, FastifyRequest, RouteHandlerMethod
} from 'fastify';
import { IItem, ItemSchema } from '../../schemas/item/Item';
import { NotFoundSchema } from '../../schemas/item/NotFound';

const responseSchema = {
    200: ItemSchema,
    400: NotFoundSchema
};

interface CustomItemRequest extends FastifyRequest {
  params: {
    _id: string;
  };
}

type ResponseBody = Static<typeof responseSchema['200'] | typeof responseSchema['400']>;

import { Items } from './mock';

export const getItemController = async(request: CustomItemRequest, reply: FastifyReply)
    : Promise<ResponseBody> => {
    const params = request.params;

    if (!params) {
        return reply.code(400)
            .send({message: 'no params', statusCode: 400, error: ''});
    }

    const ID = params._id || '';
    if (!ID) {
        return reply.code(400)
            .send({message: 'bad ID', statusCode: 400, error: ''});
    }

    const items: IItem[] = Items.filter((item: IItem) => item.id === ID);

    if (items.length === 0) {
        return reply.code(400)
            .send({message: 'no item', statusCode: 400, error: ''});
    }

    return reply.code(200).send(items[0]);
};
