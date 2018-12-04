import styled from 'styled-components'
import routes from '../routes'
const { Link } = routes

import { IMG_PREFIX } from './cdMarquee/constants'


const ScrollStyled = styled.div`
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
  img{
    width: 80%;
    margin: 0 auto;
  }
`

const Scroll = () => {
  return (
    <ScrollStyled>
      <h1>react scroll page</h1>
      <ul>
        <li><Link route="/scroll/cdMarquee">
          <a><img src={`${IMG_PREFIX}cdmarquee_view.jpg`} alt="cdMarquee"/></a></Link></li>
      </ul>
      <div>goBack <Link route="/"><a>/index</a></Link> page</div>
    </ScrollStyled>
  )
}

export default Scroll
