const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                  options: {sourceMap: true}
                },
                {
                  loader: "postcss-loader",
                  options: {sourceMap: true}
                },
                {
                  loader: "sass-loader",
                  options: {sourceMap: true}
                }],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${common.externals.paths.assets}CSS/[name].css`
        }),
        new CleanWebpackPlugin(),
    ]
});
