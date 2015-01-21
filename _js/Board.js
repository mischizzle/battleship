'use strict';

var Board = function() {
  this.width = 10;
  this.height = 10;
  this.boardArray = [];

  for (var i=0; i<10; i++) {
    this.boardArray[i] = [];
    for (var j=0; j<10; j++) {
      this.boardArray[i][j] = new Cell([i, j]);
    }
  }
};

Board.prototype.placeShips = function() {

  var aircraft_carrier = new Ship("Aircraft Carrier", 5, []);
  var battleship = new Ship("Battleship", 4, []);
  var submarine = new Ship("Submarine", 3, []);
  var cruiser_1 = new Ship("Cruiser", 2, []);
  var cruiser_2 = new Ship("Cruiser", 2, []);
  var destroyer_1 = new Ship("Destroyer", 1, []);
  var destroyer_2 = new Ship("Destroyer", 1, []);

  var randCoordArr = this.generateRandomCoordinate();

  var cell = this.boardArray[randCoordArr[0]][randCoordArr[1]];

  console.log(cell);

};

Board.prototype.generateRandomCoordinate = function() {
  return [Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.width)];
};

Board.prototype.engageCoordinate = function(engageCoordinate) {
  this.boardArray[engageCoordinate] = "hit";
};


