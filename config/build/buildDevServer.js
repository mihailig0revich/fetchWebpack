module.exports.buildDevServer = function (config) {
    return {
        port: 8081,
        open: true,
        liveReload: true,
        hot: true,
    }
}