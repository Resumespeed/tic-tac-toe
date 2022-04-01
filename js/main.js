let player1, player2
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

squares.forEach(square => {
  square.addEventListener('click', function handleClick(e) {
    console.log('square clicked', e);
    if(playerTurn){
        square.innerText="X";
        playerTurn = false;
    }
    else{
        square.innerText = "0";
        playerTurn = true;
    }
  })
});
