import { Type } from '@sinclair/typebox';

export const NotFound = {
    properties: {
        error: { type: 'string' },
        message: { type: 'string' },
        statusCode: { type: 'integer' },
    },
    type: 'object',
};

export const NotFoundSchema = Type.Object({
    error: Type.String(),
    message: Type.String(),
    statusCode: Type.Integer()
});
