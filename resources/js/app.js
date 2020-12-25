import Vue from 'vue';
window.Vue = Vue;

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import VueImg from 'v-img';
Vue.use(VueImg);

Vue.component('layout-top-bar', require("./components/layout/top-bar").default);
Vue.component('layout-branding', require("./components/layout/branding").default);
Vue.component('layout-menu-toggle-button', require("./components/layout/menu-toggle-button").default);
Vue.component('layout-menu-primary', require("./components/layout/menu-primary").default);
Vue.component('layout-menu-mobile', require("./components/layout/menu-mobile").default);
Vue.component('layout-page-section-banner', require("./components/layout/page-section-banner").default);
Vue.component('layout-page-section-content-block', require("./components/layout/page-section-content-block").default);
Vue.component('layout-page-section-content-block-2', require("./components/layout/page-section-content-block-2").default);
Vue.component('layout-page-section-content-block-without-image', require("./components/layout/page-section-content-block-without-image").default);
Vue.component('layout-page-section-gallery', require("./components/layout/page-section-gallery").default);
Vue.component('layout-page-section-collection-cards', require("./components/layout/page-section-collection-cards").default);
Vue.component('layout-page-section-collection-teasers', require("./components/layout/page-section-collection-teasers").default);
Vue.component('layout-page-section-collection-teasers-two-column', require("./components/layout/page-section-collection-teasers-two-column").default);
Vue.component('layout-page-section-code', require("./components/layout/page-section-code").default);
Vue.component('layout-page-section-form', require("./components/layout/page-section-form").default);
Vue.component('layout-footer', require("./components/layout/footer").default);

window.primaryColor = null;

const app = new Vue({
    el: '#app',
    data: {
        menusOpen: [],
        theme: "blank",
        primaryColor: "#815ad5",
        demoCompanyName: "Silent Image, LLC",
        demoLogoPath: "./img/logo-silentimagellc.png",
        demoIconPath: "./img/icon-silentimagellc.png",
    },
    mounted: function(){
        let hashData = this.getHashData();
        if(hashData.theme){
            this.theme = hashData.theme;
        }
        if(hashData.primaryColor){
            this.primaryColor = hashData.primaryColor;
        }
        if(hashData.demoCompanyName){
            this.demoCompanyName = hashData.demoCompanyName;
        }
        if(hashData.demoLogoPath){
            this.demoLogoPath = hashData.demoLogoPath;
        }
        if(hashData.demoIconPath){
            this.demoIconPath = hashData.demoIconPath;
        }
        window.primaryColor = this.primaryColor;
        this.setThemeCSS();
        this.setThemeJS();
    },
    methods: {
        menuIsOpen: function(key){
            return this.menusOpen.includes(key);
        },
        menuToggle: function(key, closeOthers = false){
            if(closeOthers){
                this.menuCloseAllExcept(key);
            }
            if(this.menuIsOpen(key)){
                this.menuClose(key);
            }else{
                this.menuOpen(key);
            }
        },
        menuOpen: function(key, closeOthers = false){
            if(closeOthers){
                this.menuCloseAllExcept(key);
            }
            if(!this.menuIsOpen(key)){
                this.menusOpen.push(key);
            }
        },
        menuClose: function(key){
            const index = this.menusOpen.indexOf(key);
            if (index > -1) {
                this.menusOpen.splice(index, 1);
            }
        },
        menuCloseAllExcept: function(key){
            for(let i=0;i<this.menusOpen.length;i++){
                if(this.menusOpen[key] != key){
                    this.menuClose(this.menusOpen[key]);
                }
            }
        },
        getHashData: function(){
            let hash = window.location.hash.substr(1);

            return hash.split('&').reduce(function (result, item) {
                var parts = item.split('=');
                result[parts[0]] = parts[1];
                return result;
            }, {});
        },
        setThemeCSS: function(){
            let link = document.createElement( "link" );
            link.href = "./themes/"+this.theme+"/css/app.css";
            link.type = "text/css";
            link.rel = "stylesheet";

            document.getElementsByTagName( "head" )[0].appendChild( link );
        },
        setThemeJS: function(){
            let script = document.createElement( "script" );
            script.src = "./themes/"+this.theme+"/js/app.js";
            script.type = "text/javascript";

            document.getElementsByTagName( "head" )[0].appendChild( script );
        }
    }
});
