const path = require('path')
function resolve (dir){
   return path.join(__dirname, dir)
}

const port = 7070;
const title = 'vue项目最佳实践'

module.exports = {
    publicPath: 'best-practice',
    devServer:{ port },
    configureWebpack:{
        name: title
    },
    chainWebpack(config){
        config.module.rule('svg')
            .exclude.add(resolve('src/icons')).end();

        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({symbolId:'icon-[name]'})
            .end();
    }
}