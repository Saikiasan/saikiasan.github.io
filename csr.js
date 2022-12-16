var nav = document.querySelector('.navbar')
var linksNav = document.querySelectorAll('.nav-item')

setTimeout(function () {
    nav.classList.add('active')
}, 1000)

function navRF () {
    nav.classList.remove('active')
    nav.classList.add('cl')
    setTimeout(function () {
        nav.classList.add('active')
        nav.classList.remove('cl')
    }, 1200)}

for (var i = 0; i < linksNav.length; i++) {
    linksNav[i].addEventListener('click', function () {
        nav.classList.contains('active') ? navRF() : nav.classList.add('active')
    })
}