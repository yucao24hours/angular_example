gulp = require 'gulp'

browserify = require 'browserify'
source = require 'vinyl-source-stream'

gulp.task 'script', ->
  browserify
    entries: ['./js/src/main.coffee'] # ここのファイルをもとにする
    extentions: ['.coffee'] # CoffeeScript も使えるように
  .bundle()
  .pipe source 'main.js' # 出力ファイルを指定
  .pipe gulp.dest './js/' # 出力ディレクトリを指定
  # つまり ./js/main.js に出力されることになる
