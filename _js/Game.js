'use strict';

// initializes 2 boards/grids
//  - create ships
//  - place ships on enemy board
// initializes 1 player (?)
// handles user input --> game logic
// knows when game is over
// sets who has the turn
// manages all game messages / feedback to player

var Game = function Game() {

  //playerBoard will place their own ships..
  this.playerBoard = {};

  //ships are placed automatically..
  this.enemyBoard = {};

  this.ships = [
    new Ship("Aircraft Carrier", 5)
    // new Ship("Battleship", 4),
    // new Ship("Submarine", 3),
    // new Ship("Destroyer", 3),
    // new Ship("Destroyer", 3),
    // new Ship("Patrol boat", 2),
    // new Ship("Patrol boat", 2)
  ];
};

Game.prototype.getPlayerName = function() {
  //ask player name
}

Game.prototype.initBoards = function(player) {

  var enemyBoard = new Board(document.getElementById('enemyBoard'), 12, false);
  var playerBoard = new Board(document.getElementById('playerBoard'), 12, true);

  //place enemy board without coordinates
  // for (var i=0; i<this.ships.length; i++) {
  //   enemyBoard.placeShip(this.ships[i]);
  // }

  //temp: place player ships with set coordinates 
  playerBoard.placeShip(this.ships[0], [[0,0], [0,1], [0,2], [0,3], [0,4]] );

  this.makeShipClickable('aircraftCarrier');
  this.makeShipClickable('battleship');


};

Game.prototype.stepThroughShipPlacement = function() {
  var currStep = 1;

  // for (var i=0; i<this.ships.length; i++) {
    
  // }
}

Game.prototype.makeShipClickable = function(shipId) {

  var shipEl = document.getElementById(shipId);

  shipEl.addEventListener('mousedown', drag);
}


function drag(e) {

  console.log(this);
  this.style.top = event.offsetTop;
  this.style.left = event.offsetLeft;
}

document.onmousemove = mouseMove;
document.onmouseup   = mouseUp;

var dragObject  = null;
var mouseOffset = null;

function getMouseOffset(target, ev){
  ev = ev || window.event;
  var docPos    = getPosition(target);
  var mousePos  = mouseCoords(ev);
  return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
}

function getPosition(e){
  var left = 0;
  var top  = 0;
  while (e.offsetParent){
    left += e.offsetLeft;
    top  += e.offsetTop;
    e     = e.offsetParent;
  }
  left += e.offsetLeft;
  top  += e.offsetTop;
  return {x:left, y:top};
}

function mouseMove(ev){
  ev           = ev || window.event;
  var mousePos = mouseCoords(ev);
  if(dragObject){
    dragObject.style.position = 'absolute';
    dragObject.style.top      = mousePos.y - mouseOffset.y;
    dragObject.style.left     = mousePos.x - mouseOffset.x;
    return false;
  }
}

function mouseUp(){
  dragObject = null;
}

function makeDraggable(item){
  if(!item) return;
  item.onmousedown = function(ev){
    dragObject  = this;
    mouseOffset = getMouseOffset(this, ev);
    return false;
  }
}






// Game.prototype.shootTarget = function(coordinates, element) {
//   console.log(coordinates);
//   console.log(element);
// };

// Game.prototype.automateTurn = function(board) {
//   // shoot random coordinate on board
// };

// Game.prototype.keepScore = function() {};
