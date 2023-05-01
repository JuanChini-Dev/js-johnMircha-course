const d = document
export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn)

  const $selectors = d.querySelectorAll('[data-dark]')

  let moon = '🌙'
  let sum = '🌞'

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark))
    $themeBtn.textContent = moon
    localStorage.setItem('theme', 'light')
  }
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark))
    $themeBtn.textContent = sum
    localStorage.setItem('theme', 'dark')
  }

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode()
      } else {
        lightMode()
      }
    }
  })

  d.addEventListener('DOMContentLoaded', (e) => {
    if (localStorage.getItem('theme' === null)) {
      lightMode()
    }
    if (localStorage.getItem('theme') === 'dark') {
      darkMode()
    }
    if (localStorage.getItem('theme') === 'light') {
      lightMode()
    }
  })
}
