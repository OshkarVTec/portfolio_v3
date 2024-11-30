// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        }
    ],
    singleQuote: true,
    printWidth: 80,
    proseWrap: 'always',
    tabWidth: 4,
    useTabs: false,
    trailingComma: 'none',
    bracketSpacing: true,
    semi: true
};
