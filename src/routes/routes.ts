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

const getItem: RouteOptions = {
    handler: getItemController,
    method: 'GET',
    schema: getItemOpt,
    url: '/items/_:id',
};

const getAllItems: RouteOptions = {
    handler: getAllController,
    method: 'GET',
    schema: getAllItemOpt,
    url: '/items',
};

const routes = [getIndex, getPing, getItem, getAllItems];

export default routes;
