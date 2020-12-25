let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js/app.js').setPublicPath('public');

mix.options({
    processCssUrls: false,
    postCss: [ require('tailwindcss') ]
});

mix.copy('resources/img', 'public/img');

mix.sass('resources/themes/blank/sass/app.scss', 'public/themes/blank/css/app.css');