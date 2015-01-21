'use strict';

// x1 5 Aircraft carrier
// x1 4 Battleship
// x1 3 Submarine
// x2 2 Destroyer (or Cruiser)
// x2 1 Patrol boat (or destroyer)

var Game = function Game() {
// initializes 2 boards/grids
//  - create ships
//  - place ships on both boards
// initializes 1 player (?)
// handles user input --> game logic
// knows when game is over
// sets who has the turn
// manages all game messages / feedback to player

};

Game.prototype.shootTarget = function(coordinates, element) {
  console.log(coordinates);
  console.log(element);

};

Game.prototype.initBoard = function(player) {

  var playerBoard = new Board();
  // console.log(playerBoard);
  playerBoard.placeShips();

  // var enemyBoard = new Board();
  // enemyBoard.placeShips();

};

Game.prototype.automateTurn = function(board) {
  // shoot random coordinate on board
}
