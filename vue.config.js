module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets",
                "common": "@/common",
                "components": "@/components",
                "network": "@/network",
                "views": "@/views"
            }
        }
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
            '/api': {
                target: 'http://api.reporthui.com',
                changeOrigin: true, //跨域默认为true
                secure: false, //https改为true
                pathRewrite: {
                    '^/api': ''
                },

            }
        },
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    },
    publicPath: './',
}