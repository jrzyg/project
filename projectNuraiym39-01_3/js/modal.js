const modalTriggerButton = document.querySelector('#btn-get')
const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'

}
setTimeout(openModal,10000)

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTriggerButton.onclick = () => {
    openModal()
}
modalCloseButton.onclick = () => {
    closeModal()
}

modal.onclick = (event) => {
    if (event.target === modal)
        closeModal()
}



function autoOpenModal() {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1) {
        openModal();
        window.removeEventListener('scroll', autoOpenModal);
    }
}
window.addEventListener('scroll', autoOpenModal);



