const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', ['sass']);

/* todo: add autoprefixer */
gulp.task('sass', () => {
  return gulp.src('sass/main.scss')
    .pipe(sass({
      // options here
      outputStyle: 'expanded'
    }))
    // put autoprefixer here
    .pipe(gulp.dest('assets/css'));
});
