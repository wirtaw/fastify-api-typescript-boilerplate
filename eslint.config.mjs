// eslint.config.mjs
import eslint from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';

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
                tsconfigRootDir: import.meta.dirname,
                project: ['./tsconfig.eslint.json'],
            },
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            jest: jestPlugin,
        },
        rules: {
            ...recommended.rules,
            ...recommendedTypeChecked.rules,
            ...jestPlugin.configs.recommended.rules,
        },
    },
    {
        files: ['test/**/*.ts'],
        rules: {
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
        },
    },
    {
        files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            ...recommended.rules,
        },
    },
    {
        ignores: ['dist', 'node_modules'],
    },
];