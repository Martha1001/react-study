const routes = require('next-routes')

module.exports = routes()
  .add('index', '/', 'index')
  .add('demo', '/demo', 'demo')
  .add('nextRoutes', '/demo/nextRoutes', 'demo/testPage/nextRoutes')
