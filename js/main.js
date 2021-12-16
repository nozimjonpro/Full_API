const elHambergur = document.querySelector('.hambergur');
const cHambergur = document.querySelector('.hambergur__close')
const elHeader = document.querySelector('.header');

elHambergur.addEventListener('click', ()=>{
elHeader.classList.toggle('header--active')
})

cHambergur.addEventListener('click', ()=>{
    elHeader.classList.toggle('header--active')
    })