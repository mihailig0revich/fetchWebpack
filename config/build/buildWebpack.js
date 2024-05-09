const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressPlugin = require('progress-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {buildPlugins} = require("./buildPlugins");
const {buildLoaders} = require("./buildLoaders");
const {buildDevServer} = require("./buildDevServer");
const {buildResolvers} = require("./buildResolvers");
const autoprefixer = require("autoprefixer");

module.exports.buildWebpack = function ({env, isDev, paths}) {
    return {
        mode: env.mode ? env.mode : 'production',
        entry: ["@babel/polyfill", paths.entry],
        output: {
            path: paths.output,
            filename: '[name].js',
            clean: true
        },
        plugins: buildPlugins({paths}),
        devtool: isDev?'inline-source-map':false,
        devServer: isDev?buildDevServer():undefined,
        module: {
            rules: buildLoaders({isDev, paths}),
        },
        resolve: buildResolvers(),
    };
}