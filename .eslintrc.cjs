module.exports = {
    extends: [
        'standard',
        'plugin:astro/recommended'
    ],
    rules: {
        indent: ['error', 4]
    },
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro']
            },
            rules: {}
        }
    ]
}
