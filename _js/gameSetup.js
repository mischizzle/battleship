
/** Initialize all parts of the game here **/

var battleship = new Game();
var playerBoard;
var dropTargets;
var ship;

battleship.initBoards();


/** things to drop into **/
playerBoard = document.getElementById('playerBoard');

battleship.dropTargets = convertTableCellsIntoFlatArray(playerBoard);


/** things to drag **/
console.log(battleship.ships);
for(var i=0; i<battleship.ships.length; i++) {
  ship = document.getElementById(battleship.ships[i].id);
  ship.addEventListener('mousedown', clickListener);
  ship.addEventListener('mousemove', mouseMoveListener);
  ship.addEventListener('mouseup', mouseUpListener);
}


/** utility functionz **/
function convertTableCellsIntoFlatArray(table) {
  var arr = [];
  var row;

  for(var i=0; i<table.children.length; i++) {
    row = table.children[i];
    for(var j=0; j<row.children.length; j++) {
      arr.push(row.children[j]);
    }
  }
  return arr;
}


