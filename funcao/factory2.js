function criarProduto(nome, preco) {
	return {
		nome,
		preco,
		desconto: 0.1 
	}
}

console.log(criarProduto('Mackbook', 7980.20))
console.log(criarProduto('Iphone', 998.49))

