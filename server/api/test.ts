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

testRouter.post('/postTestTxt', (ctx) => {
  ctx.status = 200
  const req: any = ctx.request.body
  let postTestTxt: string
  if (req.type) {
    switch (req.type) {
      case 'name':
        postTestTxt = 'martha'
        break
      case 'age':
        postTestTxt = '18'
        break
      default:
        postTestTxt = null
    }
  } else {
    postTestTxt = '请求参数无效，请检查后在试'
  }
  ctx.body = {
    postTestTxt,
  }
})
testRouter.post('/postFormTest', (ctx) => {
  ctx.status = 200
  const req: any = ctx.request.body
  let postFormTest: string
  switch (req.animal) {
    case 'cat':
      postFormTest = 'miao~'
      break
    case 'dog':
      postFormTest = 'wang~wang~'
      break
    default:
      postFormTest = null
  }
  ctx.body = {
    postFormTest,
  }
})

router.use(testRouter.routes())

export default router
