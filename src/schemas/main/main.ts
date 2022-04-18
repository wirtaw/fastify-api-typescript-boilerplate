import {
    RouteShorthandOptions
} from 'fastify';

export const indexPageOpt: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'string',
            }
        }
    }
};
