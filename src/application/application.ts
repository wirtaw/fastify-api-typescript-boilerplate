import fastify, {FastifyInstance, FastifyLoggerOptions} from 'fastify';
import fastifyOas from 'fastify-oas';
import fastifyRoutes from '@fastify/routes';
import { IncomingMessage, Server, ServerResponse } from 'http';

import { HOST, PORT} from '../config';

import routes from '../routes/routes';

function build(opt: { logger: FastifyLoggerOptions }) {
    const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify(opt);

    server.register(fastifyRoutes);

    server.register(fastifyOas, {
        exposeRoute: true,
        routePrefix: '/docs',
        swagger: {
            externalDocs: {
                description: 'Find more info here',
                url: 'https://swagger.io',
            },
            host: `${HOST}:${PORT}`,
            info: {
                title: 'Fastify API',
                version: '1.0.0',
            },
            schemes: ['http'],
            tags: [
                { name: 'index', description: 'Main page' },
                { name: 'items', description: 'Items' },
            ],
        },
    });

    routes.forEach((route) => {
        server.route(route);
    });
    return server;
}

export default build;
