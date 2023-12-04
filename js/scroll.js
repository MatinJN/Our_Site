const header = document.querySelector('header')
const body = document.querySelector('body')
const sec = document.querySelector('.sec')
let scroll = 90
document.onscroll = () => {
    if (window.scrollY >= scroll) {
        header.style.backgroundColor = 'white'
        header.classList.add('fixedd')
        header.classList.remove('abs')
    }
    else {
        header.classList.remove('fixedd')
        header.classList.add('abs')
        header.style.backgroundColor = 'transparent'
    }
}