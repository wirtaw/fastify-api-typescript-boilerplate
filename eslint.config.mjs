// eslint.config.mjs
import eslint from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

const recommended = eslint.configs.recommended;
const recommendedTypeChecked = typescriptPlugin.configs['recommended-type-checked'];

export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                tsconfigRootDir: '.',
                project: ['./tsconfig.json'],
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
        },
        rules: {
            ...recommended.rules,
            ...recommendedTypeChecked.rules,
        },
    },
    {
        files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
        rules: {
            ...recommended.rules,
        },
    },
    {
        ignores: ['dist', 'node_modules'],
    },
];