// Exercicio de Interpretação

//EXERCICIO 1

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/

//A) O CONSOLE IRA TESTAR NUMEROS QUE IRÃO DIVIDIR POR 2 SE É IGUAL A 0
//B) ELE IMPRIME PARA NUMEROS PARES " VOCÊ PASSOU NO TESTE"
//C) ELE IMPRIME PARA NUMEROS IMPARES " VOCÊ NÃO PASSOU NO TESTE"

// EXERCICIO 2

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/


//a) Serve para quando o usuario tem que escolher entre varios itens
//b) O preço da Maçã é R$ 2.25
//c) Acredito que para pêra não teria efeito algum, sim para as outras frutas que não estão listadas.




//Exercicio 3


/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/

//a) primeira linha ta pedindo para o usuario o primeiro numero
//b)se digitou 10 vai aparecer você passou no teste se digitou -10 vai dar erro
//c)sim, porque não foi utilizado else e nao foi invocada araves de função a variavel mensagem.












//Exercicio de Escrita


//EXERCICIO 1

/*let idadeUsuario = Number (prompt("Qual sua idade?"))

if (idadeUsuario >= 18) {
console.log("Você pode dirigir")

} else{
console.log("Você não pode dirigir")
}*/



//EXERCICIO 2


/*let turnoDoAluno =prompt("Qual seu turno? Digite M para matutino, V para vespertino ou N para noturno?")

if (turnoDoAluno === "M") {
console.log("Bom dia!")

} else if(turnoDoAluno === "V"){
console.log("Boa Tarde!")

} else{
console.log("Boa Noite!")
} */


//EXERCICIO 3

/*let turnoDoAluno =prompt("Qual seu turno? Digite M para matutino, V para vespertino ou N para noturno?")


switch(turnoDoAluno){
case "M":
console.log("Bom dia")
break;

case "V":
console.log("Boa Tarde")
break;

case "N":
console.log("Boa Noite")
}*/


//EXERCICIO 4



/*let generoFilme= prompt("Qual Genero do filme?")
let valorDoIngresso = prompt("Qual valor do ingresso?")

if(generoFilme === "fantasia" && valorDoIngresso <= 15){
console.log("Bom filme")
} else{
console.log("Escolha outor filme :(")
}*/