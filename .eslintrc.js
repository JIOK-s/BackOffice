module.exports = {
    plugins: ['import', 'react'],
    extends: ['plugin:import/recommended', 'react-app', 'react-app/jest'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
    },
};
