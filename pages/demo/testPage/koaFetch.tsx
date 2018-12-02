import { Component } from 'react'
import routes from '../../routes'
const { Link } = routes

import { get } from '../../common/utils/fetch'

class KoaFetch extends Component {
  state = {
    testTxt: undefined,
  }

  componentWillMount() {
    this.getTestTxt()
    this.getErr()
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

  render() {
    const { testTxt } = this.state
    return (
      <div>
        <h1>this is koa-fetch page!</h1>
        <h2>{testTxt}</h2>
        <div>
          goBack <Link route="/demo"><a>/demo</a></Link> page
        </div>
      </div>
    )
  }
}
export default KoaFetch
