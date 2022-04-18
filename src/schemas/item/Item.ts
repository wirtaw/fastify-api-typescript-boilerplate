import { Type } from '@sinclair/typebox';

export const ItemSchema = Type.Object({
    id: Type.String(),
    name: Type.String(),
    timestamp: Type.Integer()
});

export const ItemsSchema = Type.Array(ItemSchema);

export const ItemFastify = {
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        timestamp: { type: 'integer' },
    },
    type: 'object',
};

export const ItemsFastify = {
    items: {
        properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            timestamp: { type: 'integer' },
        },
        type: 'object',
    },
    type: 'array',
};

export declare interface IItem {
    id: string;
    name: string;
    timestamp: number;
}
