const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    [
      '/trips.json',
      '/other-experiences.json',
      '/living-style.json',
    ],
    createProxyMiddleware({
      target: 'https://pfx-interview.s3.ap-southeast-2.amazonaws.com',
      changeOrigin: true,
    })
  );
};