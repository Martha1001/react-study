import routes from '../routes'
const { Link } = routes

import { ExhibitionCompStyled } from './index.style'

const ExhibitionComp = () => {
  return (
    <ExhibitionCompStyled>
      <h1>react exhibitionComp page</h1>
      <ul>
        <li><Link route="/exhibitionComp/lotteryDraw/nineGrid"><a>抽奖 - 九宫格抽奖</a></Link></li>
        <li><Link route="/exhibitionComp/scroll/cdMarquee"><a>滚动 - 无缝滚动 cdMarquee</a></Link></li>
      </ul>
      <div>goBack <Link route="/"><a>/index</a></Link> page</div>
    </ExhibitionCompStyled>
  )
}

export default ExhibitionComp
