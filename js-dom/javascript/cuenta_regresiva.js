const d = document
export default function countDown(id, limitDate, finalMessage) {
  const $countDown = d.getElementById(id)
  const countDownDate = new Date(limitDate).getTime()
  let countDownTempo = setInterval(() => {
    let now = new Date().getTime()
    let limitTime = countDownDate - now

    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
      (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
      .toString()
      .padStart(2, '0')
    let minutes = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, '0')
    let seconds = Math.floor((limitTime % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, '0')

    $countDown.innerHTML = `<h3> faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`

    if (limitTime < 0) {
      clearInterval(countDownTempo)
      $countDown.innerHTML = finalMessage
    }
  }, 1000)
}
