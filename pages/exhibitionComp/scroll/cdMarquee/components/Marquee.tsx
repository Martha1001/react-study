import { Component } from 'react'
import styled from 'styled-components'

const MarqueeStyled = styled.div`
  position: relative;
  height: 100%;

  .marquee{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    touch-action: none;

    .leftTip{
      height: 100%;
      line-height: .36rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ccc;
      font-size: .24rem;
      text-align: center;
    }

    .award-marquee{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;

      .record-lists{
        position: absolute;
        top: 0;
        height: 100%;

        .record-item{
          display: flex;
          align-items: flex-end;
          float: left;
          height: 100%;
          border-radius: 8px;
          overflow: hidden;

          &::after{
            display: block;
            content: '';
            overflow: hidden;
            clear: both;
          }

          .record-item-tit{
            width: 100%;
            height: .6rem;
            line-height: .6rem;
            color: #fff;
            font-size: .26rem;
            text-align: center;
            background: #FFBA00;
          }
        }
      }
    }
  }
`

interface Props {
  marqueeDatas: Array<{
    imgUrl: string,
    title: string,
  }>,
  itemWidth: number, // 单位宽度
  itemMargin: number, // 单位边距
  move: number, // 移动距离
  minTouchLeft: number, // 最小左滑距离
}
interface State {
  left: number
}
interface StartTouch {
  x: number,
  y: number,
}

class Marquee extends Component<Props, State> {
  state = {
    left: 0,
  }

  leftCy = 0
  marqueeTimer: any
  resetThis = true // 重置元素
  startTouch: StartTouch // touch初始位置
  requestID: number // 当前动画id
  touchMoveIn = false

  componentDidMount() {
    setTimeout(() => {
      this.requestID = window.requestAnimationFrame(() => {
        this.marqueeLeft('left')
      })
    }, 1000)
  }

  componentWillUnmount() {
    this.setState({ left: 0 })
    window.cancelAnimationFrame(this.requestID)
  }

  marqueeLeft(type: string) {
    const { marqueeDatas, itemWidth, itemMargin, move, minTouchLeft } = this.props
    const resetDot = - (marqueeDatas.length * itemWidth + (marqueeDatas.length * itemMargin * 2)) // 重置点
    this.setState({ left: this.leftCy })
    if (type === 'left') {
      this.leftCy = this.leftCy - (!this.touchMoveIn ? move : .12)
    } else if (type === 'right') {
      this.leftCy = this.leftCy + (!this.touchMoveIn ? move : .17)
    }
    if (Math.round(this.leftCy * 100) / 100 <= resetDot) { // 置换位置
      this.leftCy = 0
      this.resetThis = !this.resetThis
    } else if (Math.round(this.leftCy * 100) / 100 >= minTouchLeft) { // 已经是第一个了
      this.leftCy = minTouchLeft
    }
    if (!this.touchMoveIn) {
      this.requestID = window.requestAnimationFrame(() => {
        this.marqueeLeft('left')
      })
    }
  }

  touchStart(e) {
    const touch = e.targetTouches[0]
    e.preventDefault()
    window.cancelAnimationFrame(this.requestID)
    this.touchMoveIn = true
    this.startTouch = {x: touch.pageX, y: touch.pageY}
  }
  touchMove(e) {
    const touch = e.targetTouches[0]
    const scrollDirectionX = touch.pageX - this.startTouch.x > 0 ? 1 : -1 // 判断滑动方向，右1 左-1
    e.preventDefault()
    if (e.targetTouches.length > 1) { // 如果有多个地方滑动，直接返回
      return
    } else if (touch.pageY - this.startTouch.y < 10 && touch.pageY - this.startTouch.y > -10) { // 排除上下滑动
      if ( scrollDirectionX < 0) {
        this.marqueeLeft('left')
      } else {
        this.marqueeLeft('right')
      }
    }
  }
  touchEnd(e) {
    e.preventDefault()
    this.requestID = window.requestAnimationFrame(() => {
      this.marqueeLeft('left')
    })
    this.touchMoveIn = false
  }

  render() {
    const { marqueeDatas, itemWidth, itemMargin, minTouchLeft } = this.props
    const { left } = this.state
    const ulPosition = (itemWidth * marqueeDatas.length) + (marqueeDatas.length * itemMargin * 2)
    const wrapStyle = {
      width: `${ulPosition * 2}rem`,
      transform: `translate(${left}rem,0)`,
    }
    const listsStyles = [
      {
        width: `${ulPosition}rem`,
        left: this.resetThis ? '0' : `${ulPosition}rem`,
      },
      {
        width: `${ulPosition}rem`,
        left: this.resetThis ? `${ulPosition}rem` : '0',
      },
    ]
    return (
      <MarqueeStyled>
        <div className="marquee">
          {this.leftCy > 0 && (
            <p className="leftTip" style={{ width: `${minTouchLeft}rem` }}>
              已经是<br/>第一个了
            </p>
          )}
          <div
            className="award-marquee"
            onTouchStart={this.touchStart.bind(this)}
            onTouchMove={this.touchMove.bind(this)}
            onTouchEnd={this.touchEnd.bind(this)}
            style={wrapStyle}>
            {[0, 1].map((styleType, styleIdx) => (
              <ul className="record-lists" key={styleIdx} style={listsStyles[styleType]}>
                {marqueeDatas.map((marqueeData, idx) => (
                  <li className="record-item" key={idx} style={{
                    width: `${itemWidth}rem`,
                    margin: `0 ${itemMargin}rem`,
                    background: `no-repeat top center url(${marqueeData.imgUrl})`,
                    backgroundSize: 'auto 83%',
                  }}>
                    <p className="record-item-tit">{marqueeData.title}</p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </MarqueeStyled >
    )
  }
}
export default Marquee
