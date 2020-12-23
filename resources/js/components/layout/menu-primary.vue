<template>
    <div class="top-bar-menu-primary">

        <a href="#" class="top-bar-menu-item top-bar-menu-item-active">Home</a>

        <div class="top-bar-menu-dropdown-group">
            <button v-on:click="$root.menuToggle('dropdown1', true)" type="button" class="top-bar-menu-item top-bar-menu-item-dropdown-toggle">
                <span>About Us</span>
                <svg class="top-bar-menu-dropdown-expand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>

            <div v-if="$root.menuIsOpen('dropdown1', true)" class="top-bar-menu-dropdown-container">
                <div class="top-bar-menu-dropdown">
                    <a href="#" class="top-bar-menu-dropdown-item">Our Services</a>
                    <a href="#" class="top-bar-menu-dropdown-item">Our Team</a>
                    <a href="#" class="top-bar-menu-dropdown-item">Test</a>
                </div>
            </div>
        </div>

        <a href="#" class="top-bar-menu-item">Pricing</a>

        <div class="top-bar-menu-dropdown-group">
            <button v-on:click="$root.menuToggle('dropdown2', true)" type="button" class="top-bar-menu-item top-bar-menu-item-dropdown-toggle">
                <span>Products</span>
                <svg class="top-bar-menu-dropdown-expand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>

            <div v-if="$root.menuIsOpen('dropdown2', true)" class="top-bar-menu-dropdown-container">
                <div class="top-bar-menu-dropdown">
                    <a href="#" class="top-bar-menu-dropdown-item">Dice</a>
                    <a href="#" class="top-bar-menu-dropdown-item">Spellbooks</a>
                    <a href="#" class="top-bar-menu-dropdown-item">Potions</a>
                    <a href="#" class="top-bar-menu-dropdown-item">Armor</a>
                    <a href="#" class="top-bar-menu-dropdown-item">Scrolls</a>
                </div>
            </div>
        </div>

        <a href="#" class="top-bar-menu-item">Contact</a>

    </div>
</template>