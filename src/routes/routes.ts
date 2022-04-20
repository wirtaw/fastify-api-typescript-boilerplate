import { RouteOptions } from 'fastify';
import { getAllController, getItemController } from '../controllers/item';
import { indexPageController, pingController } from '../controllers/main';
import { getAllItemOpt, getItemOpt } from '../schemas/item';
import { indexPageOpt, pingOpt } from '../schemas/main';

const getIndex: RouteOptions = {
    handler: indexPageController,
    method: 'GET',
    schema: indexPageOpt,
    url: '/',
};

const getPing: RouteOptions = {
    handler: pingController,
    method: 'GET',
    schema: pingOpt,
    url: '/ping',
};

const getAllItems: RouteOptions = {
    handler: getAllController,
    method: 'GET',
    schema: getAllItemOpt,
    url: '/api/items',
};

const getItem: RouteOptions = {
    handler: getItemController,
    method: 'GET',
    schema: getItemOpt,
    url: '/api/items/:_id',
};

const routes = [getIndex, getPing, getAllItems, getItem];

export default routes;
