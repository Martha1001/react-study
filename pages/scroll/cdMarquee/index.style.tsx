import styled from 'styled-components'

const CommonStyled = styled.div`
  padding: 0;
  margin: 0;

  img{
    display: block;
    width: 100%;
    color: #fff;
    font-size: .4rem;
  }

  input,button{
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    outline: none;
  }

  ul,li{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }
`

export const CdMarqueestyled = styled(CommonStyled)`
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
