var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
//this is the thing that just downlods all gulp plugins and makes them available as they are used
var plugins = require('gulp-load-plugins')({lazy:true});
//these cannot be lazy loaded for some reason
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');


// ./ is looking for local file as opposed to installed package
//store all magic strings in another file so that it can be replaced easily
var config = require('./gulp.config')();

// Static server
gulp.task('browser-sync', function () {
    'use strict';
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('vet', function () {
    'use strict';
    return gulp.src(config.alljs)
    .pipe(plugins.jscs())
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish', {verbose: true}));

});

gulp.task('styles',function(){
//    //log('Compiling less to CSS');
//    
//    return gulp
//        .src(config.less)
//        .pipe(plugins.less())
//        .pipe(plugins.autoprefixer())
//        .pipe(gulp.dest(config.tmp));
});
          
gulp.task('bundle', shell.task([
  'jspm bundle-sfx src/main'
]));  
gulp.task('uglify', function(){
    return gulp.src('./build.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));

}); 
function log(msg){
    var u = plugins.util;
    if(typeof(msg) === 'object'){
        for(var item in msg){
            if(msg.hasOwnProperty(item)){
                u.log(u.colors.blue(msg[item]));
            }
        }
    }else {
        u.log(u.colors.blue(msg));
    }
}