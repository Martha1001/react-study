import routeInstance from './common/gatewayRoutes'
import demo from './demo/route'
import lotteryDraw from './lotteryDraw/route'

const routeConfig = [
  ['home', '/', 'index'],
  ...demo,
  ...lotteryDraw,
]
routeConfig.map(item => routeInstance.add.apply(routeInstance, item))

export {routeConfig}
export const Link = routeInstance.Link
export const Router = routeInstance.Router
export default routeInstance
