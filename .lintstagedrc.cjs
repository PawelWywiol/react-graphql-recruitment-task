module.exports = {
    '**/*': () => [
        'pnpm run lint',
        'pnpm run type-check',
    ],
};