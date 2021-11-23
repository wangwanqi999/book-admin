module.exports = {
  rules: [
    {
      test: /\.(scss|css)?$/,
      loaders: ['style', 'css', 'sass']
    }
  ],
  devServer: {
    open: true,
    proxy: {
      '/proxy': {
        // 点击这个按钮 触发请求api 这是请求时http: //localhost:8080/proxy/list
        target: 'http://your_api_server.com',
        changeOrigin: true, // 替换localhost
        pathRewrite: {
          '^/proxy': '' // 将proxy替换成''
        }
      }
    }
  }
}
