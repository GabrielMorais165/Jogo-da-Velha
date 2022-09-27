document.addEventListener('DOMContentLoaded',()=>{
    let quadrados=document.querySelectorAll(".tab");
    quadrados.forEach((quadrado)=>{
    quadrado.addEventListener('click', handclick)
})/*Primeiro vai adicionar um evento quando o a Pagina carregar por completo

    Vai gerar uma função que ira selecionar todos os elementos que possuam a class='tab' e colocar em uma variavel 
    
    Em seguida ira "varrer" todas as classes presentes na variavel e adiciorar um evento de 'Click' a cada um deles 

    E gera um nome para que possamos gerenciar uma fnção referente ao evento de click*/


})

function handclick(event){
    var tabu=event.target
    var posiçao=tabu.id
    var text=document.getElementsByName("main")
    if(movimento(posiçao)){
        setTimeout(()=>{
            alert(`Fim de jogo.`)
            text.innerHTML=`<h1>O vencedor foi o ${lastplayer()}</h1>`
        },100)
        updateScreen()
}

updateScreen()

}
/*Gera uma variavel que recebera o valor do alvo que foi clicado(var tabu)
  
  Em seguida coloca o valor do ID dos alvos da variavel anterior em uma outra variavel(var posiçao) 

  passa o valor da variavel que contem o Id para uma function que esta em outro arquivo 
  
  Executa uma Function

*/






function updateScreen(){
    let quadrados=document.querySelectorAll(".tab");
    
    quadrados.forEach((quadrado)=>{

    let position=quadrado.id 

    let simbulos =posicoes[position]

   if(simbulos != "" ){ 
    quadrado.innerHTML=`<div class= '${simbulos}'></div>`
   }else{
    
   }
})
}
/*  
    Vai gerar uma variavel que ira selecionar todos os elementos que possuam a class='tab'
    
    Em seguida ira chamar um metodo(forEach) que ira executar uma function a todos os itens presentes na variavel qeu antecede o metodo

    A function ira gerar duas variaveis onde uma vai pegar o Id de todos os itens da variavel(var position)

    A outra variavel ira passar o valor da variavel anterior(position) para  um array que esta presente em outro arquivo assim definindo qual foi o valor do array que foi selecionado
    
    e colocar o valor resultante disso em uma nova variavel(simbulos)

    em seguida ira gerar um operador condicional ( "if()" ) que perguntara se o valor da variavel 'simbulos' é Diferente de vazio

    Caso a Resposta  da condicional seja verdaderia ela passa uma nova propriedade HTML para dentro do item que foi clicado 
    
    Onde essa nova propriedade sera uma div que tem uma classe que é possui um estilo ja definido (Que  são os estilos de X e O)
    
    */

    function newGame(){
        document.location.reload()
    }