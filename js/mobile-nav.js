const mobileNav = document.querySelector('.mobile-nav');

const mobileBtn = document.querySelector('.header__bars');

const mobileLinks = document.querySelectorAll('.mobile-nav__link');

let isMobileOpen = false;

mobileBtn.addEventListener('click', () => {
	isMobileOpen = !isMobileOpen;
	console.log('asd');
	if (isMobileOpen) {
		mobileNav.style.display = 'flex';
		document.body.style.overflowY= 'hidden';
		mobileNav.style.animationName = 'showNav';
	}
	else{
		mobileNav.style.animationName = 'hideNav';
		document.body.style.overflowY = 'auto';
	}
});

mobileLinks.forEach( link => {
	link.addEventListener('click', () => {
		isMobileOpen = false;

		mobileNav.style.animationName = 'hideNav';
		document.body.style.overflowY = 'auto';
	});
});
