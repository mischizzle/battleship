
/** Initialize all parts of the game here **/

var battleship = new Game(),
    playBtnEl = document.getElementById('play'),
    messagesEl = document.getElementById('msg'),
    dropTarget;

console.log(battleship);

playBtnEl.addEventListener('click', battleship.placeShipsAutomatically(battleship.enemyBoard));

//set up steps: first ship to place is aircraft carrier
dropTarget = document.getElementById('playerBoard');

/** things to drop into **/
battleship.dropTargets = convertTableCellsIntoFlatArray(dropTarget);

//set up drag and drop for ships
for(var i=0; i<battleship.ships.length; i++) {
  //create new ships here..
  dragAndDrop(document.getElementById(battleship.ships[i].id), battleship.dropTargets);
}



/** utility functions **/
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


