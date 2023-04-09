const openBtn = document.querySelector('.tbtn')
const menu = document.querySelector('.navbar')
const openBtnIcon = document.querySelector('.tbtn i')

openBtn.onclick = function func() {
    menu.classList.toggle('open')
    const isOpen = menu.classList.contains('open')

    openBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars"
}