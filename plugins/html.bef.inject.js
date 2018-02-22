function htmlBefInjectPlugin (options) {
  this.options = options
}

htmlBefInjectPlugin.prototype.apply = function (compiler) {
  const paths = this.options.paths
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
      for (let i = paths.length - 1; i >= 0; i--) {
        let path = htmlPluginData.assets.publicPath + paths[i]
        htmlPluginData.assets.js.unshift(path)
      }
      callback(null, htmlPluginData)
    })
  })
}

module.exports = htmlBefInjectPlugin