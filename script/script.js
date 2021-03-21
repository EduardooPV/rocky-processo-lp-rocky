const ModalMenu = {
    open() {
        document
            .querySelector('.modal__overlay.modalmenu')
            .classList.add('active2')
            document
            .querySelector('.hamburguer')
            .classList.add('remove')
    },

    close() {
        document
            .querySelector('.modal__overlay.modalmenu')
            .classList.remove('active2')
            document
            .querySelector('.hamburguer')
            .classList.remove('remove')
    }

}

// Scroll slow motion on lick 

const Scroll = {
     scrollslowmotion() {
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