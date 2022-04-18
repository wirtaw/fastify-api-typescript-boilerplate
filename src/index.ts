import application from './application/application';

import pino from 'pino';
import { HOST, LOGGER_LEVEL, PORT} from './config';

const start = async () => {
    try {
        const app = application({
            logger: pino({ level: LOGGER_LEVEL })
        });

        await app.listen(PORT, HOST);
    } catch (err) {
        throw new Error(err.message);
    }
};
start();
