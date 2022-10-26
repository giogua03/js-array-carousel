const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const eleSlider = document.querySelector('.container');
const eleBtnLeft = document.querySelector('.btn-top');
const eleBtnRight = document.querySelector('.btn-botton');


for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('cont-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}

	eleSlider.append(eleImg);
}


const listEleImg = document.querySelectorAll('.cont-img'); 

let activeIndex = 0;


eleBtnRight.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');


	activeIndex++;


	listEleImg[activeIndex].classList.add('active');

	eleBtnLeft.classList.remove('hidden');
	if (activeIndex === listEleImg.length - 1) {
		eleBtnRight.classList.add('hidden');
	}
});

eleBtnLeft.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');

	
	activeIndex--;

	
	listEleImg[activeIndex].classList.add('active');

	eleBtnRight.classList.remove('hidden');
	if (activeIndex === 0) {
		eleBtnLeft.classList.add('hidden');
	}
});