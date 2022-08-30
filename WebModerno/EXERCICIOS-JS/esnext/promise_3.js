function gerarNumerosEntre(min, max) {
  if(min > max) {
    [min, max] = [min, max]
  }

  return new Promise(resolve => {
    fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    resolve(aleatorio)
  })
}

gerarNumerosEntre(1, 60)
  .then(num => num * 10)
  .then(numX10 => `O Número Gerado Foi ${numX10}`)
  .then(console.log)