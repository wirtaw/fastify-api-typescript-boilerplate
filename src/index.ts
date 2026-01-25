import build from './application/application';

import { HOST, PORT } from './config';

export const start = async () => {
  try {
    const app = await build({});

    await app.listen({ port: PORT, host: HOST });
  } catch (err) {
    let errMessage: string = '';

    if (err instanceof Error) {
      errMessage = err.message;
    } else if (typeof err === 'string') {
      errMessage = err;
    }

    throw new Error(errMessage);
  }
};
if (require.main === module) {
  start().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
