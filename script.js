"use strict";

const wrappers = document.querySelectorAll('.wrapper');

wrappers.forEach((wrapper) => {
    const headSelc = wrapper.querySelector('.heading-style');
    const paraSelc = wrapper.querySelector('.para-style');
    const plusBtn = wrapper.querySelector('.icon-plus');
    const minusBtn = wrapper.querySelector('.icon-minus');

    const toggleVisibility = function () {
        wrappers.forEach((otherWrapper) => {
            if (otherWrapper !== wrapper) {
                otherWrapper.querySelector('.para-style').classList.add('hidden');
                otherWrapper.querySelector('.icon-plus').classList.remove('hidden');
                otherWrapper.querySelector('.icon-minus').classList.add('hidden');
            }
        });

        paraSelc.classList.toggle('hidden');
        plusBtn.classList.toggle('hidden');
        minusBtn.classList.toggle('hidden');
    }

    headSelc.addEventListener('click', toggleVisibility);
    plusBtn.addEventListener('click', toggleVisibility);
    minusBtn.addEventListener('click', toggleVisibility);
});

