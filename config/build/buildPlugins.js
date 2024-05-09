const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressPlugin = require("progress-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports.buildPlugins = function({paths}) {
    return [
        new HtmlWebpackPlugin({template: paths.html}),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({filename: 'css/[name].css'}),
    ]
}