const hideEls = document.querySelector('.about__header');
const hideEls1 = document.querySelector('.about__sticky');

const observer1 = new IntersectionObserver( (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			hideEls.style.top = '-17%';
			hideEls1.style.top = '-30%';
		}
		else{
			hideEls.style.top = '11%';
			hideEls1.style.top = '30%';
		}
	});
});
const detectSection = document.querySelector('.contact__icon-wrapper');
if (detectSection) {
	observer1.observe(detectSection);
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

