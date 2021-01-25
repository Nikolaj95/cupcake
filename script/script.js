'use strict';

const hamburger = document.querySelector('.hamburger');
const headerNavWrap = document.querySelector('.header-nav-wrap');
const cross = document.querySelector('.cross');

function toggle() {
    headerNavWrap.classList.toggle('d-none');
    headerNavWrap.classList.toggle('d-flex');
}

hamburger.addEventListener('click', () => {
    toggle();
})

headerNavWrap.addEventListener('click', elem => {
    const target = elem.target;
    console.log(target)
    if (target.closest('a') || target === cross) {
        toggle();
    }
})