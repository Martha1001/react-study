import * as Router from 'koa-router'

const router = new Router()
const testRouter = new Router({ prefix: '/test' })

testRouter.get('/a', (ctx) => {
  ctx.status = 200
  ctx.body = {
    a: '/test/a',
  }
})
testRouter.get('/env', (ctx) => {
  ctx.status = 200
  ctx.body = {
    env: process.env.NODE_ENV,
  }
})

router.use(testRouter.routes())

export default router
