const valores = [7.7, 8.9, 3.3, 1.4]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //adiciona novos elementos no array
console.log(valores)

console.log(valores.pop()) //pega ultimo valor do array, array perde o valor
delete valores[0]
console.log(valores)
console.log(typeof valores)