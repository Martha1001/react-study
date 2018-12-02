import * as fs from 'fs'
import * as Router from 'koa-router'

const rootRouter = (routerPath) => {
  const routerGen = new Router()
  const router = new Router({ prefix: '/api' })
  let subRouter

  fs.readdirSync(routerPath)
    .filter((filename) => filename.endsWith('.ts'))
    .forEach((filename) => {
      subRouter = require(`${routerPath}/${filename}`)
      router.use(subRouter.default.routes(), subRouter.default.allowedMethods())
    })

  routerGen.use(subRouter.default.routes(), subRouter.default.allowedMethods())
  return routerGen
}

export default rootRouter
