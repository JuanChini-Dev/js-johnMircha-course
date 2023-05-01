const d = document
$main = d.querySelector('main')
$form = d.querySelector('filesUpload')
$file = d.getElementById('files')
$image = d.querySelector('#image')
$upload = d.querySelector('#upload')

// function renderImage(formData) {
//   const file = formData.get('image')
//   const image = URL.createObjectURL(file)
//   $image.setAttribute('src', image)
// }

// d.addEventListener('change', (event) => {
//   if (event.target.files) {
//     const formData = new FormData($form)
//     renderImage(formData)
//   }
// })

// d.addEventListener('submit', (event) => {
//   if (event.target.files) {
//     event.preventDefault()
//     const formData = new FormData(event.currentTarget)
//     renderUsername(formData)
//     fetch('/', {
//       method: 'POST',
//       body: formData,
//     })
//   }
// })

const uploader = async (file) => {
  formData = new FormData()
  formData.append('file', file)

  try {
    const res = await fetch('http://localhost:8080/upload/', {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
      },
      body: formData,
    })
    if (!res.ok) {
      throw new Error('Something went wrong')
    }
  } catch (err) {
    console.error(err)
  }
}

d.addEventListener('change', (e) => {
  if (e.target === $file) {
    console.log(e.target.files)
  }
})

d.addEventListener('click', (e) => {
  if (e.target === $upload) {
    const file = Array.from($file.files)
    file.forEach((el) => {
      progressUploader(el)
    })
  }
})

const progressUploader = (file) => {
  const $progress = d.createElement('progress')
  const $span = d.createElement('span')
  $progress.value = 0
  $progress.max = 100

  $main.insertAdjacentElement('beforeend', $progress)
  $main.insertAdjacentElement('beforeend', $span)

  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)

  fileReader.addEventListener('progress', (e) => {
    let progress = parseInt((e.loaded / e.total) * 100)
    $progress.value = progress
    $span.innerHTML = `'<b>' ${file.name} </b>`
  })

  fileReader.addEventListener('loadend', (e) => {
    uploader(file)
    setTimeout(() => {
      $progress.remove()
      $span.remove()
      $file.value = ''
    }, 3000)
  })
}
