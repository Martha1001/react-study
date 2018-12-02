import * as fs from 'fs'
import * as Router from 'koa-router'

const routerGen = (routerPath) => {
  const rootRouter = new Router()
  const router = new Router({ prefix: '/api' })
  let subRouter

  fs.readdirSync(routerPath)
    .filter((filename) => filename.endsWith('.ts'))
    .forEach((filename) => {
      subRouter = require(`${routerPath}/${filename}`)
      router.use(subRouter.default.routes(), subRouter.default.allowedMethods())
    })

  rootRouter.use(subRouter.default.routes(), subRouter.default.allowedMethods())
  return rootRouter
}

export default routerGen
