// Esse caso exportou um objeto do node e ele faz cache do objeto
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// Novas instancias criada em uma factory
const contadorC = require('./instanciaNova')() // invocando a funcao factory
const contadorD = require('./instanciaNova')()


contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
