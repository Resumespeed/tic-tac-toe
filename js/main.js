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
