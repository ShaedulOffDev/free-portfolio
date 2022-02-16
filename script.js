const $ = e => document.querySelector(e);
const $$ = es => document.querySelector(es);

// ! LOADER start
var loader = $('.loader');
document.body.style.overflow = 'hidden';
window.addEventListener('load', (e) => {
    loader.style.display = 'none';
    document.body.style.overflow = 'auto';
});
// ! LOADER end

// ! NAVBAR and TOP  start
var topBtn = $('.top');
var nav = $('nav');
var hideBar = $('.hide-bar');
var hidebarBtn = $('.hidebarBtn');

window.addEventListener('scroll', (e) => {
    if(window.scrollY > 2000){
        topBtn.style.display = 'block';
        hideBar.style.position = 'fixed';
        nav.classList.add('pos-fix');
        nav.classList.remove('nav-close');
        document.body.style.paddingTop = '80px'
        nav.classList.add('nav-open');
    }else{
        nav.classList.remove('nav-open');
        nav.classList.add('nav-close');
        topBtn.style.display = 'none';
    }
    if(window.scrollY < 300){
        hideBar.style.position = 'absolute';
        document.body.style.paddingTop = '0'
        nav.classList.remove('nav-close');
        nav.classList.remove('nav-open');
        nav.classList.remove('pos-fix');
    }
})
topBtn.addEventListener('click', (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

hidebarBtn.addEventListener('click', (e)=>{
    if(hideBar.classList.contains('hide-bar-open')){
        hideBar.classList.remove('hide-bar-open')
    }else{
        hideBar.classList.add('hide-bar-open')
    }

})
// ! NAVBAR and TOP end