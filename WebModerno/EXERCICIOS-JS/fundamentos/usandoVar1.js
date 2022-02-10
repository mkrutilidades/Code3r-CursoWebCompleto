/* 
  *** A variavel var ficará visivel para todo o contexto da aplicação. Apenas quando ela é declarada
  *** dentro de uma função, que ela não ficará visivel
*/
{
  {
    {
      {
        var sera = 'será???'
      }
    }
  }
}
console.log(sera)

function teste() {
  var local = 123
}
teste()
console.log(local)