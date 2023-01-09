let totalSlides = document.querySelectorAll('.slider--item').length
let currentSlide = 0

document.querySelector('.slider--width').style.width = `calc(100vw *${totalSlides})`

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider--item').clientHeight}px`


function goBack() {
    currentSlide--
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1
    }
    uptadeMargin()
}


function goNext () {
    currentSlide++
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0
    }
    uptadeMargin()
}

function uptadeMargin () {
    let sliderWidth = document.querySelector('.slider--item').clientWidth
    let newMargin = (currentSlide * sliderWidth)
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext,6000)