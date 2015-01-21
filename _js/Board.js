'use strict';

var Board = function(canDisplayShips) {

  this.width = 10;
  this.height = 10;
  this.boardArray = [];
  this.canDisplayShips = canDisplayShips;

  for (var i=0; i<10; i++) {
    this.boardArray[i] = [];
    for (var j=0; j<10; j++) {
      this.boardArray[i][j] = new Cell([i, j]);
    }
  }
};

Board.prototype.placeShip = function(ship) {

  var horizontal = this.generateRandomOrientation();
  var randCoordArr = this.generateRandomCoordinate();
  var cell = this.boardArray[randCoordArr[0]][randCoordArr[1]];

  if (cell.hasShip) {
    this.placeShips();
  }

  console.log(cell);

  //check for all neighbors; taking into account size of ship
  // note: currently not worrying about desired orientation; will default to horizontal
  // for (var i=0; i<this.)

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


