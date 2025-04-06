import { FastifyInstance } from 'fastify';
import pino from 'pino';

import build from '../src/application/application';
import { HOST, LOGGER_LEVEL} from '../src/config';
import { NotFoundResponse } from '../src/schemas/item/NotFound';

describe('API items route test', () => {
    let fastify:FastifyInstance;

    beforeAll(async () => {
        fastify = await build({ logger: pino({ level: LOGGER_LEVEL }) });
        await fastify.ready();
        await fastify.listen({ port: 3334, host: HOST });
    });

    afterAll(() => {
        fastify.close();
    });

    describe('items list page', () => {
        test('success status 200 and empty list', async () => {
            const res = await fastify.inject({
                url: '/api/items',
            });
            expect(res.statusCode).toEqual(200);
        });
    });

    describe('item page', () => {
        test('failed status 400 - no item', async () => {
            const res = await fastify.inject({
                url: '/api/items/1',
            });
            const body: NotFoundResponse = (typeof res.body === 'string') ? JSON.parse(res.body): res.body;
            expect(res.statusCode).toEqual(400);
            expect(body.message).toEqual('no item');
            expect(body.error).toEqual('');
        });

        test('failed status 400 - empty', async () => {
            const res = await fastify.inject({
                url: '/api/items/',
            });
            const body: NotFoundResponse = (typeof res.body === 'string') ? JSON.parse(res.body): res.body;
            expect(res.statusCode).toEqual(400);
            expect(body.message).toEqual('bad ID');
            expect(body.error).toEqual('');
        });

        test('failed status 404 - PUT not found', async () => {
            const res = await fastify.inject({
                url: '/api/items/',
                method: 'PUT'
            });
            expect(res.statusCode).toEqual(404);
        });

        test('failed status 404 - DELETE not found', async () => {
            const res = await fastify.inject({
                url: '/api/items/',
                method: 'DELETE'
            });
            expect(res.statusCode).toEqual(404);
        });

        test('failed status 200 - find', async () => {
            const res = await fastify.inject({
                url: '/api/items/sddd',
            });
            expect(res.statusCode).toEqual(200);
        });
    });
});
