let tipo = ''

function triangulo (ladoA, ladoB, ladoC) {
  if(ladoA == ladoB && ladoB == ladoC) {
    tipo = 'Equilátero'
  } else if (ladoA == ladoB || ladoA ==ladoC || ladoB == ladoC) {
    tipo = 'Isósceles'
  } else {
    tipo = 'Escaleno'
  }

  console.log(`Este triangulo será... ${tipo}`)
}

triangulo(5, 2, 3)
triangulo(5, 2, 5)
triangulo(10, 10, 10)