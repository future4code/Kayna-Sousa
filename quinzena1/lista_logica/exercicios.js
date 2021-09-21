// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui

  let altura = Number (prompt("Diga a Altura"))
  let largura= Number (prompt("Diga a Largura"))
  const resultadoDaArea= altura * largura
  
  console.log(Number (resultadoDaArea))



}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui


  let anoAtual =Number (prompt("Qual o ano atual?"))
  let anoNascimento =Number (prompt("Qual o ano do seu nascimento?"))

  const idade = anoAtual - anoNascimento

  console.log(Number (idade))

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
let peso = Number (prompt("diga seu peso em Kg"))
let altura = Number(prompt("diga sua altura em metros"))
const calculoAltura = altura * altura
const imc = peso / calculoAltura
console.log(imc)



}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
let nome = prompt("Qual seu nome?")
let idade4 =Number (prompt("Qual sua idade?"))
const email = prompt("Qual seu email?")
console.log(`Meu nome é ${nome}, tenho ${idade4} anos, e o meu email é ${email.trim()}.`)



}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let cor1 = prompt("Diga uma cor?")
  let cor2 = prompt("Diga uma cor?")
  let cor3 = prompt("Diga uma cor?")

  let coresEscolhidas = [cor1,cor2,cor3]

console.log(coresEscolhidas)


}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

  let texto = prompt("Digite seu texto")
  let textoEscolhido = texto.toUpperCase()
  console.log(textoEscolhido)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let valorEspetaculo = Number (prompt("Qual valor do espetaculo?"))
let valorIngresso = Number(prompt("Qual valor do ingresso?"))
const ingressosVendidos = valorEspetaculo / valorIngresso
console.log(ingressosVendidos)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui

  let string1 = prompt("digite algo")
  let string2 = prompt("digite algo?")
  
  let contadorDeLetras= string1.length
  let contadorDeLetras2= string2.length
let resultadoContador = contadorDeLetras2 === contadorDeLetras
  
  console.log(resultadoContador)
}


// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

  let string1 = prompt("digite algo")
  let string2 = prompt("digite algo?")
  
let resultadoString1 = string1.toUpperCase()
let resultadoString2 = string2.toUpperCase()
let junçãoDasStrings = resultadoString1 === resultadoString2
  
  console.log(junçãoDasStrings)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual =Number( prompt("Qual o ano atual?"))
  const anoNascimento =Number( prompt("Qual ano do seu nascimento?"))
  const anoCarteiraEmissão = Number(prompt("Qual ano da emissão da sua carteira?"))
  const idade =  anoAtual - anoNascimento//20
  const tempoDaCarteira = anoAtual - anoCarteiraEmissão// 5

  const idade1= idade <= 20 && tempoDaCarteira >= 5  // true
  const idade2 = idade >20 && idade <= 50 && tempoDaCarteira >= 10 // false
  const idade3 = idade > 50 && tempoDaCarteira >= 15// false



  console.log(idade1 || idade2 || idade3)






}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  let anoEscolhido= Number(prompt("Escolha um ano"))
  let mult4 = anoEscolhido%4 === 0
  let mult100 = anoEscolhido%100 === 0
  let mult400 = anoEscolhido%400 === 0 

  
  console.log(mult400 === mult100 === mult4)
 





}


// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  let idadeLabenu = prompt("Você é maior de idade?")
  let ensinoLabenu = prompt("Você tem ensino médio?")
  let disponibilidadeLabenu = prompt("Você tem horario disponivel para o curso?")



  


  console.log(idadeLabenu.includes("sim") && ensinoLabenu.includes("sim") && disponibilidadeLabenu.includes("sim"))





}