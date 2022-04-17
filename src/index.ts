import application from './application/application';

const start = async () => {
    try {
        const app = application();

        await app.listen(3000, '0.0.0.0');
    } catch (err) {
        throw new Error(err.message);
    }
};
start();
