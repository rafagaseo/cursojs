const notas = [7.3, 4.2, 9.1,8.7, 2.9]

// Sem Callback

let notasBaixas1 = []
for (let i in notas) {
	if (notas[i] < 7) {
		notasBaixas1.push(notas[i])
	}
}
console.log(notasBaixas1)

// Com Callback

notasBaixas2 = notas.filter(function(nota) {
	return nota < 7
})

console.log(notasBaixas2)

notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)