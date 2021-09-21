
//  exrcicio de interpretação
//Exercicio 1
 
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]) */

// Resposta: ira ser impresso 3 logs onde um ira dizer Matheus Nachtergaele
// no outro virginia Cavendish e no outro o objeto da posição 2 que é globo 14 horas.




//Exercicio 2


/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/

// Resposta: a) Ira imprimir primeiro o objeto cachorro com seus atributos, depois ira mudar o nome para Juba e depis ira trocar para Jubo.
// Resposta: b) a sintaxe dos 3 pontos puxa um outro objeto para o novo objeto.

//Exercicio 3

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/

// Resposta: vai ser impresso o objeto backender e outro undefind porque ele não foi declardo.






//Exercicio de escritas

//Exercicio 1


/*const pessoa = {

    nome : "Kaynã",
    apelido : ["Kay","KayDelas","KayGato"]

}
function recebePessoa (pessoa){
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}.`)
return console.log
}
// letra a
//console.log(recebePessoa())

const pessoaDois= {
...pessoa, apelido : ["mamute","soldado","chato"]


}
//letra b
console.log( recebePessoa(pessoaDois)) */

// exercicio 2


/*const cidadãoUniversal = {

    nome : "Kaynã",
    idade: 26,
    profissão: "servidor publico"

}

function minhaCidadania(cidadãoUniversal){
    const dados = [cidadãoUniversal.nome, cidadãoUniversal.nome.length, cidadãoUniversal.idade, cidadãoUniversal.profissão, cidadãoUniversal.profissão.length]
    return dados

}

console.log(minhaCidadania(cidadãoUniversal))*/


// exercicio 3

//a)

/*let carrinho = [ ]

//b)

const sacolaoUm = {
    fruta : "abacaxi", disponibilidade: true
}
const sacolaoDois = {
    fruta: "maçã", disponibilidade: true
}
const sacolaoTres = {
    fruta: "Uva", disponibilidade: true
}

// c)

function compras(sacolaoUm,sacolaoDois,sacolaoTres){
    carrinho.push(sacolaoUm)
    carrinho.push(sacolaoDois)
    carrinho.push(sacolaoTres)
    
    
}

compras(sacolaoUm,sacolaoDois,sacolaoTres)
//d)

console.log(carrinho)*/













