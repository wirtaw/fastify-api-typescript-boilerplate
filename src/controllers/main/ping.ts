import {
    FastifyReply,
    FastifyRequest
} from 'fastify';

export const ping = async(_request: FastifyRequest, reply: FastifyReply) => {
    reply.code(200).send({
        pong: 'its worked'
    });
};
