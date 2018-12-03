import styled from 'styled-components'
import routes from '../routes'
const { Link } = routes

const DemoStyled = styled.div`
  padding: 10px;

  h1{
    color: blue;
    font-size: 30px;
  }
  li{
    font-size: 20px;
  }
`

const Demo = () => {
  return (
    <DemoStyled>
      <h1>this is test 'demo' page!</h1>
      <ul>
        <li>jump <Link route="/demo/nextRoutes"><a>/demo/nextRoutes</a></Link> page</li>
        <li>jump <Link route="/demo/koaFetch"><a>/demo/koaFetch</a></Link> page</li>
      </ul>
      <div>goBack <Link route="/"><a>/index</a></Link> page</div>
    </DemoStyled>
  )
}

export default Demo
