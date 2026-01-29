/** @type {import('prettier').Config} */
module.exports = {
    printWidth: 100,
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    plugins: ['prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.html',
            options: { parser: 'angular' },
        },
    ],
}
