
//EXERCICIO DE INTEPRETAÇÃO

//EXERCICIO 1



/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })*/

//Resposta: Ira ser impresso o item, index e o array completo na função


//EXERCICIO 2



/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)*/


  // Resposta: Retorna apenas os nomes das pessoas.


  //EXERCICIO 3



  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)*/

  //Resposta: Só vem os apelidos de quem não for Chijo.



  // EXERCICIO DE ESCRITA DE CODIGO



//EXERCICIO 1

/*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]*/

 //A) CRIE UM ARRAY SOMENTE COM O MOE DOS DOGUINHOS

 /*const apenasNomes = pets.map((item) =>{
 return item.nome
 })
 console.log(apenasNomes)*/

 //B)Crie um novo array apenas com os cachorros salsicha

 /*const apenasSalsicha=pets.filter((item) => {
     return item.raca === "Salsicha"
 })
 console.log(apenasSalsicha)*/


//C) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
//   A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a nome.


/*const apenasPoodle=pets.filter((item) => {
    return item.raca === "Poodle"})

function retornaMensagem(item, index, array){
    return "Você Ganhou 10% de Desconto para tosar o/a " +  item.nome 
}

const mensagemPoodle = apenasPoodle.map(retornaMensagem)
console.log(mensagemPoodle) */

//EXERCICO 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
// a)  Crie um novo array que contenha apenas o nome de cada item

 /*const apenasProdutos = produtos.map((item) =>{
    return item.nome})

    console.log(apenasProdutos)*/


    //b) Crie um novo array que contenha um objeto com o nome e 
    //o preço de cada item, aplicando 5% de desconto em todos eles

   /*const descontopreco = produtos.filter((item)=> {
   return item.preco * 0,95})

   function nomeDosProdutos (nome,preco) {
const nome = produtos.nome  
const preco = descontopreco
console.log(nome,preco)

   }
        
console.log(nomeDosProdutos)*/




        //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

/*const apenasBebidas=produtos.filter((item) => {
   return item.categoria === "Bebidas"})

     console.log(apenasBebidas)*/




        
     //d)  Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
     /*const apenasBebidas=produtos.filter((item) => {
     return item.nome.includes("Ypê") })

     console.log(apenasBebidas)*/







     //e) e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
     /*const arrayEstilizado=apenasBebidas.filter((item) => {
        return item.nome, item.preco})
    
    function retornaMensagem(item, index, array){
        return `compre ${item.nome} por R$ ${item.preco}`
    }
    
    const nomeValor= arrayEstilizado.map(retornaMensagem)
    console.log(nomeValor) */
    














