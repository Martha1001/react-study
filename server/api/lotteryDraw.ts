import * as Router from 'koa-router'

const router = new Router()
const lotteryDrawRouter = new Router({ prefix: '/lotteryDraw' })

lotteryDrawRouter.get('/getNineGridStatus', (ctx) => {
  ctx.status = 200
  ctx.body = {
    isSuccess: true,
    message: '请求成功',
    value: {
      isReceive: false,
      joinDay: 3,
    },
  }
})
lotteryDrawRouter.get('/nineGrid', (ctx) => {
  ctx.status = 200
  ctx.body = {
    isSuccess: true,
    message: '请求成功',
    value: {
      prizeAlias: '600jf',
    },
  }
})

router.use(lotteryDrawRouter.routes())

export default router
