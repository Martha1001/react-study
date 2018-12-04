import { Component } from 'react'
import { Marquee } from './components'
import { CDMARQUEE_AWARDS } from '../../constants'

import styled from 'styled-components'
import { CommonStyled } from '../../index.style'
const CdMarqueestyled = styled(CommonStyled)`
  position: relative;
  width: 100%;

  .marquee-wrap{
    position: relative;
    width: 100%;
    height: 3.2rem;
    margin: 0 auto;
    padding: .4rem 0;
    font-size: .26rem;
    background: #3C9DF4;
    overflow: hidden;
  }
`

class CdMarquee extends Component {
  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return (
      <CdMarqueestyled>
        <div className="marquee-wrap">
          <Marquee
            marqueeDatas={CDMARQUEE_AWARDS}
            itemWidth={2.5}
            itemMargin={.13}
            move={.02}
            minTouchLeft={1.2} />
        </div>
      </CdMarqueestyled>
    )
  }
}
export default CdMarquee
