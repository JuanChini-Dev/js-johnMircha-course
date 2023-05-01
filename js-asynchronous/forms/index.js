const d = document

const $form = d.querySelector('.contact-form')
const $inputs = d.querySelectorAll('.contact-form [required]')

$inputs.forEach((input) => {
  const $span = d.createElement('span')
  $span.id = input.name
  $span.textContent = input.title
  $span.classList.add('contact-form-error', 'none')
  input.insertAdjacentElement('afterend', $span)
})

d.addEventListener('keyup', (e) => {
  if (e.target.matches('.contact-form [required]')) {
    let $input = e.target
    let pattern = $input.pattern || $input.dataset.pattern

    if (pattern && $input.value !== '') {
      let regex = new RegExp(pattern)
      if (!regex.exec($input.value)) {
        d.getElementById($input.name).classList.add('is-active')
        d.getElementById($input.name).classList.remove('none')
      } else {
        d.getElementById($input.name).classList.remove('is-active')
        d.getElementById($input.name).classList.add('none')
      }
    }

    if (!pattern) {
      if ($input.value === '') {
        d.getElementById($input.name).classList.add('is-active')
        d.getElementById($input.name).classList.remove('none')
      } else {
        d.getElementById($input.name).classList.remove('is-active')
        d.getElementById($input.name).classList.add('none')
      }
    }
  }
})

d.addEventListener('submit', (e) => {
  e.preventDefault()

  const $loader = d.querySelector('.contact-form-loader')
  const $response = d.querySelector('.contact-form-response')

  $loader.classList.remove('none')

  fetch('https://formsubmit.co/ajax/chini195@gmail.com', {
    method: 'POST',
    body: new FormData(e.target),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json)
      $loader.classList.add('none')
      $response.classList.remove('none')
      $response.innerHTML = `<p>${json.message}</p>`
      $form.reset()
    })
    .catch((err) => {
      console.error(err)
      let message = err.statusText || 'Ocurrio un error al enviar el correo'
      $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`
    })
    .finally(() => {
      setTimeout(() => {
        $response.classList.add('none')
      }, 2000)
    })
})
