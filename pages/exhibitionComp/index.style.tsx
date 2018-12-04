import styled from 'styled-components'

export const CommonStyled = styled.div`
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
`

export const ExhibitionCompStyled = styled.div`
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
