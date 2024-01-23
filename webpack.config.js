const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, "index.js"),  //エントリポイントであるファイルのパスを指定
    output: {
        path: path.resolve(__dirname, 'dist'),  //バンドルしたファイルの出力先のパスを指定
        filename: 'bundle.js' //出力時のファイル名の指定
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
          }
        //contentBase: path.join(__dirname, './')
      }
}