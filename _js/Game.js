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
    // new Ship("Cruiser", 2),
    // new Ship("Cruiser", 2),
    // new Ship("Destroyer", 1),
    // new Ship("Destroyer", 1)
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


};


// Game.prototype.shootTarget = function(coordinates, element) {
//   console.log(coordinates);
//   console.log(element);
// };

// Game.prototype.automateTurn = function(board) {
//   // shoot random coordinate on board
// };

// Game.prototype.keepScore = function() {};
