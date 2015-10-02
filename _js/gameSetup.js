
/** Initialize all parts of the game here **/

var battleship = new Game();
var playerBoard;
var dropTargets;
var ship;
var nextButtonEl = document.getElementById('nextStep');
var currStep = 1;
var dragTarget;
var dropTarget;

nextButtonEl.addEventListener('click', nextStep);

battleship.initBoards();

/** things to drag **/
console.log(battleship.ships);


//set up steps: first ship to place is aircraft carrier
dragTarget = document.getElementById(battleship.ships[0].id);
dropTarget = document.getElementById('playerBoard');

/** things to drop into **/
battleship.dropTargets = convertTableCellsIntoFlatArray(dropTarget);

//set up drag and drop for ships
dragAndDrop(dragTarget, battleship.dropTargets);


function nextStep() {
  if(currStep <= battleship.ships.length) {
    console.log("check if step 1 ship successfully placed. otherwise message it's not");

    //hide step 1
    document.getElementById('step'+currStep).classList.add("hidden");

    currStep++;
    //show step 2
    document.getElementById('step'+currStep).classList.remove("hidden");

    dragTarget = document.getElementById(battleship.ships[currStep].id);
    dragAndDrop(dragTarget);
  } else {
    console.log("Start game!");
  }

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


