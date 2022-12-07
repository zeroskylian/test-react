const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // app.use(
  //   '/api1',
  //   createProxyMiddleware({
  //     target: 'https://localhost:8000',
  //     // changeOrigin: true,
  //     pathRewrite: { '^/api1': '' },
  //   })
  // );
};
