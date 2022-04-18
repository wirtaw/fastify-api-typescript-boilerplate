import fastify, {FastifyInstance, FastifyLoggerOptions} from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';

import MainRoutes from '../routes/main';

function build(opt: { logger: FastifyLoggerOptions }) {
    const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify(opt);

    server.register(MainRoutes);
    return server;
}

export default build;
