// Custom scripts
const filter = document.querySelector('.filter');

if (filter) { 
    const items = filter.querySelectorAll('.filter__item-dropdown');
    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector('.filter__item-dropdown-select').classList.toggle('show');
    })
})};
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)
  
// Аккордеон
function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
      item.addEventListener('click', () => {
          const parent = item.parentNode
          if (parent.classList.contains('accordion__item-active')) {
              parent.classList.remove('accordion__item-active')
          } else {
              document
                  .querySelectorAll('.accordion__item')
                  .forEach(child => child.classList.remove('accordion__item-active'))   
              parent.classList.add('accordion__item-active')
          }
      })
  })
}
accordion() 