// Aqui se incrustaran todas las tablas de multiplicar
let tableContainer = document.querySelector('.tables');
// Almacena el resultado de todas las operaciones
let result = 0;

// Loop: numero de la tabla
for (let i = 1; i <= 10; i++) {
	// Template para mostrar encabezado y cuerpo de las tablas
	tableContainer.innerHTML += `
		<div class="tables__item">
			<h2 class="tables__title">${i}X</h2>

			<!--//! Utilizando modificador de BEM como identificador unico -->
			<ul class="tables__list tables__list--${i}"></ul>
		</div>
	`;

	// Loop: numero para multiplicar
	for (let j = 1; j <= 10; j++) {
		// ejemplo, 8x1
		result = i * j;

		// Seleccionar cada caja de las tablas <ul> gracias al modificador de BEM
		let list = document.querySelector('.tables__list--' + i);
		// Agregar cada operacion en etiquetas <li>
		list.innerHTML += `<li class="list__item">${i + " X " + j + " = " + result}</li>`;
	}
}