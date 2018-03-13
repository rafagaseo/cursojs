const a = 1 
const b = 2 
const c = 3

const obj1 = {a: a, b: b, c: c} // forma antiga
const obj2 = {a, b, c} // es6 
console.log(obj1, obj2)

const obj3 = {}
const nomeAttr = 'nota'
const valorAttr = 7.87
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
	funcao1: function() {
		// assim é forma antiga
	}, 
	funcao2() {
		// Atualizado no ES6
	}
}

console.log(obj5)