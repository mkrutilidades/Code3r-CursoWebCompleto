function Aula(nome, videoID) {
  this.nome = nome
  this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//Simulando o construtor new
function novo(f, ...params) {
  const obj = {} // Criamos um novo objeto
  obj.__proto__ = f.prototype // "Apontamos" o prototype do new para a nova função
  f.apply(obj, params)
  return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)