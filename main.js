'use strict'


const startNowBtn = document.querySelector('.start__now');
const links = document.querySelector('.nav__links');
const remove = document.querySelector('.remove');

startNowBtn.addEventListener('click', () =>{
links.classList.remove('notes');
links.style.transitionDuration = '200ms';
});

remove.addEventListener('click', () =>{
    links.classList.add('notes');
    links.style.transitionDuration = '200ms';
    });