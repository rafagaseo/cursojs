// par nome/valor
const saudacao = "Opa" // contexto lexico 1

function exec() {
	const saudacao = "E Aiiii" // contexto lexico 2
	return saudacao
}

// Objetos são grupo aninhados de pares nome/valor
const cliente = {
	nome: 'Ráfaga',
	idade: 30,
	peso: 80,
	endereco: {
		logradouro: 'Rua Xpto',
		numero:123
	}
}

console.log(saudacao)
console.log(exec())
console.log(cliente)