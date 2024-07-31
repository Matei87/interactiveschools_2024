import { src, dest } from 'gulp';
import minify from 'gulp-minify.js';
import rename from 'gulp-rename';
import cssMin from 'gulp-css';

//export default () => src('app/*.css').pipe(cssMin()).pipe(dest('dist/'));

export default () =>
  src('app/*.js')
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/'));
