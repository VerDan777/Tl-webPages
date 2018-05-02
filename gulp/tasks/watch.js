const gulp = require("gulp");
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();

gulp.task("watch", function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        },
        notify: {
            styles: {
                top: "auto",
                bottom: 0
            }
        }
    });

    // pug
    watch("./src/**/*.pug", function() {
        gulp.start("pugChanged");
    });

    // css
    watch("./src/scss/**/*.scss", function() {
        gulp.start("cssInject");
    });

    // js
    watch("./src/js/**/*.js", function() {
        gulp.start("jsChanged");
    });

});

gulp.task("pugChanged", ["pugRender"], function() {
    browserSync.reload();
});

gulp.task("cssInject", ["styles"], function() {
    gulp.src("./dist/styles.css")
        .pipe(browserSync.stream());
});

gulp.task("jsChanged", ["scripts"], function() {
    browserSync.reload();
});