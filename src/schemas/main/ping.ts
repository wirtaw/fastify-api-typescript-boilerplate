export const pingOpt = {
    response: {
        200: {
            properties: {
                pong: {
                    type: 'string'
                }
            },
            type: 'object'
        }
    },
    tags: ['index']
};
