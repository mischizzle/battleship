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
    new Ship("Aircraft Carrier", 5),
    new Ship("Battleship", 4),
    new Ship("Submarine", 3),
    new Ship("Cruiser", 2),
    new Ship("Cruiser", 2),
    new Ship("Destroyer", 1),
    new Ship("Destroyer", 1)
  ];
};

Game.prototype.initBoards = function(player) {

  // this.playerBoard = new Board(true);
  // this.playerBoard.populateBoard(10, 10);
  // this.playerBoard.placeShip(this.ships[0]);

  var enemyBoard = new Board(document.getElementById('enemyBoard'), 12);
  var playerBoard = new Board(document.getElementById('playerBoard'), 12);
};


// Game.prototype.shootTarget = function(coordinates, element) {
//   console.log(coordinates);
//   console.log(element);
// };

// Game.prototype.automateTurn = function(board) {
//   // shoot random coordinate on board
// };

// Game.prototype.keepScore = function() {};
