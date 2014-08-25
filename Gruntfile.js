module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
//        watch: {
//          css: {
//            files: 'app/css/**/*.css',
//            tasks: ['concat_css'],
//            options: {
//              spawn: false,
//              interrupt: true,
//              debounceDelay: 250,
//            },
//          },
//        },
        concat: {
            css: {
                src: ["app/css/base/reset.css", "app/css/plugins/*.css", "app/css/**/*.css"],
                dest: "public/css/app.css"
            },
            jsheader: {
                src: ["app/js/header/*.js"],
                dest: "public/js/header.js"
            },
            jsfooter: {
                src: ["app/js/footer/*.js"],
                dest: "public/js/footer.js"
            },
        },
//        jslint: {
//            header: {
//                src: ["app/js/header/*.js"],
//                dest: "public/js/header.js"
//            },
//            footer: {
//                src: ["app/js/footer/*.js"],
//                dest: "public/js/footer.js"
//            },
//        },
        styledocco: {
            documentation: {
                options: {
                    name: "Lac À L'eau Claire",
                    include: ["public/css/main.css"]
                },
                files: {
                    'public/docs': 'app/css/'
                },
            },
        },
    });

    grunt.registerTask('default', ["concat", "styledocco"]);
};
