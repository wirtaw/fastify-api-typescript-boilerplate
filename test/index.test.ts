import build from '../src/application/application';
import { start } from '../src';
jest.mock('../src/application/application',() => {
    return jest.fn().mockImplementation(() => {
        return {
            listen: () => Promise.resolve(),
        };
    });
});

describe('spec index', () => {


    test('run', async () => {
        await start();

        expect(build).toHaveBeenCalledTimes(2);
    });
});
