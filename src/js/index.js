/*!
 * Harrix HTML Template (https://github.com/Harrix/Harrix-HTML-Template)
 * Copyright 2018 Sergienko Anton
 * Licensed under MIT (https://github.com/Harrix/Harrix-HTML-Template/blob/master/LICENSE)
 */

import fontawesome from '@fortawesome/fontawesome'
import fontawesomeFreeSolid from '@fortawesome/fontawesome-free-solid'
import fontawesomeFreeRegular from '@fortawesome/fontawesome-free-regular'
import fontawesomeFreeBrands from '@fortawesome/fontawesome-free-brands'

document.addEventListener('DOMContentLoaded', () => {
    initNavbar(50, 300);
});

function initNavbar(scrollTopLogoShrink, scrollTopNavbarHide) {
    const rootEl = document.documentElement;
    const navbarEl = document.getElementById('h-navbar');
    const navbarBurger = document.getElementById('h-burger');
    const bottomNavbar = document.getElementById('h-bottom-navbar');
    const logo = document.getElementById('h-logo');
    let lastY = 0;
    let currentY = 0;

    let hasClassHide = logo.classList.contains('h-is-hidden-navbar');

    bottomNavbar.onmouseover = function(event) {
        navbarEl.classList.remove('h-is-hidden-navbar');
        hasClassHide = false;
    };

    navbarBurger.addEventListener('click', () => {
        rootEl.classList.toggle('h-is-hidden-scrollbars');
        const target = document.getElementById(navbarBurger.dataset.target);
        navbarBurger.classList.toggle('is-active');
        target.classList.toggle('is-active');
    });

    window.addEventListener('scroll', function() {
        lastY = currentY;
        currentY = window.scrollY;

        if (currentY >= scrollTopLogoShrink)
            logo.classList.add('h-logo-shrink');
        else
            logo.classList.remove('h-logo-shrink');

        if ((currentY > scrollTopNavbarHide) && (currentY > lastY) && (!hasClassHide)) {
            navbarEl.classList.add('h-is-hidden-navbar');
            hasClassHide = true;
        }

        if ((currentY < lastY) && (hasClassHide)) {
            navbarEl.classList.remove('h-is-hidden-navbar');
            hasClassHide = false;
        }
    });
}