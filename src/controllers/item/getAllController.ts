import { Static } from '@sinclair/typebox';
import { FastifyReply, FastifyRequest } from 'fastify';
import { ItemsSchema } from '../../schemas/item/Item';

type ResponseBody = Static<typeof ItemsSchema>;

import { Items } from './mock';

export const getAllController = async (_request: FastifyRequest, reply: FastifyReply): Promise<ResponseBody> => {
  return reply.code(200).send(Items);
};
