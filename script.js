let offset = 0 //смещение от левого края

const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click', () => {
  if (offset < 768) {
    offset = offset + 256 // offset +=256
    console.log(offset)
    sliderLine.style.left = -offset + 'px'
  }
})

document.querySelector('.slider-prev').addEventListener('click', () => {
  if (offset > 0) {
    offset = offset - 256 // offset +=256
    console.log(offset)
    sliderLine.style.left = -offset + 'px'
  }
})
