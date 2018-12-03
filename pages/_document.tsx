import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { REM750 } from './common/utils/rem'

interface Props {
  styleTags: any
}

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet() // 创建样式表
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />)) // 搜集样式
    const styleTags = sheet.getStyleElement() // 从表中获取所有标签
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="zh">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />
          <link rel="stylesheet" type="text/css" href="/static/css/reset.css" />
          <script dangerouslySetInnerHTML={{ __html: REM750 }} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Eruda 是一个专为手机网页前端设计的调试面板，类似 DevTools 的迷你版，其主要功能包括：
            捕获 console 日志、检查元素状态、显示性能指标、捕获 XHR 请求、显示本地存储和 Cookie 信息、浏览器特性检测等 */}
          {process.env.DEPLOY_ENV !== 'production' && [
              <script src="https://cdn.jsdelivr.net/npm/eruda"></script>,
              <script>eruda.init();</script>]}
        </body>
      </html>
    )
  }
}
