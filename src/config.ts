import * as dotenvFlow from 'dotenv-flow';
dotenvFlow.config({
    default_node_env: process.env.NODE_ENV,
});

export default {
    main: {
        host: process.env.HOST || '0.0.0.0',
        port: Number(process.env.PORT) || 3000,
    },
};
