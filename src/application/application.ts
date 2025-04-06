import { IncomingMessage, Server, ServerResponse } from 'node:http';

import fastify, {
  FastifyBaseLogger,
  FastifyInstance,
  FastifySchema,
  FastifyTypeProviderDefault,
  RouteGenericInterface,
  RouteOptions,
} from 'fastify';
import fastifyRoutes from '@fastify/routes';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';

import { HOST, PORT, LOGGER_LEVEL } from '../config';

import routes from '../routes/routes';

async function build(opt: {}) {
  const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
    ...opt,
    logger: {
      level: LOGGER_LEVEL,
      transport: {
        options: {
          ignore: 'pid,hostname',
          translateTime: 'SYS:standard',
        },
        target: 'pino-pretty',
      },
    },
  });

  await server.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Fastify API',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host: `${HOST}:${PORT}`,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  });

  await server.register(fastifySwaggerUI, {
    routePrefix: '/documentation',
  });

  server.register(fastifyRoutes);

  routes.forEach(
    (
      route: RouteOptions<
        Server<typeof IncomingMessage, typeof ServerResponse>,
        IncomingMessage,
        ServerResponse<IncomingMessage>,
        RouteGenericInterface,
        unknown,
        FastifySchema,
        FastifyTypeProviderDefault,
        FastifyBaseLogger
      >,
    ) => {
      server.route(route);
    },
  );
  return server;
}

export default build;
