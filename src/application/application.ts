import fastify, { FastifyInstance, RouteShorthandOptions }  from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';

const optsPing: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                properties: {
                    pong: {
                        type: 'string'
                    }
                },
                type: 'object'
            }
        }
    }
};

const opts: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'string',
            }
        }
    }
};

function build() {
    const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify();

    server.get('/ping', optsPing, async (_request, reply) => {
        reply.code(200).send({
            pong: 'its worked'
        });
    });

    server.get('/', opts, async (_request, reply) => {
        reply.code(200).type('text/html').send(
            '<html xmlns="http://www.w3.org/1999/html" lang="en"><head><title>Welcome page</title></head><body><h1>Welcome to Fastify</h1></body></html>'
        );
    });

    return server;
}

export default build;
