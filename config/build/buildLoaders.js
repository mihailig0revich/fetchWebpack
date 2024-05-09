const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports.buildLoaders = function ({isDev, paths}) {
    return [
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                "css-loader",
                isDev?undefined:'postcss-loader',
                // Compiles Sass to CSS
                "sass-loader",
            ],
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
    ]
}