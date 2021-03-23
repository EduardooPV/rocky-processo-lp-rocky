// Functions to open and close the modal by clicking on the hamburger menu
const ModalMenu = {
    open() {
        document
            .querySelector('.modal__overlay.menu__modal')
            .classList.add('active2')

            document
            .querySelector('.hamburguer')
            .classList.add('remove')
    },

    close() {
        document
            .querySelector('.modal__overlay.menu__modal')
            .classList.remove('active2')

            document
            .querySelector('.hamburguer')
            .classList.remove('remove')
    }

}

// Scroll slow motion on lick 
const Scroll = {
     scrollslowmotion() {
         // Reaching out
        if (window.scrollY !== 0) {
            document.querySelector('.header').classList.add('header__movescroll')

            let img = document.querySelector('#img-logo')
            img.setAttribute('src', './assets/img/web/logo-black-movescroll.png')
            
        } else {
            document.querySelector('.header').classList.remove('header__movescroll')

            let img = document.querySelector('#img-logo')
            img.setAttribute('src', './assets/img/web/logo.png')
        }
    }


}

document.addEventListener("scroll", Scroll.scrollslowmotion, false)


// "About" presentation animation
const algo__about = document.querySelectorAll('[data-animation]')
const animationClass = 'animate'
const heightServices = document.querySelector('.services')

function animationScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)

    algo__about.forEach(function(element) {
        //Setting height to close the about
        const sum = (heightServices.offsetTop / 10) * 9
        if (windowTop > element.offsetTop && window.pageYOffset <sum) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

animationScroll()

// Check if you have Data-animation on the screen
if (algo__about.length) {
    window.addEventListener('scroll', function(){
        animationScroll()
})
}