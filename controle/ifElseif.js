Number.prototype.entre = function(inicio, fim) {
	return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
	if (nota.entre(9,10)) {
		console.log('Quadro de Honra')
	} else if (nota.entre(7, 8.99)) {
		console.log('Aprovado')
	} else if (nota.entre(4, 6.999)) {
		console.log('Recuperação')
	} else if (nota.entre(0,3.999)) {
		console.log('Reprovado')
	} else {
		console.log('Nota Inválida')
	}
}

imprimirResultado(10)
imprimirResultado(8.99)
imprimirResultado(6.5)
imprimirResultado(3.2)
imprimirResultado(-1)
imprimirResultado(11)