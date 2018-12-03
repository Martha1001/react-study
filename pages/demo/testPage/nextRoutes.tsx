import styled from 'styled-components'
import routes from '../../routes'
const { Link } = routes

const NextRoutesStyled = styled.div`
  padding: .1rem;
  font-size: .24rem;

  h1{
    color: blue;
    font-size: .4rem;
  }
  a{
    text-decoration: underline;
  }
`

const NextRoutes = () => {
  return (
    <NextRoutesStyled>
      <h1>this is test 'next-routes' page!</h1>
      <div>
        goBack <Link route="/demo"><a>/demo</a></Link> page
      </div>
    </NextRoutesStyled>
  )
}

export default NextRoutes
