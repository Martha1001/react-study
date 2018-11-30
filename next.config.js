const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  useFileSystemPublicRoutes: false // 禁止服务端的文件路由
})

