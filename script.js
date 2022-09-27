const navlistEl = document.querySelector('.navlist')
const hamburger = document.querySelector('.hamburger')
const cross = document.querySelector('.cross')

hamburger.addEventListener('click',function(){
    navlistEl.classList.add('navlisthide')
})
cross.addEventListener('click',function(){
    navlistEl.classList.remove('navlisthide')
})