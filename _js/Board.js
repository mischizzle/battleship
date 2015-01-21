'use strict';

var Board = function(canDisplayShips) {

  this.width = 10;
  this.height = 10;
  this.boardArray = [];
  this.canDisplayShips = canDisplayShips;

  this.shipsArr = [
    new Ship("Aircraft Carrier", 5, []),
    new Ship("Battleship", 4, []),
    new Ship("Submarine", 3, []),
    new Ship("Cruiser", 2, []),
    new Ship("Cruiser", 2, []),
    new Ship("Destroyer", 1, []),
    new Ship("Destroyer", 1, [])
  ];

  for (var i=0; i<10; i++) {
    this.boardArray[i] = [];
    for (var j=0; j<10; j++) {
      this.boardArray[i][j] = new Cell([i, j]);
    }
  }
};

Board.prototype.placeShips = function() {

  var horizontal = this.generateRandomOrientation();
  var randCoordArr = this.generateRandomCoordinate();
  var cell = this.boardArray[randCoordArr[0]][randCoordArr[1]];

  console.log(cell);

  //check for all neighbors; taking into account size of ship
  // for (var i=0; i<this.)

  console.log(this.shipsArr);
  if (horizontal) {

  }



};

Board.prototype.generateRandomCoordinate = function() {
  return [Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.width)];
};

Board.prototype.generateRandomOrientation = function() {
  return Math.round(Math.random());
}

Board.prototype.engageCoordinate = function(engageCoordinate) {
  this.boardArray[engageCoordinate] = "hit";
};


