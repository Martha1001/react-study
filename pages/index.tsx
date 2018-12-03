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
    font-size: .3rem;
  }
`

const Home = () => {
  return (
    <Container>
      <h1>Welcome to next.js!</h1>
      <ul>
        <li>jump <Link route="/demo"><a>/demo</a></Link> page</li>
      </ul>
    </Container>
  )
}

export default Home
