const { src, dest, watch, series, parallel } = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');
const htmlbeautify = require('gulp-html-beautify');
const gulpImage = require('gulp-image');
const rename = require('gulp-rename');

const jsFiles = [
  './src/js/tabs.js',
  './src/js/accordion.js'
]

const cssFiles = [
  './node_modules/normalize.css/normalize.css',
  './src/css/**/*.less',
];

function htmlDev(){
  return src('./src/*.html')
          .pipe(htmlbeautify({
            indentSize: 2
          }))
          .pipe(dest('./build'))
          .pipe(browserSync.stream());
}

function htmlBuild(){
  return src('./src/*.html')
          .pipe(htmlbeautify({
            indentSize: 2
          }))
          .pipe(dest('./build'));
}

function stylesDev(){
  return src(cssFiles)
          .pipe(sourcemaps.init())
          .pipe(less())
          .pipe(concat('styles.css'))
          .pipe(autoprefixer())
          .pipe(cleanCSS({
            level: 2
          }))
          .pipe(sourcemaps.write('./maps'))
          .pipe(dest('./build/css'))
          .pipe(browserSync.stream());
}

function stylesBuild(){
  return src(cssFiles)
          .pipe(less())
          .pipe(concat('styles.css'))
          .pipe(autoprefixer())
          .pipe(cleanCSS({
            level: 2
          }))
          .pipe(dest('./build/css'));
}

function scriptsDev(){
  return src(jsFiles)
          .pipe(concat('scripts.js'))
          // .uglify()
          .pipe(dest('./build/js'))
          .pipe(browserSync.stream());
}

function scriptsBuild(){
  return src(jsFiles)
          .pipe(concat('scripts.js'))
          // .uglify()
          .pipe(dest('./build/js'));
}

function imagesDev(){
  return src('./src/img/*')
          .pipe(gulpImage())
          .pipe(dest('./build/img'))
          .pipe(browserSync.stream());
}

function imagesBuild(){
  return src('./src/img/*')
          .pipe(gulpImage())
          .pipe(dest('./build/img'));
}

function fontsDev(){
  return src('./src/fonts/*')
          .pipe(dest('./build/fonts'))
          .pipe(browserSync.stream());
}

function fontsBuild(){
  return src('./src/fonts/*')
          .pipe(dest('./build/fonts'));
}

function watching(){
  browserSync.init({
    server: {
        baseDir: "./build/"
    }
  });

  watch('./src/css/**/*.less', stylesDev);
  watch('./src/js/**/*.js', scriptsDev);
  watch('./src/*.html', htmlDev);
  watch('./src/img/*', imagesDev);
}

function clean() {
  return del(['build/*']);
}


exports.build = series(
  clean,
  parallel(
    htmlBuild,
    stylesBuild,
    scriptsBuild,
    imagesBuild,
    fontsBuild)
);

exports.dev = series(
  clean,
  parallel(
    htmlDev,
    stylesDev,
    scriptsDev,
    imagesDev,
    fontsDev),
  watching
);