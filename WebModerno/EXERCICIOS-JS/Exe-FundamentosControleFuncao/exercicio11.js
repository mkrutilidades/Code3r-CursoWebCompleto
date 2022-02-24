function confereBissextos(ano) {
  let data = ano.toString().substr(-2)
    
  if(data == 00){
    if(ano % 400 == 0) {
      console.log(`O Ano de ${ano} é bissexto!`)
    } else {
      console.log(`O Ano de ${ano} NÃO é bissexto!`)
    }    
  } else if(ano % 4 == 0) {
    console.log(`O Ano de ${ano} é bissexto!`)
  } else {
    console.log(`O Ano de ${ano} NÃO é bissexto!`)
  }
}

confereBissextos(2000)
confereBissextos(2022)
confereBissextos(2031)
confereBissextos(2020)
confereBissextos(1985)
confereBissextos(0)
confereBissextos(4)
confereBissextos(100)
confereBissextos(400)
confereBissextos(800)
confereBissextos(2021)