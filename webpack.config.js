const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        host: 'localhost',
        port: 9000,
        compress: true,
        inline: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use: ['file-loader']
            }
        ]
    }
};