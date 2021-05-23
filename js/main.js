let button = document.querySelector('#list-button')
let list = document.querySelector('#main-list')
let width = document.documentElement.clientWidth
button.addEventListener('click', () => {
  if (list.classList.contains('menu__list-close')) {
    button.classList.remove('menu__button-close')
    button.classList.add('menu__button-open')
    list.classList.remove('menu__list-close')
    list.classList.add('menu__list-open')
  } else {
    button.classList.remove('menu__button-open')
    button.classList.add('menu__button-close')
    list.classList.remove('menu__list-open')
    list.classList.add('menu__list-close')
  }
})
// if (width <= 650) {
//   list.classList.toggle('menu__list-hidden')
// }
