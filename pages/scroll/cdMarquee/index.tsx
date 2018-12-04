import { Component } from 'react'
import { CdMarqueestyled } from './index.style'
import { Marquee } from './components'
import { AWARDS } from './constants'

class CdMarquee extends Component {
  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return (
      <CdMarqueestyled>
        <div className="marquee-wrap">
          <Marquee
            marqueeDatas={AWARDS}
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
