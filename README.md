# Cantrip Themes

This repository is a tool to help build themes for the [Cantrip website builder](https://cantrip.io)

![Cantrip Themes](https://raw.githubusercontent.com/CantripIO/themes/main/resources/img/readme-banner.gif)

## Installation

```
git clone git@github.com:CantripIO/themes.git cantrip-themes
cd cantrip-themes
npm install
npm run dev
```

You should now be able to open the files `./public/index.html` and `./public/post.html` to view the page layout with the "blank" default theme

## Installing and Viewing a specific theme

To compile theme files for a specific theme, pass the theme name in a `CANTRIP_THEME` env variable:

```
CANTRIP_THEME=rad npm run dev
```

And then view the new theme by passing theme=[theme-name] in your address bar:

```
.../cantrip-themes/public/index.html#theme=rad
```

## Creating a new theme

In resources > themes, create a new directory with your theme name. 

Within that directory, create new files for: `js/app.js`, `sass/app.scss`, and `theme.json`

Your structure should look something like this

    .
    ├── ...
    ├── resources
    │   ├── themes
    │   |   |── [theme-name]
    |   |   |   ├── js
    |   |   |   |   ├── app.js
    |   |   |   ├── sass
    |   |   |   |   ├── app.scss
    |   |   |   ├── theme.json
    │   └── ...
    └── ...
    
Alternatively, you can use the "blank" theme as a starting point by copying `./resources/themes/blank` to `./resources/themes/[theme-name]`

You can even create a theme that uses base components from the blank theme except for the elements your theme extends (see "rad" theme for an example)

### Compiling assets

Cantrip uses Laravel Mix (Webpack) to compile assets. During this process, your SASS files are compiled, and your JS script is copied into `./public`

To compile the assets for your specific theme, run (replacing [theme-name] with the name of your theme):

`CANTRIP_THEME=[theme-name] npm run dev`

or to watch for file changes:

`CANTRIP_THEME=[theme-name] npm run watch`

### Viewing your theme

To view your theme instead of the "blank" theme when viewing /public/index.html or /public/post.html, simply add it to the hash in the address bar and refresh the page like the example below

`~/cantrip-themes/public/index.html#theme=[theme-name]`

The page should now load your theme CSS and JS files

### Supporting primary / brand colors

All Cantrip themes should support the ability to set a primary (or "brand") color. To test out a custom color on your theme, pass it in the hash in the address bar:

`~/cantrip-themes/public/index.html#theme=[theme-name]&primaryColor=#FF0000`

You can use javascript to dynamically alter your CSS based on these custom colors. 

For an example of this, view `./resources/themes/blank/js/app.js`