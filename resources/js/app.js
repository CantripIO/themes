import Vue from 'vue';
window.Vue = Vue;

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.component('layout-top-bar', require("./components/layout/top-bar").default);
Vue.component('layout-branding', require("./components/layout/branding").default);
Vue.component('layout-menu-toggle-button', require("./components/layout/menu-toggle-button").default);
Vue.component('layout-menu-primary', require("./components/layout/menu-primary").default);
Vue.component('layout-menu-mobile', require("./components/layout/menu-mobile").default);
Vue.component('layout-page-section-banner', require("./components/layout/page-section-banner").default);
Vue.component('layout-page-section-content-block', require("./components/layout/page-section-content-block").default);
Vue.component('layout-page-section-content-block-without-image', require("./components/layout/page-section-content-block-without-image").default);
Vue.component('layout-footer', require("./components/layout/footer").default);

const app = new Vue({
    el: '#app',
    data: {
        menusOpen: [],
        demoCompanyName: "Silent Image, LLC",
        demoLogoPath: "./img/logo-silentimagellc.png",
        demoIconPath: "./img/icon-silentimagellc.png",
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
        }
    }
});
