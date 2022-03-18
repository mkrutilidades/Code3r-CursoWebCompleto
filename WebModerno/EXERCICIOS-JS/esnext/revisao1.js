//let e const
{
  var a = 2 //var não tem escopo de bloco
  let b = 3 //let tem escopo de bloco
  console.log(b)
}
console.log(a)

//Template String
const produto = 'Ipad'
console.log(`${produto}
é
caro!`)

//Operador destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ama', idade: 9 }
console.log(i, nome)