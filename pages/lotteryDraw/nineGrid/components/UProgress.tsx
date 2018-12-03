import styled from 'styled-components'

export const UProgressStyled = styled.div`
  .u-progress{
    padding: .2rem 0 .5rem;
    color: #545454;
    font-size: .3rem;
    text-align: center;

    .progress{
      position: relative;
      display: flex;
      justify-content: center;
      margin-top: .3rem;
      z-index: 1;

      span{
        display: block;
        position: relative;
        width: .5rem;
        height: .5rem;
        line-height: .5rem;
        margin: 0 .4rem;
        color: #fff;
        text-align: center;
        background: #E1E1E1;
        border-radius: 50px;
      }

      span::after{
        display: block;
        content: '';
        position: absolute;
        top: 49%;
        right: 50%;
        width: 220%;
        height: 1px;
        background: #E1E1E1;
        z-index: -1;
      }

      span.active{
        position: relative;
        background: #42F9CC;
      }

      span.active::after{
        display: block;
        content: '';
        position: absolute;
        top: 49%;
        right: 50%;
        width: 220%;
        height: 1px;
        background: #42F9CC;
        z-index: -1;
      }

      span:first-child::before,
      span:first-child::after{
        display: none;
      }
    }
  }
`

const UProgress = ({isReceive, prize, joinDay}) => {
  return (
    <UProgressStyled>
      <div className="u-progress">
        {isReceive && <p>{prize ? `恭喜您获得${prize}，快去兑换好物吧` : '您已参与过活动，快去兑换好物吧'}</p>}
        {!isReceive && <p>{`您已连续达标 ${joinDay} 天`}</p>}
        <div className="progress">
          {[1, 2, 3].map((item, idx) => (
            <span key={idx} className= { (idx < joinDay && !isReceive) ? 'active' : null }>{item}</span>
          ))}
        </div>
      </div>
    </UProgressStyled >
  )
}
export default UProgress
