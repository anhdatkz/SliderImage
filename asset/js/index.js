let mainImg = document.querySelector('.slider__img-main')
let prev = document.querySelector('.icon.prev')
let next = document.querySelector('.icon.next')
let listImg = document.querySelectorAll('.slider__item')

let currentIndex = 0
getCurrentImg(currentIndex)

function getCurrentImg(index){
    currentIndex = index
    mainImg.querySelector('img').src = listImg[currentIndex].querySelector('img').src

    // remove all active img
	listImg.forEach((item) => {
		item.classList.remove('selected')
	})

    listImg[currentIndex].classList.add('selected')
}

listImg.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        getCurrentImg(index)
    })
})

next.addEventListener('click', () => {
	if (currentIndex == listImg.length - 1) {
		currentIndex = 0
	} else currentIndex++

	getCurrentImg(currentIndex)
})

prev.addEventListener('click', () => {
	if (currentIndex == 0) currentIndex = listImg.length - 1
	else currentIndex--

	getCurrentImg(currentIndex)
})