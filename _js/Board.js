'use strict';

var Board = function (table, size, canDisplayShips) {
  this.table = table;
  this.canDisplayShips = canDisplayShips;

  var row,
      cell,
      checkbox,
      fragment = document.createDocumentFragment(),
      checkboxes = [];

  for (var i=0; i<size; i++) {
    row = document.createElement('tr');
    checkboxes[i] = [];

    for (var j=0; j<size; j++) {
      cell = document.createElement('td');
      checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener("click", this.clickHandler, false);
      checkbox.cell = new Cell([i, j]);
      checkboxes[i][j] = checkbox;
      cell.appendChild(checkbox);
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }
  this.table.appendChild(fragment);
};

Board.prototype.clickHandler = function () {
  console.log(this.cell);
}

Board.prototype.placeShip = function (ship) {

  console.log("Placing ship:", ship);
  // var horizontal = this.generateRandomOrientation();
  var randCoordArr = this.generateRandomCoordinates();
  var randCell = this.board[randCoordArr[0]][randCoordArr[1]];
  var placementArr = [];
  var placementCell;

  placementArr = this.checkNeighborsAndReturnPlacementArr(randCoordArr, ship.size);

  if (randCell.hasShip || !placementArr.length) {
    console.log("Recurse...");
    this.placeShip(ship);
  } else {
    console.log("Placing the", ship.name, "on", placementArr);
  }

  //check for all neighbors; taking into account size of ship
  // note: currently not worrying about desired orientation; will default to horizontal
  // for (var i=0; i<this.)
};


//for now, only horizontal
Board.prototype.checkNeighborsAndReturnPlacementArr = function (coordinates, shipSize) {
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

Board.prototype.generateRandomCoordinates = function () {
  return [Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.width)];
};

Board.prototype.generateRandomOrientation = function () {
  return Math.round(Math.random());
};

Board.prototype.engageCoordinate = function (engageCoordinate) {
  this.board[engageCoordinate] = "hit";
};
