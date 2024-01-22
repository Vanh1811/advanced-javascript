import { initDropdown } from './dropdown'
import { createDots, nextSlide, prevSlide } from './imageSlider'

initDropdown('menu1')

const prev = document.querySelector('.left')
const next = document.querySelector('.right')

prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)

createDots()
setInterval(nextSlide, 5000)