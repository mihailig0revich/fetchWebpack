const {buildWebpack} = require("./config/build/buildWebpack.js");
const path = require("node:path");

module.exports = (env) => {
    const paths = {
        output: path.resolve(__dirname, "./build"),
        entry: path.resolve(__dirname, "./src/index.js"),
        html: path.resolve(__dirname, "./public/index.html"),
        postcss: path.resolve(__dirname, "./postcss.config.js"),
    }
    const isDev = env.mode === 'development';
    return buildWebpack({
        env,
        isDev,
        paths
    })
}