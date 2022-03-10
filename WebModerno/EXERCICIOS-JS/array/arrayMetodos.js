const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
// pilotos.pop() // massa quebrou o carro!
// console.log(pilotos)

// pilotos.push('Verstappen')
// console.log(pilotos)

// pilotos.shift() //remove o primeiro
// console.log(pilotos)

// pilotos.unshift('Hamilton') //Adiciona elemento na primeira posição do array
// console.log(pilotos)

// Splice pode adicionar e remover elementos
console.log(pilotos)
pilotos.splice(2, 0, 'Bottas', 'Senna')
console.log(pilotos)