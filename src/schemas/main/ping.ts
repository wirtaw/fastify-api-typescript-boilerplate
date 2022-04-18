import {
    RouteShorthandOptions
} from 'fastify';

export const pingOpt: RouteShorthandOptions = {
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
