<template>
    <button class="top-bar-menu-toggle-button" v-on:click="$root.menuOpen('mobileMenu')" type="button">
        <span class="top-bar-menu-toggle-label">Open menu</span>
        <svg class="top-bar-menu-toggle-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
    </button>
</template>