const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

//mix.disableSuccessNotifications();
//mix.setPublicPath('source/assets/build');

mix.js(__dirname + '/Resources/js/app.js', __dirname + '/Resources/views/dist/js/app.js')
    .sass(__dirname + '/Resources/sass/app.scss', __dirname + '/Resources/views/dist/css/app.css')
    .jigsaw({
        watch: ['config.php', 'source/**/*.md', 'source/**/*.php', 'source/**/*.scss'],
    })
    .options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss'),
        ],
    })
    .sourceMaps()
    .version();
