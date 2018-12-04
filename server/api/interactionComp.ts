import * as Router from 'koa-router'

const router = new Router()
const interactionCompRouter = new Router({ prefix: '/interactionComp'})

interactionCompRouter.post('/sendSmsCode', (ctx) => {
  ctx.status = 200
  ctx.body = {
    isSuccess: true,
    message: '请求成功！',
  }
})
interactionCompRouter.post('/otpLogin', (ctx) => {
  ctx.status = 200
  const req: any = ctx.request.body
  let res = {
    isSuccess: undefined,
    message: undefined,
  }
  if (req.smsCode === '999999') {
    res = Object.assign({}, {
      isSuccess: true,
      message: '请求成功！',
    })
  } else {
    res = Object.assign({}, {
      isSuccess: false,
      message: '验证码输入错误！',
    })
  }
  ctx.body = res
})

router.use(interactionCompRouter.routes())

export default router
