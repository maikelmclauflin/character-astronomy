var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var output = path.join(__dirname, './dist/');
var input = path.join(__dirname, './src/');
var scripts = ['https://unpkg.com/react@16/umd/react.development.js', 'https://unpkg.com/react-dom@16/umd/react-dom.development.js'];
var htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/html/index.html',
    title: 'here',
    inject: true,
    // title: 'here',
    // hash: true,
    files: {
        js: scripts
    }
});
var entries = {
    index: entry('index')
};
if (!process.env.PRODUCTION) {
    entries.test = entry('test');
}
module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true
    },
    entry: entries,
    output: {
        path: output,
        filename: "js/[name].js"
    },
    plugins: [htmlWebpackPlugin],
    module: {
        loaders: [{
            test: /\.jsx?$/
        }],
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.json$/,
            use: ['json-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        // react: 'React'
    }
};

function entry(name) {
    return path.join(input, 'js/' + name + '.jsx');
}
