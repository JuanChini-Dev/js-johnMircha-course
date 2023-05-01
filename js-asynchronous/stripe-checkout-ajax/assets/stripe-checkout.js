import STRIPE_KEYS from './stripe-keys.js'

const d = document,
  $product = d.getElementById('products'),
  $template = d.getElementById('product-template').content,
  $fragment = d.createDocumentFragment()

const fetchOptions = {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
}

let product, price

const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`

Promise.all([
  fetch('https://api.stripe.com/v1/products', fetchOptions),
  fetch('https://api.stripe.com/v1/prices', fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    product = json[0].data
    price = json[1].data

    price.forEach((el) => {
      let productData = product.filter((product) => product.id === el.product)

      $template.querySelector('.product').setAttribute('data-price', el.id)
      $template.querySelector('img').src = productData[0].images[0]
      $template.querySelector('img').alt = productData[0].name
      $template.querySelector('figcaption').innerHTML = `
        ${productData[0].name}
        <br>
        ${moneyFormat(el.unit_amount_decimal)} ${el.currency.toUpperCase()}
        `

      let $clone = d.importNode($template, true)
      $fragment.appendChild($clone)
    })
    $product.appendChild($fragment)
  })
  .catch((err) => {
    console.log(err)
    let message =
      err.statusText || 'Ocurrió un error al conectarse con la API de Stripe'
    $product.innerHTML = `<p>Error ${err.status}: ${message}</p>`
  })

d.addEventListener('click', (e) => {
  if (e.target.matches('.product *')) {
    let priceId = e.target.parentElement.getAttribute('data-price')
    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: 'payment',
        successUrl:
          'http://127.0.0.1:5500/js-asynchronous/stripe-checkout-ajax/assets/stripe-success.html',
        cancelUrl:
          'http://127.0.0.1:5500/js-asynchronous/stripe-checkout-ajax/assets/stripe-error.html',
      })
      .then((res) => {
        if (res.error) {
          $product.insertAdjacentHTML('afterend', res.error.message)
        }
      })
  }
})
