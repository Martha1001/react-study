import styled from 'styled-components'
import routes from '../routes'
const { Link } = routes

const LotteryDrawStyled = styled.div`
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

const LotteryDraw = () => {
  return (
    <LotteryDrawStyled>
      <h1>react lotteryDraw page</h1>
      <ul>
        <li><Link route="/lotteryDraw/nineGrid"><a>九宫格抽奖</a></Link></li>
      </ul>
      <div>goBack <Link route="/"><a>/index</a></Link> page</div>
    </LotteryDrawStyled>
  )
}

export default LotteryDraw
