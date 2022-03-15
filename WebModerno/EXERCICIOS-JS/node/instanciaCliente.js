const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //Retornando função factory
const contadorD = require('./instanciaNova')() //Retornando função factory

contadorA.incrementa()
contadorA.incrementa()
console.log(contadorA.valor, contadorB.valor)

contadorC.incrementa()
contadorC.incrementa()
console.log(contadorC.valor, contadorD.valor)