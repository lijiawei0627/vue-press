## `html-webpack-plugin`

构建时 `html-webpack-plugin` 会为我们创建一个 HTML 文件，其中会引用构建出来的 `JS` 文件。实际项目中，默认创建的 HTML 文件并没有什么用，我们需要自己来写 HTML 文件，可以通过 `html-webpack-plugin` 的配置，传递一个写好的 HTML 模板：

```js
module.exports = {
  // ...
  plugins: [ // 数组  放着所有的webpack插件
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: 'assets/index.html', // 配置html模板所在的文件路径
      minify: {  // 压缩HTML文件
        removeAttributeQuotes: true,  // 删除属性的双引号
        collapseWhitespace: true,     // 折叠空行（输出的html变成一行）
        removeComments: true, 				// 移除HTML中的注释
      },
      hash: true										// 添加hash戳,每次构建时会有一个不同 hash 值，避免发布新版本时线上使用浏览器缓存
    }),
  ],
}

```

这样，通过 `html-webpack-plugin` 就可以将我们的页面和构建 `JS` 关联起来，回归日常，从页面开始开发。如果需要添加多个页面关联，那么实例化多个 `html-webpack-plugin`， 并将它们都放到 `plugins` 字段数组中就可以了。