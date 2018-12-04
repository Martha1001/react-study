import routes from '../routes'
const { Link } = routes

import { InteractionCompStyled } from './index.style'

const InteractionComp = () => {
  return (
    <InteractionCompStyled>
      <h1>react interactionComp page</h1>
      <ul>
        <li><Link route="/interactionComp/otpLogin"><a>OTP 登录</a></Link></li>
      </ul>
      <div>goBack <Link route="/"><a>/index</a></Link> page</div>
    </InteractionCompStyled>
  )
}

export default InteractionComp
