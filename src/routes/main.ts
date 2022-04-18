import {
    FastifyInstance,
    FastifyPluginAsync,
} from 'fastify';
import fp from 'fastify-plugin';

import { indexPageController, pingController } from '../controllers/main';
import { indexPageOpt, pingOpt } from '../schemas/main';

// tslint:disable-next-line
const MainRoutes: FastifyPluginAsync = async (server: FastifyInstance) => {
    server.get('/ping', pingOpt, pingController);
    server.get('/', indexPageOpt, indexPageController);
};

export default fp(MainRoutes);
