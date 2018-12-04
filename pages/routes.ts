import routeInstance from './common/gatewayRoutes'
import demo from './demo/route'
import exhibitionComp from './exhibitionComp/route'
import interactionComp from './interactionComp/route'

const routeConfig = [
  ['home', '/', 'index'],
  ...demo,
  ...exhibitionComp,
  ...interactionComp,
]
routeConfig.map(item => routeInstance.add.apply(routeInstance, item))

export {routeConfig}
export const Link = routeInstance.Link
export const Router = routeInstance.Router
export default routeInstance
