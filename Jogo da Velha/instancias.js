let posicoes=["","","","","","","","",""]
let jogadorAtual=0
let simbologia=["X","O"]
let winGame=false
let winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


function movimento(position){

    if(winGame){
        return
    }
    if(posicoes[position] ==""){
    posicoes[position]=simbologia[jogadorAtual]
    
    winGame=winStatus()
     
    if(winGame!=true){
    if(jogadorAtual==0){
        jogadorAtual=1
    }else{
        jogadorAtual=0
    }
    
  }}
  return winGame
}

function winStatus(){

    for(let i=0; i<winConditions.length;i++)//O for vai ver todos os arrays da variavel win conditions para ver se alguma delas atendem o criterios de vitoria
    {
        let seq=winConditions[i]//a cada vez que o 'for' repetir ciclo a variavel 'i' pega um valor do array winOnditions 
        
        let pos0=seq[0]
        let pos1=seq[1]
        let pos2=seq[2]  

        if(posicoes[pos0]==posicoes[pos1]&&
            posicoes[pos0]==posicoes[pos2]&&posicoes[pos0]!=''){

            return true

        }

    }

}




