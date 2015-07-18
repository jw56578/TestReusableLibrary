var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
//this is the thing that just downlods all gulp plugins and makes them available as they are used
var plugins = require('gulp-load-plugins')({lazy:true});
//these cannot be lazy loaded for some reason
//------
//run command line commands directly
var shell = require('gulp-shell');
//minify and obfuscate
var uglify = require('gulp-uglify');
//------
//by default you cannot run gulp tasks in sequence unless you setup dependencies,  so we need another library to do this
var runSequence = require('run-sequence');
// ./ is looking for local file as opposed to installed package
//store all magic strings in another file so that it can be replaced easily
var config = require('./gulp.config')();

//There is a way to have certain placeholders in the html page changed out with gulp so that this multi html page approach is not neccesary
//but do that later
gulp.task('browser-sync-dev', function () {
    'use strict';
    browserSync.init({
        server: {
            baseDir: "./"
        },
        startPath:"/indexNotBundled.html"
        
    });
});
gulp.task('browser-sync-prod', function () {
    'use strict';
    browserSync.init({
        server: {
            baseDir: "./"
        },
        startPath:"/indexBundledAndMinified.html"
        
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
gulp.task('run-dev',function(){
    runSequence(
        'browser-sync-dev'
      );

});
gulp.task('run-prod',function(){
    runSequence(
        'bundle',
        'uglify',
        'browser-sync-prod'
      );

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