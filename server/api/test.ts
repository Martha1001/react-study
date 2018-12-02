import * as Router from 'koa-router'

const router = new Router()
const testRouter = new Router({ prefix: '/test' })

testRouter.get('/a', (ctx) => {
  ctx.status = 200
  ctx.body = {
    a: 'this is from koa-router /test/a',
  }
})

router.use(testRouter.routes())

export default router
