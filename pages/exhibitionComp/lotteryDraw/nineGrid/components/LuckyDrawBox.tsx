import { Component } from 'react'
import styled from 'styled-components'

const LuckyDrawBoxStyled = styled.div`
  .lucky-draw-box{
    position: relative;
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    color: #fff;

    h1,h2,h3,h4,h5,h6{
      margin: 0;
      padding: 0;
    }

    button,input {
      display: block;
      background: none;
      border: none;
      outline: none;
    }

    img{
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .luckyDrawItem{
      position: absolute;
      width: 30.588%;
      height: 30.588%;
      border-radius: 8px;
      overflow: hidden;
      border: 3px solid #fff;

      span{
        position: relative;
        top: -.6rem;
        left: .2rem;
        font-weight: bold;
        z-index: 1;
      }
      span{
        font-size: .3rem;
      }
    }

    .item0{
      top: 0;
      left: 0;
    }
    .item1{
      top: 0;
      left: 34.117%;
    }
    .item2{
      top: 0;
      left: 68.235%;
    }
    .item3{
      top: 34.117%;
      left: 68.235%;

    }
    .item4{
      top: 68.235%;
      left: 68.235%;
    }
    .item5{
      top: 68.235%;
      left: 34.117%;
    }
    .item6{
      top: 68.235%;
      left: 0;
    }
    .item7{
      top: 34.117%;
      left: 0;
    }

    .active{
      border: 3px solid #087EB0;
      border-radius: 8px;
    }

    .btn-draw{
      position: absolute;
      top: 34.1%;
      left: 33.4%;
      width: 33.5%;
      height: 32%;
      border-radius: 8px;
      overflow: hidden;

      img{
        position: absolute;
        top: 0;
        left: 0;
      }

      button{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 100%;
        color: #fff;
        z-index: 1;
        touch-action: none;

        span{
          display: block;
          line-height: .58rem;
          padding: 0;
          font-weight: bold;
        }
      }

      span{
        font-size: .5rem;
      }
    }
  }
`
interface Props {
  prizes: Array<{
    name: string,
    imgUrl: string,
    awardCode: string,
  }>,
  imgPrefix: string,
  prizeId: number,
  isReceive: boolean,
  drawBtnDisabled: boolean,
  lotteryDraw: () => void
  lotteryDrawScss: () => void
}

class LuckyDrawBox extends Component<Props> {
  state = {
    activeId: 0,
  }
  luckyDrawTimer
  mintime = this.props.prizes.length * Math.floor(Math.random() * 5 + 4)
  countDownDraw = 0
  actTimes = 0
  speed = 100

  handlePlay = () => {
    const { prizes, prizeId } = this.props
    const { activeId } = this.state
    if (activeId === prizeId && this.actTimes > this.mintime) {
      clearTimeout(this.luckyDrawTimer)
      setTimeout(() => {
        this.props.lotteryDrawScss()
      }, 1000)
      return
    } else {
      if (this.countDownDraw === prizes.length) {
        this.setState({ activeId: 0 })
        this.countDownDraw = 0
      } else {
        this.setState({ activeId: this.countDownDraw })
        this.countDownDraw++
      }
      if (this.actTimes + 7 < this.mintime) {
        this.speed -= 10
      } else {
        if (this.actTimes + 7 > this.mintime  && ( (prizeId === 0 && activeId === 7) || prizeId === activeId + 1) ) {
          this.speed += 110
        } else {
          this.speed += 20
        }
      }
    }
    if (this.speed < 50) {
      this.speed = 50
    }
    this.actTimes++
    this.luckyDrawTimer = setTimeout(this.handlePlay, this.speed)
  }

  render() {
    const { prizes, imgPrefix, isReceive, drawBtnDisabled } = this.props
    const { activeId } = this.state
    return (
      <LuckyDrawBoxStyled>
        <div className="lucky-draw-box">
          {prizes.map((prize, idx) => (
            <div
              key={idx}
              className={activeId === idx ? `active luckyDrawItem item${idx}` : `luckyDrawItem item${idx}`}>
              <img src={prize.imgUrl} alt={prize.name} />
              <span>{prize.name}</span>
            </div>
          ))}
          <div className="btn-draw">
            <img
              src={drawBtnDisabled ? `${imgPrefix}mAward_receive_dis.png` : `${imgPrefix}mAward_receive.png`}
              alt="抽奖" />
            <button disabled={drawBtnDisabled} onClick={this.props.lotteryDraw}>
              {isReceive ? <span>已抽奖</span> : <span>立即<br/>抽奖</span>}
            </button>
          </div>
        </div>
      </LuckyDrawBoxStyled>
    )
  }
}
export default LuckyDrawBox
