// Funcao sem retorno
function imprimirSoma(a, b) {
	console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2) // 2º valor vai receber undefined
imprimirSoma(2, 3, 4, 5, 6) //pega o 2 e 3 e ignora o restante;
imprimirSoma(); //retorna NaN

// Funçao com retorno
function soma(a, b = 1) {
	return a + b
}
console.log(soma(2,3))
console.log(soma(2))