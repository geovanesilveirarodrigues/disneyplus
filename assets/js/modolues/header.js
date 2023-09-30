const header = document.querySelector('[data-header]')

function windowScroll () {
    if(window.scrollY > 20) {
        header.style.backgroundColor = '#0C0D14'
    } else {
        header.style.backgroundColor = 'transparent'  
    }
}

function setListeners () {
    window.addEventListener('scroll', windowScroll)
}
function init () {
setListeners()
}

export default {
    init
}