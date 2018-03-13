const carrinho = [
	'{"nome": "Borracha", "preco": 3.45 }',
	'{"nome": "Caderno", "preco": 13.90 }',
	'{"nome": "Kit de Lapis", "preco": 42.22 }',
	'{"nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array com os precos

const paraObjecto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjecto).map(apenasPreco)

console.log(resultado)