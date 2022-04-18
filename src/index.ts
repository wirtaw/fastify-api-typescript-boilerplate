import application from './application/application';

import configs from './config';

const start = async () => {
    try {
        const app = application();

        await app.listen(configs.main.port, configs.main.host);
    } catch (err) {
        throw new Error(err.message);
    }
};
start();
