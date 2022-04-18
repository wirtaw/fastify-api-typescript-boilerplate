import { FastifyInstance } from 'fastify';
import pino from 'pino';

import build from '../src/application/application';
import { HOST, LOGGER_LEVEL, PORT} from '../src/config';

describe('server test', () => {
  let fastify:FastifyInstance;

  beforeAll(async () => {
    fastify = build({ logger: pino({ level: LOGGER_LEVEL }) });
    await fastify.ready();
    await fastify.listen(PORT, HOST);
  });

  afterAll(() => {
    fastify.close();
  });

  describe('index page', () => {
    test('success status 200', async () => {
      const res = await fastify.inject({
        url: '/',
      });
      expect(res.statusCode).toEqual(200);
      expect(res.body.toString()).toBe('<html xmlns="http://www.w3.org/1999/html" lang="en"><head><title>Welcome page</title></head><body><h1>Welcome to Fastify</h1></body></html>');
    });

    test('not found status 404', async () => {
      const res = await fastify.inject({
        url: '/xxx',
      });
      expect(res.statusCode).toEqual(404);
      expect(res.json()).toEqual({ message: 'Route GET:/xxx not found', error: 'Not Found', statusCode: 404 });
    });

    test('ping page', async () => {
      const res = await fastify.inject({
        url: '/ping',
      });
      expect(res.statusCode).toEqual(200);
      expect(res.json()).toEqual({ pong: 'its worked' });
    });
  });
});
