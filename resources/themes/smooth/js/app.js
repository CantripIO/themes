/* Configure the theme behavior */
STICKY_TOP_BAR = false
TOP_BAR_UNDER_CAROUSEL = false
BANNER_FADE_EFFECT = true
FEATURED_IMAGES_EFFECT = true

if (window.primaryColor == '#815ad5' && !window.location.href.includes('primaryColor')) {
    //reset primaryColor
    window.primaryColor = 'rgba(59, 130, 246, 0.5)'
} else {
    // :hover/:focus changes can be made via a trick like this
    let themeCSS = "\
    .top-bar-menu-item:hover { color: " + window.primaryColor + " } \
    .top-bar-menu-item-active { color: " + window.primaryColor + " } \
    .top-bar-menu-item:hover .top-bar-menu-dropdown-expand-icon { color: " + window.primaryColor + "} \
    .top-bar-menu-dropdown-item:hover { color: " + window.primaryColor + "} \
    .button-primary:hover { color: " + window.primaryColor + "; border: 1px solid " + window.primaryColor + "} \
    .content-block-content a { color: " + window.primaryColor + "; opacity: 0.8} \
    .content-block-content a:hover { color: " + window.primaryColor + "; opacity: 1} \
    .collection-cards-item-title:hover { color: " + window.primaryColor + "} \
    .collection-cards-item-read-more-link { color: " + window.primaryColor + "; opacity: 0.8 } \
    .collection-cards-item-read-more-link:hover { color: " + window.primaryColor + "; opacity: 1 } \
    .collection-teasers-item-title:hover { color: " + window.primaryColor + "} \
    .collection-teasers-item-read-more-link { color: " + window.primaryColor + "; opacity: 0.8 } \
    .collection-teasers-item-read-more-link:hover { color: " + window.primaryColor + "; opacity: 1 } \
    .form-field-input.form-field-input-text:focus { border-color: " + window.primaryColor + "} \
    .form-field-input.form-field-input-textarea:focus { border-color: " + window.primaryColor + "} \
    .pagination .previous-container .previous-link:hover { color: " + window.primaryColor + "; border-color: " + window.primaryColor + "} \
    .pagination .previous-container .previous-link:hover .previous-link-icon { color: " + window.primaryColor + "; opacity: 0.6 } \
    .pagination .page-link.active, .pagination .page-link:hover { color: " + window.primaryColor + "; border-color: " + window.primaryColor + "; opacity: 1 } \
    .pagination .next-container .next-link:hover { color: " + window.primaryColor + "; border-color: " + window.primaryColor + "} \
    .pagination .next-container .next-link:hover .next-link-icon { color: " + window.primaryColor + "; opacity: 0.6 } \
    .footer-menu-item:hover { color: " + window.primaryColor + "; opacity: 0.8 } \
    .footer-social-menu-item:hover { color: " + window.primaryColor + "} \
";

    let themeStyle = document.createElement('style');
    themeStyle.appendChild(document.createTextNode(themeCSS));
    document.getElementsByTagName('head')[0].appendChild(themeStyle);
}


// FadeIn element effect
function fadeIn(el, time, opacity) {
    el.style.opacity = 0;

    let last = +new Date();
    const tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();

        if (+el.style.opacity < opacity) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}

const topBarHTML = document.querySelector(".top-bar").outerHTML

function stickyTopBar() {
    const topBar = document.querySelector('.top-bar')
    document.addEventListener('scroll', (e) => {
        let topBarY = document.querySelector(".page-section-banner").getBoundingClientRect().bottom;
        if (topBarY <= 0) {
            topBar.style.position = "fixed";
            topBar.style.top = '0px';
            topBar.style.width = "100%";
            topBar.style.height = "90px";
            topBar.style.fontSize = "15px";
            topBar.style.zIndex = "1000";
        } else {
            topBar.style.position = "static";
            topBar.style.top = "0px";
            topBar.style.width = "100%";
            topBar.style.height = "90px";
            topBar.style.fontSize = "18px";
            topBar.style.zIndex = "auto";
        }
    });
}

function fadeWhenScroll(elClass) {

    function fadeEffect(els) {
        for (let el = 0; el < els.length; el++) {
            let elCenter = els[el].getBoundingClientRect().top + (els[el].getBoundingClientRect().height / 2)
            if (window.innerHeight >= elCenter && els[el].style.opacity == 0) {
                fadeIn(els[el], 2200, 1)
            }
        }
    }

    const elsToFade = document.getElementsByClassName(elClass);
    fadeEffect(elsToFade)
    document.addEventListener('scroll', (e) => {
        fadeEffect(elsToFade)
    })
}

// Change top-bar position
if (TOP_BAR_UNDER_CAROUSEL) {
    document.querySelector(".top-bar").outerHTML = "";
    document.querySelector('.page-section-banner-container').innerHTML += topBarHTML
}

// Stick the menu at the top of the page, when scrolling
if (STICKY_TOP_BAR) stickyTopBar()

const banner_elements = document.getElementsByClassName("banner-element");
if (!BANNER_FADE_EFFECT) {
    for (let el = 0; el < banner_elements.length; el++) {
        banner_elements[el].style.opacity = "1"
        banner_elements[el].querySelector(".banner-element-content").style.opacity = "1"
    }
}

if (!FEATURED_IMAGES_EFFECT) {
    const elsToFade = document.getElementsByClassName("content-block-featured-image");
    for (let el = 0; el < elsToFade.length; el++) elsToFade[el].style.opacity = "1"
}

// Waits for all elements to load
window.onload = function () {

    // Fade In Effect on first banner image
    if (BANNER_FADE_EFFECT) {
        for (let el = 0; el < banner_elements.length; el++) {
            fadeIn(banner_elements[el], 1200, 1)
            fadeIn(banner_elements[el].querySelector(".banner-element-content"), 4000, 0.9)
        }
    }

    // Fade In Effect on Featured Images
    if (FEATURED_IMAGES_EFFECT) fadeWhenScroll("content-block-featured-image")
}
