import { src, dest, watch, parallel } from 'gulp';
import minify from 'gulp-minify.js';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';

export const style = () =>
  src('./app/*.css')
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(dest('dist/'));

export const scripts = () =>
  src('./app/*.js')
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/'));

export const structure = () =>
  src('./app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'));

export const images = () =>
  src('./app/img/*.png').pipe(imagemin()).pipe(dest('dist/img/'));

function watchFiles() {
  watch('./app/*.css', style);
  watch('./app/*.js', scripts);
  watch('./app/*.html', structure);
  watch('./app/img/*.png', images);
}

export { watchFiles as watch };
const build = parallel(style, scripts, structure, images);
export default build;
