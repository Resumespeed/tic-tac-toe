
  let remainingMoves = 9;
  let playerTurn = true;
  let player1=[];
  let player2=[];
  let boardArray=[null,null,null,
  null,null,null,
  null,null,null];

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
        // console.log(getWinner());
        remainingMoves--;
        console.log("remaining moves "+remainingMoves);
        tieGame();
      }
    else{
        square.innerText = "0";
        player2.push(square.id);
        console.log(player2);
        boardArray.push(square.id);
        console.log(boardArray);
        playerTurn = true;
        remainingMoves--;
        console.log(`remaining moves ${remainingMoves}`);
        tieGame();
      }
    })
});
function tieGame(){
  if(remainingMoves===0){
    let message = document.getElementById('drawGame');
    message.innerHTML = `<h1>${"draw game"}</h1>`;
    console.log("draw game");
    alert("Tie Game");
  }
}


let checkSubSet = (arr, arr2) => arr2.every(element => arr.includes(element));

function getWinner(){
  for(let i = 0; i < winningConditions.length; i++){
    if (checkSubSet(player1,winningConditions[i])){
      console.log("player wins" );
    }
  }
}
