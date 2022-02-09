let a = 7;
let b = 94;
let temp = a;

a = b;
b = temp;

console.log("O Valor agora de a é:" + a);
console.log("O Valor agora de b é:" + b);

// Outra maneira de trocar os valores da variaveis, é através de um array
let c = 7;
let d = 94;

[c, d] = [d, c]

console.log("O Valor agora de a é:" + c);
console.log("O Valor agora de b é:" + d);