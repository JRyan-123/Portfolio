const toggleBtns = document.querySelectorAll('#theme-toggle');
const img = document.querySelector('.header__logo');


const theme = localStorage.getItem('theme');
const logo = localStorage.getItem('logo');

theme && document.body.classList.add(theme);
logo && img.classList.add(logo);

toggleBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		document.body.classList.toggle('toggle-mode');
		img.classList.toggle('filter');

		if(document.body.classList.contains('toggle-mode')){
			localStorage.setItem('theme','toggle-mode');
			localStorage.setItem('logo','filter');
	
		}else{
			localStorage.removeItem('theme');
			localStorage.removeItem('logo','filter');
		}
	});
});