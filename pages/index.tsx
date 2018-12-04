import styled from 'styled-components'
import routes from './routes'
const { Link } = routes

const Container = styled.div`
  padding: .1rem;
  font-size: .24rem;

  h1{
    color: green;
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

const Home = () => {
  return (
    <Container>
      <h1>Welcome to next.js!</h1>
      <ul>
        <li>jump <Link route="/demo"><a>/demo</a></Link> page</li>
        <li>jump <Link route="/lotteryDraw"><a>/lotteryDraw</a></Link> page</li>
        <li>jump <Link route="/scroll"><a>/scroll</a></Link> page</li>
        <li>jump <Link route="/interactionComp"><a>/interactionComp</a></Link> page</li>
      </ul>
    </Container>
  )
}

export default Home
