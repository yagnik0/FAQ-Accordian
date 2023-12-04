"use strict";
const wrappers = document.querySelectorAll('.wrapper');


wrappers.forEach((wrapper) => {
    const headSelc = wrapper.querySelector('.heading-style');
    const paraSelc = wrapper.querySelector('.para-style');
    const plusBtn = wrapper.querySelector('.icon-plus');
    const minusBtn = wrapper.querySelector('.icon-minus');

    headSelc.addEventListener('click', () => {
        paraSelc.classList.toggle('hidden');
        plusBtn.classList.toggle('hidden');
        minusBtn.classList.toggle('hidden');
    })
    
    plusBtn.addEventListener('click', () => {
        paraSelc.classList.toggle('hidden');
        plusBtn.classList.toggle('hidden');
        minusBtn.classList.toggle('hidden');
    })

    minusBtn.addEventListener('click', () => {
        paraSelc.classList.toggle('hidden');
        plusBtn.classList.toggle('hidden');
        minusBtn.classList.toggle('hidden');
    })
})

