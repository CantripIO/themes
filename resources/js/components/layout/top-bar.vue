<template>
    <div class="top-bar">
        <div class="top-bar-container">
            <div class="top-bar-items">
                <div class="top-bar-brand-container">
                    <layout-branding></layout-branding>
                </div>
                <div class="top-bar-menu-toggle-button-container">
                    <layout-menu-toggle-button></layout-menu-toggle-button>
                </div>
                <nav class="top-bar-menu-primary-container">
                    <layout-menu-primary></layout-menu-primary>
                </nav>
            </div>
        </div>
        <div v-if="$root.menuIsOpen('mobileMenu')" class="menu-mobile-container">
            <layout-menu-mobile></layout-menu-mobile>
        </div>
    </div>
</template>