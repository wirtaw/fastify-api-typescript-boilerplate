import {
    FastifyReply,
    FastifyRequest
} from 'fastify';

export const main = async(_request: FastifyRequest, reply: FastifyReply) => {
    reply.code(200).type('text/html').send(
        '<html xmlns="http://www.w3.org/1999/html" lang="en"><head><title>Welcome page</title></head><body><h1>Welcome to Fastify</h1></body></html>'
    );
};
