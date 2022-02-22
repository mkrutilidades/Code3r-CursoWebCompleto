const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

// Função Normal
fabricantes.forEach(function(fabricante) {
  console.log(fabricante)
})
// Função Arrow
fabricantes.forEach(fabricante => console.log(fabricante))