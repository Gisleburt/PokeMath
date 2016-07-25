module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                query: {
                    presets: [
                        'es2015'
                    ]
                }
            },
            {
                loader: 'webpack-typescript?target=ES5&jsx=react',
                test: /\.tsx?$/,
                exclude: /node_modules/
            }

        ]
    }
};
