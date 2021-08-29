const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')
//引入 webpack 
const { HotModuleReplacementPlugin } = require('webpack')

const devConfig = {
    mode: 'development',//制定打包环境 production development
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: './dist',
        // open: true,
        hot: true
    },
    //插件
    plugins: [
        new HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig, devConfig)