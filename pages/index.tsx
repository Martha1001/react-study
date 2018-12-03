import styled from 'styled-components'
import routes from './routes'
const { Link } = routes

const Container = styled.div`
  padding: 10px;

  h1{
    color: green;
    font-size: 30px;
  }
  li{
    font-size: 20px;
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
