let mix = require('laravel-mix');

mix
  .combine([
  'src/assets/js/graph-creator/d3.js',
  'src/assets/js/graph-creator/file-saver.js',
  'src/assets/js/graph-creator/graph-creator.js'
], 'public/js/graph-creator.js')