import { FastifyInstance } from 'fastify';
import pino from 'pino';

import build from '../src/application/application';
import { HOST, LOGGER_LEVEL} from '../src/config';

describe('API items route test', () => {
    let fastify:FastifyInstance;

    beforeAll(async () => {
        fastify = build({ logger: pino({ level: LOGGER_LEVEL }) });
        await fastify.ready();
        await fastify.listen(3334, HOST);
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
            expect(res.statusCode).toEqual(400);
        });

        test('failed status 400 - empty', async () => {
            const res = await fastify.inject({
                url: '/api/items/',
            });
            expect(res.statusCode).toEqual(400);
        });

        test('failed status 200 - find', async () => {
            const res = await fastify.inject({
                url: '/api/items/sddd',
            });
            expect(res.statusCode).toEqual(200);
        });
    });
});
