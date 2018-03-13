let isAtivo = true

isAtivo = 1
// quando quer comparar, usa-se o ! 
// porque 1 é Number e queremos Boolean

console.log(!!isAtivo)


console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![]) //array  
console.log(!!{}) //object
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')

// retorna o primeiro verddadeiro se tiver
console.log(('' || null || 0 || 'epa'))

let nome = 'Rafa'
console.log(nome || 'Desconecido')