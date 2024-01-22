let currentSlide = 0

function showSlide (index){
    const slides = document.querySelector('.slides')
    const slideWidth = document.querySelector('.slide').offsetWidth
    slides.style.transform = `translateX(-${index * slideWidth}px)`;

    currentSlide = index
    updateDots()
}

function nextSlide (){
    const totalSlides = document.querySelectorAll('.slide').length
    currentSlide = (currentSlide + 1 ) % totalSlides
    showSlide(currentSlide)
}

function prevSlide (){
    const totalSlides = document.querySelectorAll('.slide').length
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    showSlide(currentSlide)
}

function createDots (){
    const navigation = document.getElementById('navDots')
    const totalSlides = document.querySelectorAll('.slide').length

    for(let i = 0; i < totalSlides; i++){
        const dot = document.createElement('div')
        dot.className = 'dot'
        dot.addEventListener('click',() => showSlide(i))
        navigation.appendChild(dot)
    }

    updateDots()
}

function updateDots (){
    const dots = document.querySelectorAll('.dot')
    dots.forEach((dot, index) => {
        index === currentSlide
        ? dot.style.backgroundColor = '#333'
        : dot.style.backgroundColor = '#bbb'
    })
}

export { createDots, nextSlide, prevSlide }