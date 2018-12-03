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
        </body>
      </html>
    )
  }
}
