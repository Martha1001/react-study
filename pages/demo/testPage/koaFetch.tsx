import { Component } from 'react'
import styled from 'styled-components'
import routes from '../../routes'
const { Link } = routes

import { get } from '../../common/utils/fetch'

const KoaFetchStyled = styled.div`
  padding: .1rem;
  font-size: .24rem;

  h1{
    color: blue;
    font-size: .4rem;
  }
  a{
    text-decoration: underline;
  }
`

interface State {
  testTxt: string
}

class KoaFetch extends Component<{}, State> {
  state: State = {
    testTxt: undefined,
  }

  componentWillMount() {
    this.getTestTxt()
    this.getErr()
    this.getEnv()
  }

  async getTestTxt() {
    try {
      const res = await get('/api/test/a')
      this.setState({testTxt: res.a})
    } catch (e) {
      console.log(e)
    }
  }
  async getErr() {
    try {
      const res = await get('/api/test/ab')
      console.log(res.ab)
    } catch (e) {
      console.log(e)
    }
  }
  async getEnv() {
    try {
      const res = await get('/api/test/env')
      console.log('process.env.NODE_ENV ==> ', res.env)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { testTxt } = this.state
    return (
      <KoaFetchStyled>
        <h1>this is koa-fetch page!</h1>
        <h2>koa-router: {testTxt}</h2>
        <div>
          goBack <Link route="/demo"><a>/demo</a></Link> page
        </div>
      </KoaFetchStyled>
    )
  }
}
export default KoaFetch
