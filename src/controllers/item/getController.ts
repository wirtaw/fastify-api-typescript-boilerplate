import { Static } from '@sinclair/typebox';
import { FastifyReply, FastifyRequest } from 'fastify';
import { IItem, ItemSchema } from '../../schemas/item/Item';
import { NotFoundSchema } from '../../schemas/item/NotFound';

type ResponseBody = Static<typeof ItemSchema | typeof NotFoundSchema>;

import { Items } from './mock';

export const getItemController = async (_request: FastifyRequest, reply: FastifyReply): Promise<ResponseBody> => {
  let ID: string | undefined;
  if (typeof _request.params === 'object' && _request.params !== null && '_id' in _request.params) {
    const typedParams = _request.params as { _id?: string | undefined };
    ID = typedParams._id;
  }
  if (!ID) {
    return reply.code(400).send({ message: 'bad ID', statusCode: 400, error: '' });
  }

  const items: IItem[] = Items.filter((item: IItem) => item.id === ID);

  if (items.length === 0) {
    return reply.code(400).send({ message: 'no item', statusCode: 400, error: '' });
  }

  return reply.code(200).send(items[0]);
};
