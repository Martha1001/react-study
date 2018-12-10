import { Component } from 'react'
import styled from 'styled-components'
import routes from '../../routes'
const { Link } = routes

import { get, post, request } from '../../common/utils/fetch'

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
  postTestTxt: string
  postTestTxtErr: string
  postFormTest: string,
  getNodeData: any,
}

class KoaFetch extends Component<{}, State> {
  state: State = {
    testTxt: undefined,
    postTestTxt: undefined,
    postTestTxtErr: undefined,
    postFormTest: undefined,
    getNodeData: undefined,
  }

  componentWillMount() {
    this.getTestTxt()
    this.getEnv()
    this.getErr()

    this.postTestTxt()
    this.postTestTxtErr()
    this.postFormTest()

    this.getNodeData()
  }

  async getTestTxt() {
    try {
      const res = await get('/api/test/a')
      this.setState({testTxt: res.a})
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
  async getErr() {
    try {
      const res = await get('/api/test/ab')
      console.log('/ab res ==>', res)
    } catch (e) {
      console.log(e)
    }
  }

  async postTestTxt() {
    try {
      const res = await post('/api/test/postTestTxt', {
        type: 'name',
      })
      this.setState({postTestTxt: res.postTestTxt})
    } catch (e) {
      console.log(e)
    }
  }
  async postTestTxtErr() {
    try {
      const res = await post('/api/test/postTestTxt', {
        animal: 'name',
      })
      this.setState({postTestTxtErr: res.postTestTxt})
    } catch (e) {
      console.log(e)
    }
  }
  async postFormTest() {
    try {
      const res = await request({
        method: 'post',
        url: '/api/test/postFormTest',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        data: {
          animal: 'cat',
        },
      })
      this.setState({postFormTest: res.postFormTest})
    } catch (e) {
      console.log(e)
    }
  }

  async getNodeData() {
    try {
      const res = await get('/api/test/node')
      this.setState({getNodeData: res.node})
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { testTxt, postTestTxt, postTestTxtErr, postFormTest, getNodeData } = this.state
    return (
      <KoaFetchStyled>
        <h1>this is koa-fetch page!</h1>
        <h2>koa-router: {testTxt}</h2>
        <h2>koa-postTestTxt: {postTestTxt}</h2>
        <h2>koa-postTestTxtErr: {postTestTxtErr}</h2>
        <h2>koa-postFormTest: {postFormTest}</h2>
        <h2>koa-getNodeData: {getNodeData}</h2>
        <div>
          goBack <Link route="/demo"><a>/demo</a></Link> page
        </div>
      </KoaFetchStyled>
    )
  }
}
export default KoaFetch
