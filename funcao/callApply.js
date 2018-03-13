function getPreco(imposto = 0, moeda = 'R$') {
	return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
	nome: 'Notebook',
	preco: 4589,
	desc: 0.25,
	getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 40300, desc: 0.3}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))


console.log(getPreco.call(carro, 0.17, '$')) // 1o contexto, depois os paramentros
console.log(getPreco.apply(carro, [0.17, '$']))

// a diferença entre call e apply é que o apply precisa estar em array
