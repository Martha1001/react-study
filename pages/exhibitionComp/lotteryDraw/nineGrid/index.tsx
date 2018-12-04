import { Component } from 'react'
import { get } from '../../../common/utils/fetch'

import { UProgress, LuckyDrawBox } from './components'
import { NINEGRID_IMG_PREFIX, NINEGRID_PRIZES } from '../../constants'

import styled from 'styled-components'
import { CommonStyled } from '../../index.style'
const NineGridStyled = styled(CommonStyled)`

`

interface State {
  isReceive: boolean,
  joinDay: number,
  prize: string,
  prizeId: number,
  drawBtnDisabled: boolean,
}

class NineGrid extends Component<State> {
  state: State = {
    isReceive: undefined,
    joinDay: undefined,
    prize: undefined,
    prizeId: undefined,
    drawBtnDisabled: false,
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.getNineGridStatus()
  }

  async getNineGridStatus() {
    try {
      const getNineGridStatusRes = await get('/api/lotteryDraw/getNineGridStatus')
      if (getNineGridStatusRes.isSuccess) {
        this.setState({
          isReceive: getNineGridStatusRes.value.isReceive,
          joinDay: getNineGridStatusRes.value.joinDay,
        })
      } else {
        console.log(getNineGridStatusRes.message)
      }
    } catch (e) {
      console.error(e)
    }
  }

  async lotteryDraw() {
    try {
      const luckDrawRes = await get('/api/lotteryDraw/nineGrid')
      if (luckDrawRes.isSuccess) {
        this.setState({ drawBtnDisabled: true })
        for (let i = 0; i < NINEGRID_PRIZES.length; i++) {
          if (NINEGRID_PRIZES[i].awardCode === luckDrawRes.value.prizeAlias) {
            this.setState({
              prizeId: i,
              prize: NINEGRID_PRIZES[i].name,
            }, () => {
              const luckyDrawBoxDom: any = this.refs.luckyDrawBox
              luckyDrawBoxDom.handlePlay()
            })
            break
          }
        }
      } else {
        console.log(luckDrawRes.message)
      }
    } catch (e) {
      console.error(e)
    }
  }
  lotteryDrawScss() {
    this.setState({ isReceive: true })
    console.log('抽奖完成!')
  }

  render() {
    const { isReceive, joinDay, prize, prizeId, drawBtnDisabled } = this.state

    return (
      <NineGridStyled>
        <div>
          <UProgress isReceive={isReceive} joinDay={joinDay} prize={prize} />
          <LuckyDrawBox
            ref="luckyDrawBox"
            prizes={NINEGRID_PRIZES}
            imgPrefix={NINEGRID_IMG_PREFIX}
            prizeId={prizeId}
            isReceive={isReceive}
            drawBtnDisabled={drawBtnDisabled || isReceive || joinDay < 3}
            lotteryDraw={this.lotteryDraw.bind(this)}
            lotteryDrawScss={this.lotteryDrawScss.bind(this)} />
        </div>
      </NineGridStyled>
    )
  }
}

export default NineGrid
