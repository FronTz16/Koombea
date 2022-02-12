module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'react-native-reanimated/plugin',
        [
            // 'babel-plugin-module-resolver' used to create aliases
            // For more documentation: https://github.com/tleunen/babel-plugin-module-resolver
            // 'module-resolver',
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['./'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    components: './src/components',
                    constants: './src/constants',
                    store: './src/store',
                    navigation: './src/navigation',
                    context: './src/context',
                    screens: './src/screens',
                },
            },
        ],
    ],
};
