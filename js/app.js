new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
const header = document.querySelector('.header')
const button = document.querySelector('.icon-menu')
button.addEventListener('click', () =>{
    header.classList.toggle('menu-open')
})
window.addEventListener('scroll', () =>{
    if(Math.ceil(scrollY) > 50){
        header.classList.add('header-scroll')
    }else{
        header.classList.remove('header-scroll')
    }
})