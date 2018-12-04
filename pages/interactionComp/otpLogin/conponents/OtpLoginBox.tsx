import { Component } from 'react'
import styled from 'styled-components'

const OtpLoginBoxStyled = styled.div`
  .login-box{

    .login-item{
      width: 100%;
      margin-bottom: .2rem;
      background: #fff;
      border-radius: 6px;

      .login-ipt,
      .login-btn{
        font-size: .3rem;
        font-weight: 400;
      }

      .login-ipt{
        display: block;
        width: 92%;
        padding: .2rem 4%;
        color: #333;

        &::placeholder{
          color: #B8ADAF;
          font-size: .3rem;
        }
      }
    }
    .login-item-smscode{
      display: flex;
      justify-content: center;
      align-items: center;

      .login-ipt{
        width: 60%;
      }
      .login-btn{
        width: 40%;
        margin: .2rem 0;
        padding: 0 4%;
        color: #FF8EC0;
        border-left: 1px solid #CCCCCC;
      }
    }

    .login-sbt{
      display: block;
      width: 100%;
      height: .9rem;
      color: #fff;
      font-size: .3rem;
      letter-spacing: 6px;
      background: #FF8EC0;
      border-radius: 6px;
    }
  }
`

interface Props {
  sendSmsCode: (phone: string) => {},
  otpLogin: (phone: string, smsCode: string) => {},
  showToast: (txt: string) => {},
}
interface State {
  phone: string,
  smsCode: string,
  smsCodeBtnTxt: string,
  isBtnDisabled: boolean,
  [args: string]: any,
}

class OtpLoginBox extends Component<Props, State> {
  state: State = {
    phone: '',
    smsCode: '',
    smsCodeBtnTxt: '获取验证码',
    isBtnDisabled: false,
  }
  countDown: number = 60
  countDownTimer: any

  componentWillUnmount() {
    this.setState({
      phone: '',
      smsCode: '',
      smsCodeBtnTxt: '获取验证码',
      isBtnDisabled: false,
    })
    clearTimeout(this.countDownTimer)
    this.countDown = 60
  }

  changeIpt = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  setTime() {
    if (this.countDown === 0) {
      this.setState({
        smsCodeBtnTxt: '获取验证码',
        isBtnDisabled: false,
      })
      this.countDown = 60
      return
    }
    this.setState({ smsCodeBtnTxt: `${this.countDown}s` })
    this.countDown--
    this.countDownTimer = setTimeout(() => {
      this.setTime()
    }, 1000)
  }
  checkPhone = (phone: string): boolean => {
    const { showToast } = this.props
    const isPhone = (function phoneVerify(phoneNum) {
      const phoneReg = /^1[0-9]{10}$/
      if (!phoneReg.test(phoneNum)) {
        return true
      }
      return false
    })(phone)
    if (phone === '') {
      showToast('手机号不能为空')
      return false
    } else if (isPhone) {
      showToast('手机号格式不正确')
      return false
    }
    return true
  }
  checkSmsCode = (yzm: string): boolean => {
    const { showToast } = this.props
    if (yzm === '') {
      showToast('验证码不能为空')
      return false
    }
    return true
  }

  sendSmsCode() {
    const { phone } = this.state
    if (this.checkPhone(phone)) {
      this.setState({ isBtnDisabled: true })
      this.setTime()
      this.props.sendSmsCode(phone)
    }
  }
  otpLogin() {
    const { phone, smsCode } = this.state
    if (this.checkPhone(phone) && this.checkSmsCode(smsCode)) {
      this.props.otpLogin(phone, smsCode)
    }
  }

  render() {
    const { phone, smsCode, smsCodeBtnTxt, isBtnDisabled } = this.state
    return (
      <OtpLoginBoxStyled>
        <div className="login-box">
          <div className="login-item">
            <input
              className="login-ipt"
              value={phone}
              name="phone"
              placeholder="请输入手机号码"
              type="text"
              autoComplete="off"
              maxLength={11}
              onChange={this.changeIpt} />
          </div>
          <div className="login-item login-item-smscode">
            <input
              className="login-ipt"
              value={smsCode}
              name="smsCode"
              placeholder="请输入验证码999999"
              type="text"
              autoComplete="off"
              maxLength={6}
              onChange={this.changeIpt} />
            <button
              className="login-btn"
              disabled={isBtnDisabled}
              onClick={this.sendSmsCode.bind(this)}>{smsCodeBtnTxt}</button>
          </div>
          <button className="login-sbt btn" onClick={this.otpLogin.bind(this)}>提交</button>
        </div>
      </OtpLoginBoxStyled>
    )
  }
}
export default OtpLoginBox
