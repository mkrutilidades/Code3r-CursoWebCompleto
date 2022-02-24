//Meu Exercicio
function jurosSimples(capital, taxa, tempo) {
  return console.log("Valor obtido a juros simples:"
    + Math.floor(capital * taxa * tempo)
  )
}
function jurosComposto(capital, taxa, tempo) {
  return console.log("Valor obtido a juros Compostos:"
    + Math.floor(capital * (1 + taxa) ** tempo)
  )
}

jurosSimples(40, 0.6, 12)
jurosComposto(40, 0.6, 12)

//Professor
function jurosSimples2 (capitalInicial, taxa, tempo) {
  return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos2 (capitalInicial, taxa, tempo) {
  return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples2(40, 0.6, 12));
console.log(jurosCompostos2(40, 0.6, 12));