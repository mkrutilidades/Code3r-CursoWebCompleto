// Transaformando Objeto em JSON
const obj = { a:1, b:2, c:3, soma() { return a + b + c} }
console.log(JSON.stringify(obj))

// Transaformando JSON em Objetos
//console.log(JSON.parse("{ a:1, b:2, c:3 }")) // Não é válido
//console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3 }")) // Não é válido
console.log(JSON.parse('{ "a":1, "b":2, "c":3}'))

// Formatdos válidos dentro de um JSON
console.log(JSON.parse('{ "a":1, "b":"string", "c":true, "d":{}, "e":[], "f":1.99 }'))