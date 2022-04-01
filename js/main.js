let player1, player2
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
squares.onClick = function(e){
    e.target.style.backgroundColor='red';
}

// document.querySelector('table').addEventListener('click', function (e){
//     const topL = document.getElementById('topLeft');
//     const topC = document.getElementById('topCenter');
//     const topR = document.getElementById('topRight');
//     //const turnRed = document.querySelectorAll('td div');
//     //squares.style.backgroundColor = 'red';
    
//     topL.style.backgroundColor = 'red';
//     topC.style.backgroundColor = 'red';
//     topR.style.backgroundColor = 'red';
// });


//logic to win
//if(winningConditions)