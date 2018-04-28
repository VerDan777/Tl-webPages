const gulp = require("gulp");
const sass = require("gulp-sass");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const SassModuleImporter = require("sass-module-importer");

gulp.task("styles", () => {
    return gulp.src("./src/scss/**/*.scss")
    .pipe(sass({importer: SassModuleImporter()}))
    .on("error", notify.onError(function(error){
        console.log(error.toString());
        this.emit("end");
    }))
    .pipe(autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
    }))
    .pipe(gulp.dest("./dist"))
})