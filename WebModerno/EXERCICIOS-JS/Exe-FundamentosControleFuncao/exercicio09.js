Number.prototype.entre = function (inicio=0, fim=100) {
  return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
  if(nota >=40) {
    let arredondaNota = 0

    arredondaNota = nota / 5
    arredondaNota = Math.ceil(arredondaNota)
    arredondaNota = arredondaNota * 5
    console.log(arredondaNota)

    nota = arredondaNota
  }
  
  if(nota < this.inicio || nota > this.fim) {
    console.log(`A nota não pode ser menor do que Zero(0) ou maior do que (100)`)
  } else if (nota < 38) {
    console.log(`Aluno(a) Reprovado! Nota: ${nota}`)
  } else if () {

  }
}