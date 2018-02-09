const gulp = require('gulp');
const webpack = require('webpack');



gulp.task('default', function () {
    const webpackConfig = require('./webpack.date.js');
    webpack(webpackConfig, function (err, state) {
        callback(err);
        console.log('webpack date complete');
    });
});