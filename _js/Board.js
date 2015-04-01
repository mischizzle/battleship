'use strict';

var Board = function (table, size, canDisplayShips) {
  this.table = table;
  this.canDisplayShips = canDisplayShips;
  this.size = size;

  var row,
      cell,
      checkbox,
      fragment = document.createDocumentFragment(),
      checkboxes = [],
      x,
      y;

  for (y=0; y<size; y++) {
    row = document.createElement('tr');
    checkboxes[y] = [];

    for (x=0; x<size; x++) {
      cell = document.createElement('td');
      checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.cell = new Cell([y, x]);
      checkbox.addEventListener("click", this.clickHandler, false);
      checkboxes[y][x] = checkbox;
      cell.appendChild(checkbox);
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }
  this.table.appendChild(fragment);
};

Board.prototype.clickHandler = function () {
  console.log(this);

  if (this.cell.hasShip) {
    console.log("Hit!");
    this.className = "hit";
  } else {
    console.log("Miss...");
    console.log(this.cell.coordinates);
  }
}

Board.prototype.placeShip = function (ship) {

  console.log("Placing ship:", ship);
  // var horizontal = this.generateRandomOrientation();
  var randCoordArr = this.generateRandomCoordinates(),
      randCell = this.table.children[randCoordArr[0]].children[randCoordArr[1]].children[0].cell,
      placementArr = [],
      placementCell,

      i;

  console.log("Random cell");
  console.log(randCell);

  placementArr = this.checkNeighborsAndReturnPlacementArr(randCoordArr, ship.size);

  if (randCell.hasShip || !placementArr.length) {
    console.log("Recurse...");
    this.placeShip(ship);
  } else {
    console.log("Placing the", ship.name, "on", placementArr);
    for (i=0; i<placementArr.length; i++) {
      placementCell = this.table.children[placementArr[i][0]].children[placementArr[i][1]].children[0].cell;
      placementCell.hasShip = true;
      placementCell.setShip(ship.name);
    }
  }

  // check for all neighbors; taking into account size of ship
  // note: currently not worrying about desired orientation; will default to horizontal
  // for (var i=0; i<this.)
};


//for now, only horizontal
Board.prototype.checkNeighborsAndReturnPlacementArr = function (coordinates, shipSize) {
  var shipCoordinates = [],
      xCoord,
      i;

  if (!(coordinates[0]+shipSize > this.size)) {
    for (i=0; i<shipSize; i++) {
      shipCoordinates.push([i + coordinates[0], coordinates[1]]);
    }

  } else {
    console.log("Out of bounds, trying again...");
    // this.checkNeighborsAndReturnPlacementArr(coordinates, shipSize);
  }
  return shipCoordinates;
};

Board.prototype.generateRandomCoordinates = function () {
  return [Math.floor(Math.random() * this.size), Math.floor(Math.random() * this.size)];
};

Board.prototype.generateRandomOrientation = function () {
  return Math.round(Math.random());
};

Board.prototype.engageCoordinate = function (engageCoordinate) {
  this.board[engageCoordinate] = "hit";
};
