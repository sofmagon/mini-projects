window.addEventListener("DOMContentLoaded", () => {

	let cards = document.querySelectorAll('.layout__card');
	cards.forEach(card => {

		let btn = document.createElement('BUTTON');
		let text = document.createTextNode('Delete card');

		// Agregando la misma clase del boton anterior
		btn.classList.add('content__bnt');
		btn.appendChild(text);

		// Mostrando boton debajo del anterior, dentro del mismo contenedor padre
		card.children[1].appendChild(btn);
	})
})