const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');
var webpack = require('webpack');

let mode = "development";
let target = "web";


if (process.env.NODE_ENV === "production"){
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode: mode,
    target: target,

    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader'
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.vue$/,
                use: {    
                    loader: "vue-loader",
                    options: {
                        loader: {
                            scss: "vue-style-loader!css-loader!sass-loader"
                        }
                    }
                }
            },
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js'
        }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false,
        })
    ],

    devtool: "source-map",

    devServer: {
        contentBase: "./dist",
        hot: true,
    },
}