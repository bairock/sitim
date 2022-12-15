const { createProxyMiddleware } = require('http-proxy-middleware')
const proxy = {
    target: 'http://admin.sitim.site',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/graphql',
    createProxyMiddleware(proxy)
  )
}