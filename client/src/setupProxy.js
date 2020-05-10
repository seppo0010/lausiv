const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/socket.io/',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      ws: true,
    })
  );
};