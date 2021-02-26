const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
    devServer: {
        proxy: {
            '/vms': {
                target: 'http://10.1.17.75',
                changeOrigin: true, //跨域默认为true
                secure: false, //https改为true
                pathRewrite: {
                    '^/vms': 'vms'
                },

            }
        },
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    },
    publicPath: './',
}