/*
You can use your theme's app.js file to see how your theme responds to a dynamic primary color.
Test this out by setting the color in the hash in the browser address, ie:
index.html#theme=blank&primaryColor=#00ff00
 */
document.querySelector(".button-primary").style.backgroundColor = window.primaryColor;

// :hover/:focus changes can be made via a trick like this
let themeCSS = ".top-bar-menu-item:hover{ color: "+window.primaryColor+" }";
let themeStyle = document.createElement('style');
themeStyle.appendChild(document.createTextNode(themeCSS));
document.getElementsByTagName('head')[0].appendChild(themeStyle);