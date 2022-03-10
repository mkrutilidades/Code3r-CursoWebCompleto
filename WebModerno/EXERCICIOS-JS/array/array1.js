console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') //Insere novo elemento ao array
console.log(aprovados.length) //Traz a quantidade de elementos dentro do array
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)
aprovados.sort() //Organiza os elementos dentro do array
console.log(aprovados)

delete aprovados[1] //Deleta o elemento de dentro do array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) //Serve para remover elementos ou dois ao mesmo tempo
console.log(aprovados)

aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //Remove e adiciona elementos
console.log(aprovados)

aprovados.splice(1, 0, 'Elemento3') //Remove e adiciona elementos
console.log(aprovados)