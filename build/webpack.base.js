//导入path模块
const path = require('path');

//引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//引入html-wabpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引入clearwebpackplugin 打包之前会删除dist文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    //打包入口
    entry: './src/main.js',
    //打包出口
    output: {
        filename: 'main.js',//打包文件名
        path: path.resolve(__dirname, '../dist'),//创建一个放bundle的目录
    },
    //打包规则
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {//如果遇到vue结尾的文件 使用vue-loader进行打包
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {   //文件打包 asset文件下 
                //file- loader[文件打包]
                //url- loader[如果大小小于一个limit的话 以base64形式 减少请求]
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',//打包会生成一个hash值得图片
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 2048,
                    esModule: false
                },
                type: 'javascript/auto'
            },
            {//css样式打包
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.styl(us)?$/,
                use: ['vue-style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    //插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': resolve('src'),
            'assets': resolve('src/assets')
        }
    }
}