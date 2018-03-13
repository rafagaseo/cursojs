Array.protoype.forEach2 = function(callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}

const aprovados = ['Zé', 'Carl', 'Ana', 'Jo', 'Paul']

aprovados.forEach2(function(nome, indice) {
	console.log(`${indice + 1}) ${nome}`)
})