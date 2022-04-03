let player1=[];
let player2=[];

let boardArray=[null,null,null,
    null,null,null,
    null,null,null];
    let playerTurn = true;
const winningConditions = [
    ['topLeft','topCenter','topRight'],
    ['midLeft','midCenter','midRight'],
    ['bottomLeft','bottomCenter','bottomRight'],
    ['topLeft','midLeft','bottomLeft'],
    ['topCenter','midCenter','bottomCenter'],
    ['topRight','midRight','bottomRight'],
    ['topLeft','midCenter','bottomRight'],
    ['topRight','midCenter','bottomLeft']
];
const squares = document.querySelectorAll('td');
// add once:true on 21 @ 27mins
squares.forEach(square => {
  square.addEventListener('click', function handleClick(e) {
    console.log('square clicked', e);
    if(playerTurn){
        square.innerText="X";
        player1.push(square.id);
        console.log(player1);
        boardArray.splice(square.id);
        console.log(boardArray);
        playerTurn = false;
        console.log(getWinner());
      }
    else{
        square.innerText = "0";
        player2.push(square.id);
        console.log(player2);
        boardArray.push(square.id);
        console.log(boardArray);
        playerTurn = true;
      }
    })
});

function getWinner(){
  for(let i = 0; i < winningConditions.length; i++){
    if((player1.winningConditions[i][0] + player1.winningConditions[i][1]+player1.winningConditions[i][2])===3){
      return player1.winningConditions[i][0];
    }
  }
}
