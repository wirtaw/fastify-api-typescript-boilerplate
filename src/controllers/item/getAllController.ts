import { Static } from '@sinclair/typebox';
import {
    FastifyReply, FastifyRequest,
} from 'fastify';
import { ItemsSchema } from '../../schemas/item/Item';

const responseSchema = {
    200: ItemsSchema,
};

type ResponseBody = Static<typeof responseSchema['200']>;

import { Items } from './mock';

export const getAllController = async(_request: FastifyRequest, reply: FastifyReply)
    : Promise<ResponseBody> => {
    return reply.code(200).send(Items);
};
