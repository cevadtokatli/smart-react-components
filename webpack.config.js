const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ReactLoadableSSRAddon = require("react-loadable-ssr-addon")
const webpackNodeExternals = require("webpack-node-externals")

module.exports = [
    {
        entry: "./src/index.tsx",
        output: {
            filename: "index.js",
            chunkFilename: "[contenthash].js",
            path: path.resolve(__dirname, "dist/assets"),
            publicPath: ""
        },
        module: {
            rules: [
                {
                    test: /.tsx$/,
                    loader: "ts-loader"
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".json"],
            alias: {
                react: path.resolve("./node_modules/react"),
                "react-dom": path.resolve("./node_modules/react-dom"),
                "react-loadable": path.resolve("./node_modules/react-loadable"),
                "react-router": path.resolve("./node_modules/react-router"),
                "styled-components": path.resolve("./node_modules/styled-components")
            }
        },
        devtool: "source-map",
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        enforce: true,
                        chunks: "all"
                    },
                    default: {
                        minSize: 0,
                        reuseExistingChunk: true,
                    }
                }
            }
        },
        plugins: [
            new CleanWebpackPlugin(["dist/assets"]),
            new ReactLoadableSSRAddon({
                filename: "react-loadable-ssr-addon.json"
            })
        ]
    },
    {
        entry: "./src/server.tsx",
        output: {
            filename: "index.js",
            path: path.resolve(__dirname, "dist/server"),
            publicPath: ""
        },
        module: {
            rules: [
                {
                    test: /.tsx$/,
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-typescript",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            "dynamic-import-node-babel-7",
                            "react-loadable/babel"
                        ]
                    }
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".json"]
        },
        target: "node",
        externals: [webpackNodeExternals()],
        plugins: [
            new CleanWebpackPlugin(["dist/server"])
        ]
    }
]