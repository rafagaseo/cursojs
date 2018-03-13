const produtos = [
	{ nome : 'Notebook', preco: 2499, fragil: true },
	{ nome : 'iPad Pro', preco: 4199, fragil: true },
	{ nome : 'Copo de Vidro', preco: 12.49, fragil: true },
	{ nome : 'Copo de Plástico', preco: 18.99, fragil: false }
]


let caro = produto => produto.preco > 500
let fragil = produto => produto.fragil // nao precisa produto.fragil == true (ele já recebe por padrão)

let resultado = produtos.filter(caro).filter(fragil)

console.log(resultado)
