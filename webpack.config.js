const path =require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin');
const TerserPlugin=require('terser-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output:{
        path: path.join(__dirname,'dist'),
        filename: '[name].[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'],
              },
            
        ]
    },
    optimization:{
        minimizer: [new OptimizeCssAssetsPlugin(),new TerserPlugin()]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:"[name].[contentHash].css"
        }),
    ],
    devServer:{
        port:5000
    }
}