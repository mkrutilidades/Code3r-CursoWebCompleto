function calculaValor(idade) {
  let total = 0
  let valor = 100
  
  if(idade < 10) {
    total = valor += 80
    console.log(`Crianças menores de 10 anos pagam R$100 + R$80 = R$${total}`)
  } else if (idade >= 10 && idade <= 30) {
    total = valor += 50
    console.log(`Conveniados entre 10 e 30 anos pagam R$100 + R$50 = R$${total}`)
  } else if (idade > 30 && idade <= 60) {
    total = valor += 95
    console.log(`Conveniados entre 31 e 60 anos pagam R$100 + R$95 = R$${total}`)
  } else if (idade > 60) {
    total = valor += 130
    console.log(`Conveniados a cima de 60 anos pagam R$100 + R$130 = R$${total}`)
  }
}

calculaValor(7)
calculaValor(15)
calculaValor(33)
calculaValor(58)
calculaValor(62)
calculaValor(13)