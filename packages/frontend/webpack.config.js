var webpack = require("webpack");
// const path = require("path");

module.exports = {
    plugins: [
        // new webpack.NormalModuleReplacementPlugin(/^mqtt$/, "mqtt/dist/mqtt.js"),
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),

        // remove all moment locales. list of used locales in the moment-locale-loader file
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
        }),
        //         new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    ],
    // output: {
    //     path: path.resolve(__dirname, "dist-production"),
    //     filename: "[name].[contenthash].js",
    // },
    resolve: {
        fallback: { url: require.resolve("url/") },
    },
};
