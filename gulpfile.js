const gulp = require("gulp"),
      concat = require('gulp-concat'),
      livereload = require("gulp-livereload"),
      sourcemaps = require('gulp-sourcemaps'),
      pug = require('gulp-pug'),
      sass = require('gulp-sass')(require('sass')),
      prefix = require('gulp-autoprefixer'),
      terser = require('gulp-terser'),
      ghPages = require('gulp-gh-pages');

function html() {
  return gulp
    .src("src/pug/*.pug")
    .pipe(pug())
    .pipe(gulp.dest("build"))
    .pipe(livereload()); 
}

function css() {
  return gulp
    .src("src/sass/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(prefix())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("build/css"))
    .pipe(livereload());
}

function js() {
  return gulp
    .src('src/js/*.js')
    .pipe(terser())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(livereload())
}
// function deploy() {
//   return gulp
//     .src('./build/**/*')
//     .pipe(ghPages());
// };
// gulp.task('deploy', function() {
//   return gulp
//     .src('./build/**/*')
//     .pipe(ghPages());
// });

exports.default = function () {
  require("./server.js");
  livereload.listen();
  // deploy();
  gulp.watch( ["src/pug/**/*.pug"]  ,  html );
  gulp.watch( ["src/sass/**/*.scss"]  ,  css );
  gulp.watch( ["src/js/*.js"]  ,  js );

}