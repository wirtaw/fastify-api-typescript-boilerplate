import build from './application/application';

import { HOST, PORT } from './config';

export const start = async () => {
  try {
    const app = await build({});

    await app.listen({ port: PORT, host: HOST });
  } catch (err) {
    let errMessage: string = '';

    if (err && typeof err === 'object' && err !== null && 'message' in err && typeof err.message === 'string') {
      errMessage = err.message;
    } else if (err && typeof err === 'string') {
      errMessage = err;
    }

    throw new Error(errMessage);
  }
};
start();
