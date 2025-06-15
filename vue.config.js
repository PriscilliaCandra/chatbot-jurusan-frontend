const { defineConfig } = require('@vue/cli-service')

module.exports = {
  devServer: {
    https: true,
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: 'all',
  }
}


