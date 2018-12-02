import * as nextRoutes from 'next-routes'

const routes = nextRoutes()
  .add('index', '/', 'index')
  .add('demo', '/demo', 'demo')
  .add('nextRoutes', '/demo/nextRoutes', 'demo/testPage/nextRoutes')
  
export default routes
  