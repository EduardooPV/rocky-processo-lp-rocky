const ModalMenu = {
    open() {
        document
            .querySelector('.modal-overlay2.modalmenu')
            .classList.add('active2')
            document
            .querySelector('.hamburguer')
            .classList.add('remove')
    },

    close() {
        document
            .querySelector('.modal-overlay2.modalmenu')
            .classList.remove('active2')
            document
            .querySelector('.hamburguer')
            .classList.remove('remove')
    }

}