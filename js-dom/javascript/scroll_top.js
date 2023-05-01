const d = document
const w = window

export default function scrollTop(btn) {
  const $scrollTopBtn = d.querySelector(btn)

  w.addEventListener('scroll', (e) => {
    if (w.scrollY < 100) {
      $scrollTopBtn.classList.add('hidden')
    } else {
      $scrollTopBtn.classList.remove('hidden')
    }
  })

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  })
}
