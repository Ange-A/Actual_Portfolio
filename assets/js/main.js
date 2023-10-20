/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add
    if(this.scrolly >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', ()=>{
    modal(i)
    }) 
})

modalClose.forEach((mc)=>{
    mc.addEventListener('click', ()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 

const linkwork = document.querySelectorAll('.work__item')

function activework(){
    linkwork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(L=> L.addEventListener('click', activework) )

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scroLLy = window.pageYOffset

    sections.forEach(current => {
       const sectionHeight = current.offsetHeight,
             sectionTop = current.offsetTop -58,
             sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' +sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' +sectionId + ']').classList.remove('active-link')
        }  
    })
}

window.addEventListener('scroll', scrollActive)
/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const theme = 'light-theme'
const icontheme= 'bx-sun'

// Previously selected topic(if ever used)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localstorage.getItem('selected-icon')

// We obtain the current theme that the interfave has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(IconTheme) ? 'bx bx-moon': 'bx bx-sun'

// We validate if the user previously chose a topic

if (selectedTheme){
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectionIcon === 'bx bx-moon' ? 'add': 'remove'](iconTheme)
}


/*=============== SCROLL REVEAL ANIMATION ===============*/

