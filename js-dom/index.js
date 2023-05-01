import hamburgerMenu from './javascript/burger_menu.js'
import { digitalClock, alarm } from './javascript/reloj.js'
import shortcuts from './javascript/teclado.js'
import countDown from './javascript/cuenta_regresiva.js'
import scrollTop from './javascript/scroll_top.js'
import darkTheme from './javascript/dark_theme.js'
import searchFilter from './javascript/filter_search.js'
import slider from './javascript/carrousel.js'
import contactformValidations from './javascript/validacion_formularios.js'

const d = document

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a')
  digitalClock('#reloj', '#btnPlay', '#btnStop')
  alarm('asset/siri-alarm.mp3', '#activar-alarma', '#desactivar-alarma')
  countDown(
    'countDown',
    'July 19, 2022 11:31:00',
    'Felicidades, has llegado a tiempo',
  )
  scrollTop('#scroll-top-btn')
  searchFilter('.card-filter', '.card')
  slider()
  contactformValidations()
})

d.addEventListener('keypress', (e) => {
  shortcuts(e)
})

darkTheme('#dark-theme-btn', 'dark-mode')
