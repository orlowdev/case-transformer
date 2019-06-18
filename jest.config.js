module.exports = {
    roots: [
        '<rootDir>/test',
    ],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '(/test/.*|(\\.|/)spec)\\.ts$',
    coverageReporters: ['html', 'json', 'text'],
    moduleFileExtensions: [
        'ts',
        'js',
    ],
};
