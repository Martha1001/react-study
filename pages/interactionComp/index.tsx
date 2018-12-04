import styled from 'styled-components'
import routes from '../routes'
const { Link } = routes

const InteractionCompStyled = styled.div`
  padding: .1rem;
  font-size: .24rem;

  h1{
    color: blue;
    font-size: .4rem;
  }
  li{
    list-style: disc inside;
    font-size: .3rem;
  }
  a{
    text-decoration: underline;
  }
`

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
