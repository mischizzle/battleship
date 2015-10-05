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

  this.ships = [
    new Ship("Aircraft Carrier", 5, "aircraftCarrier"),
    new Ship("Battleship", 4, "battleship"),
    new Ship("Submarine", 3, "submarine"),
    new Ship("Cruiser", 3, "cruiser1"),
    new Ship("Cruiser", 3, "cruiser2"),
    new Ship("Patrol boat", 2, "patrol1"),
    new Ship("Patrol boat", 2, "patrol2")
  ];

  //ships are placed automatically..
  this.enemyBoard = new Board(document.getElementById('enemyBoard'), 12, true);

  //playerBoard will place their own ships..
  this.playerBoard = new Board(document.getElementById('playerBoard'), 12, false);

};

Game.prototype.getPlayerName = function() {
  //ask player name
};

Game.prototype.placeShipsAutomatically = function(board) {

  //place enemy board without coordinates
  for (var i=0; i<this.ships.length; i++) {
    board.placeShip(this.ships[i]);
  }
};

// Game.prototype.shootTarget = function(coordinates, element) {
//   console.log(coordinates);
//   console.log(element);
// };

// Game.prototype.automateTurn = function(board) {
//   // shoot random coordinate on board
// };

// Game.prototype.keepScore = function() {};



