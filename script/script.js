'use strict';

const headerNavWrap = document.querySelector('.header-nav-wrap');

document.addEventListener('click', elem => {
    const target = elem.target;
    if (target.closest('.link')
        || target.closest('.cross')
        || target.closest('.hamburger')) {
        headerNavWrap.classList.toggle('d-none');
        headerNavWrap.classList.toggle('d-flex');
    }
})