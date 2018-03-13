// pessoa -> 123 -> {...}
/* 
quando muda a constante, não está mudando o 
nome pessoa e sim o que está dentro
*/

const pessoa = {nome: 'Joâo'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}
/*
	Neste caso está tentando mudar a constante pessoa
	que está apontando pro objeto 456 (endereco de memoria) 
	e não pode pontar para outro objeto

*/

// esse metodo é usado pra congelar o objeto

/* 
	não é possivel, adicionar, deletar e etc. 
*/

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

