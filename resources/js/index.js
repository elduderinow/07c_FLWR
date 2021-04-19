/* --- HOME - LOGO MOVE ON SCROLL ---*/

const header = document.querySelector('header');
const logoSmall = document.querySelector('#logoSmall');

window.onscroll = function(){
    let top = window.scrollY;
    console.log(top);
    if (top >= 600){
        logoSmall.classList.remove('logoSmallHide');
        logoSmall.classList.add('logoSmallShow');
    }else{
        logoSmall.classList.add('logoSmallHide')
        logoSmall.classList.remove('logoSmallShow');
    }
}