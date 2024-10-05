// Importa Gulp
const gulp = require('gulp');
const cachebust = require('gulp-cache-bust');

// Define la tarea 'cache' para archivos en la raíz
gulp.task('cache-root', () => {
    return gulp.src(['*.html']) // Solo archivos HTML en la raíz
        .pipe(cachebust({
            type: 'timestamp' // Agrega un timestamp como sufijo a los archivos
        }))
        .pipe(gulp.dest('./')); // Guarda los archivos procesados en la misma carpeta de origen
});

// Define la tarea 'cache-servicios' para archivos en la carpeta 'servicios'
gulp.task('cache-servicios', () => {
    return gulp.src(['servicios/*.html']) // Archivos HTML en la carpeta "servicios"
        .pipe(cachebust({
            type: 'timestamp' // Agrega un timestamp como sufijo a los archivos
        }))
        .pipe(gulp.dest('servicios/')); // Guarda los archivos procesados en la misma carpeta "servicios"
});

// Define la tarea 'cache' que ejecuta ambas tareas
gulp.task('cache', gulp.series('cache-root', 'cache-servicios'));
