const gulp = require("gulp");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");

gulp.task("scripts", function () {
    console.log("Running scripts task...");
    return gulp
        .src("src/js//*.js") // Ensure this path is correct
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js")); // Check if this path exists
});

gulp.task("styles", function () {
    console.log("Running styles task...");
    return gulp
        .src("src/css//*.css") // Ensure this path is correct
        .pipe(concat("style.min.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist/css")); // Check if this path exists
});

gulp.task("default", gulp.parallel("scripts", "styles"));
