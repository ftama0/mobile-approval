const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    },
    cordovaPath: 'zcordova'
  },

  publicPath: ''
})
