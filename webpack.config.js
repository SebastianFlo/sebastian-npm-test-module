module.exports = {
    context: __dirname,
    entry: './client.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css!'
            }
        ]
    }
};