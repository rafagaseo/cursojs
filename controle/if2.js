function test1(num) {
	if (num > 7)
		console.log(num) // apenas esse ta dentro do if

	console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
	if (num > 7); {
		console.log(num)
	}
	// esse é o problema. Evitar usar ;
	// if (num > 7); 
	// {
	// 	console.log(num)
	// }

}

teste2(6)
teste2(8)