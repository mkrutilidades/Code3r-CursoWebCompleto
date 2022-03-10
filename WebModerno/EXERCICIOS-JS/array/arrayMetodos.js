const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona elemento na primeira posição do array
console.log(pilotos)

// Splice pode adicionar e remover elementos
console.log(pilotos)
pilotos.splice(2, 0, 'Bottas', 'Senna')
console.log(pilotos)

console.log(pilotos)
pilotos.splice(3, 1) //Massa Quebrou de novo
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo Array
console.log(pilotos)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 3)
console.log(pilotos)
console.log(algunsPilotos2)