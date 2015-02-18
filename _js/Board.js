'use strict';

var Board = function(canDisplayShips) {
  var i,
      j;

  this.width = 10;
  this.height = 10;
  this.boardArray = [];
  this.canDisplayShips = canDisplayShips;

  for (i=0; i<10; i++) {
    this.boardArray[i] = [];
    for (j=0; j<10; j++) {
      this.boardArray[i][j] = new Cell([i, j]);
    }
  }
};

Board.prototype.placeShip = function(ship) {

  console.log("Placing ship:", ship);
  var horizontal = this.generateRandomOrientation();
  var randCoordArr = this.generateRandomCoordinates();
  var randCell = this.boardArray[randCoordArr[0]][randCoordArr[1]];
  var placementArr = [];
  var placementCell;

  placementArr = this.checkNeighborsAndReturnPlacementArr(randCoordArr, ship.size);
  // console.log(placementArr.length);

  if (randCell.hasShip || placementArr.length === 0) {
    console.log("Recuse...");
    this.placeShip(ship);
  } else {
    console.log("Placing the", ship.name, "on", placementArr);
  }

  //check for all neighbors; taking into account size of ship
  // note: currently not worrying about desired orientation; will default to horizontal
  // for (var i=0; i<this.)
};

//for now, only horizontal
Board.prototype.checkNeighborsAndReturnPlacementArr = function(coordinates, shipSize) {

  var shipCoordinates = [];
  var xCoord;

  if (!(coordinates[0] + shipSize > this.width)) {
    for (var i=0; i<shipSize; i++) {
      shipCoordinates.push([i + coordinates[0], coordinates[1]]);
    }

  } else {
    console.log("Out of bounds, trying again...");
    // this.checkNeighborsAndReturnPlacementArr(coordinates, shipSize);
  }
  return shipCoordinates;
};

Board.prototype.generateRandomCoordinates = function() {
  return [Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.width)];
};

Board.prototype.generateRandomOrientation = function() {
  return Math.round(Math.random());
};

Board.prototype.engageCoordinate = function(engageCoordinate) {
  this.boardArray[engageCoordinate] = "hit";
};


