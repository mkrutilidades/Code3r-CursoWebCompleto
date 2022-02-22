const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// //Imprimir as notas do Array que são menores do que 7.0
// // Sem callBack
const notasBaixas1 = []
for(let i in notas) {
  if(notas[i] < 7) {
    notasBaixas1.push(notas[i])
    //.push é uma função para inserir elementos no array
  }
}
console.log(notasBaixas1)

//Com CallBack
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})
console.log(notasBaixas2)

// Com callBack e Arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)