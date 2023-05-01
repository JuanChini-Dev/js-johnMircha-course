const d = document

export default function shortcuts(e) {
  console.log(e.keyCode)
  console.log(e.key)
  console.log(e.altKey)
  console.log(e.ctrlKey)

  if (e.key === 'a' && e.ctrlKey) {
    alert('Haz lanzado una alerta')
  }

  if (e.key === 'c' && e.ctrlKey) {
    confirm('Haz lanzado una confirmacion')
  }

  if (e.key === 'p' && e.ctrlKey) {
    prompt('Haz lanzado un aviso')
  }
}
