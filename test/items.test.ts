import { FastifyInstance } from 'fastify';
import pino from 'pino';

import build from '../src/application/application';
import { HOST, LOGGER_LEVEL} from '../src/config';

describe('items route test', () => {
    let fastify:FastifyInstance;

    beforeAll(async () => {
        fastify = build({ logger: pino({ level: LOGGER_LEVEL }) });
        await fastify.ready();
        await fastify.listen(3334, HOST);
    });

    afterAll(() => {
        fastify.close();
    });

    describe('items page', () => {
        test('success status 200 and empty list', async () => {
            const res = await fastify.inject({
                url: '/items',
            });
            expect(res.statusCode).toEqual(200);
        });
    });
});
