let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js/app.js').setPublicPath('public');

mix.options({
    processCssUrls: false,
    postCss: [ require('tailwindcss') ]
});

mix.copy('resources/img', 'public/img');

if(process.env.CANTRIP_THEME){
    mix.sass('resources/themes/'+process.env.CANTRIP_THEME+'/sass/app.scss', 'public/themes/'+process.env.CANTRIP_THEME+'/css/app.css');
    mix.copy('resources/themes/'+process.env.CANTRIP_THEME+'/js/app.js', 'public/themes/'+process.env.CANTRIP_THEME+'/js/app.js');
}else{
    mix.sass('resources/themes/blank/sass/app.scss', 'public/themes/blank/css/app.css');
    mix.copy('resources/themes/blank/js/app.js', 'public/themes/blank/js/app.js');
}
