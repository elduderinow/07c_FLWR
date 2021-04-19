/* --- HOME - LOGO MOVE ON SCROLL ---*/

const header = document.querySelector('header');
const logoSmall = document.querySelector('#logoSmall');
const navbar = document.querySelector('.navbar')

window.onscroll = function(){
    let top = window.scrollY;
    if (top >= 750){
        logoSmall.classList.remove('logoSmallHide');
        logoSmall.classList.add('logoSmallShow');
        navbar.classList.add('navbarShowColor');
    }else{
        logoSmall.classList.add('logoSmallHide')
        logoSmall.classList.remove('logoSmallShow');
        navbar.classList.remove('navbarShowColor');
    }
}