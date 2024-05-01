window.addEventListener('DOMContentLoaded', event => {

	let card = document.querySelector('.layout__card');
	let header = document.querySelector('.card__header');
	let description = document.querySelector('.content__description');
	let button = document.querySelector('.content__bnt');

	// Eventos
	button.addEventListener('click', () => {
		card.style.boxShadow = '0px 0px 5rem white';
		header.style.backgroundColor = 'navy';
		header.style.padding = '0.5rem 0 0 0';
		description.style.opacity = 0.5;
		button.style.backgroundColor = 'white';
		button.style.color = 'black';
	})
})