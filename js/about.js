const hideEls = document.querySelector('.about__header');
const hideEls1 = document.querySelector('.about__sticky');

const observer1 = new IntersectionObserver( (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			hideEls.style.height = '500px';
			hideEls1.style.height= '400px';
		}
		else{
			hideEls.style.height = '100px';
			hideEls1.style.height = '200px';
		}
	});
});
const detectSection = document.querySelector('.about__last-img');
if (detectSection) {
	observer1.observe(detectSection);
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

