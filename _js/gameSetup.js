
/** Initialize all parts of the game here **/

var battleship = new Game();
var containerArr = [];
var playerBoard;
var dropTargets;
battleship.initBoards();


/** things to drop into **/
playerBoard = document.getElementById('playerBoard');

dropTargets = convertTableCellsIntoFlatArray(playerBoard);
console.log(dropTargets);

/** things to move **/
var ship1 = document.getElementById('aircraftCarrier');

ship1.addEventListener('mousedown', clickListener);
ship1.addEventListener('mousemove', mouseMoveListener, dropTargets);
ship1.addEventListener('mouseup', mouseUpListener, dropTargets);



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


