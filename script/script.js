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


const throttle = _.throttle;


const players = 
    Array.from(document.querySelectorAll('.js-play-on-screen'));


function isOnScreen(el) {
    let rect = el.getBoundingClientRect() 
    return rect.top > 0 && rect.bottom < window.innerHeight;
}

function playAnimation(el) {
    if(isOnScreen(el)) el.style.animationPlayState = 'running';
}


const render = throttle(() => players.forEach(playAnimation), 150);

render();
window.addEventListener('scroll', render);