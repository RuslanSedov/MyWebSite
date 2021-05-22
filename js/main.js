let button = document.querySelector('#list-button')
let list = document.querySelector('#main-list')
let width = document.documentElement.clientWidth
button.addEventListener('click', () => {
  list.classList.toggle('menu__list-hidden')
})
// if (width <= 650) {
//   list.classList.toggle('menu__list-hidden')
// }
