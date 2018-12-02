import * as Koa from 'koa'
import * as next from 'next'
import * as path from 'path'

import routes from '../pages/routes'
import pageRoute from './middleware/pageRoute'
import routerGen from './utils/routerGen'

const port = parseInt(process.env.PORT, 10) || 3030
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const apiRoutePath = path.resolve(__dirname, './api')

// With koa
app.prepare().then(() => {
  const server = new Koa()
  const apiRoute = routerGen(apiRoutePath)

  server.use(apiRoute.routes())
    .use(apiRoute.allowedMethods())
    .use(async (ctx, nxt) => {
      if (ctx.url.indexOf('/api/') === -1) {
        return nxt()
      }
      return undefined
    })
    .use(pageRoute(handler))
    .listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
})
