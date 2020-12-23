let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js/app.js').setPublicPath('public');

mix.options({
    processCssUrls: false,
    postCss: [ require('tailwindcss') ]
});

mix.sass('resources/sass/themes/blank/app.scss', 'public/css/themes/blank/app.css');

mix.copy('resources/img', 'public/img');