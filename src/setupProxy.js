const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = {
    target: process.env.REACT_APP_JOBS_API_URL,
    changeOrigin: true
}

const webSocketProxy = {
    target: 'ws://localhost:8080',
    changeOrigin: true
}

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware(apiProxy)
  );

  app.use(
    '/ws',
    createProxyMiddleware(webSocketProxy)
  );
};