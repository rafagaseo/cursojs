// Armazenado uma função em uma variavel

const imprimirSoma = function (a, b) {
	console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma funcao arrow em uma variável
const soma = (a, b) => {
	return a + b
} 
console.log(soma(3,4))

// retorno implício
const subtracao = (a,b) => a - b
console.log(subtracao(2,1))

const imprimir2 = a => console.log(a)
imprimir2('Legal')