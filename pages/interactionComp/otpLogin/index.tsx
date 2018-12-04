import { Component } from 'react'
import { OtpLoginStyled } from './index.style'
import { OtpLoginBox } from './conponents'

import { post } from '../../common/utils/fetch'

class OtpLogin extends Component {
  componentWillMount() {
    console.log('componentWillMount')
  }

  async sendSmsCode(smsCode) {
    try {
      const sendSmsCodeRes = await post('/api/interactionComp/sendSmsCode', {
        smsCode,
      })
      if (sendSmsCodeRes.isSuccess) {
        console.log('验证码发送成功！')
      } else {
        console.log(sendSmsCodeRes.message)
      }
    } catch (e) {
      console.log(e)
    }
  }
  async otpLogin(phone: string, smsCode: string) {
    try {
      const otpLoginRes = await post('/api/interactionComp/otpLogin', {
        phone,
        smsCode,
      })
      if (otpLoginRes.isSuccess) {
        console.log('otp 登录成功！')
      } else {
        console.log(otpLoginRes.message)
      }
    } catch (e) {
      console.log(e)
    }
  }
  showToast(txt) {
    console.log(txt)
  }

  render() {
    return (
      <OtpLoginStyled>
        <OtpLoginBox
          sendSmsCode={this.sendSmsCode.bind(this)}
          otpLogin={this.otpLogin.bind(this)}
          showToast={this.showToast.bind(this)} />
      </OtpLoginStyled>
    )
  }
}

export default OtpLogin
