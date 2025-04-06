import * as dotenvFlow from 'dotenv-flow';
dotenvFlow.config({
  default_node_env: process.env.NODE_ENV,
});

export const HOST = process.env.SERVICE_HOST ? process.env.SERVICE_HOST : '0.0.0.0';
export const LOGGER_LEVEL = process.env.LOGGER_LEVEL || 'info';
export const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
