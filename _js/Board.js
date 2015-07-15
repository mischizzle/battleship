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

  //create the battleship grid for a player 
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
  if (this.cell.hasShip) {
    console.log("Hit!");
    this.className = "hit";
  } else {
    console.log("Miss...");
    console.log(this.cell.coordinates);
  }
}

Board.prototype.placeShip = function (ship, shipCoordinates) {
  var randCoordArr,
      randCell,
      placementArr = [],
      placementEl,
      placementCell,
      i,
      that = this;

  console.log("Placing ship:", ship);

  if(shipCoordinates) {

    insertIntoGrid(shipCoordinates);

  } else {

    randCoordArr = _generateRandomCoordinates(this.size),
    randCell = this.table.children[randCoordArr[0]].children[randCoordArr[1]].children[0].cell,
    placementArr = _checkNeighborsAndReturnPlacementArr(randCoordArr, ship.size, this.size);

    if (randCell.hasShip || !placementArr.length) {

      console.log("Recurse...");
      this.placeShip(ship);
    } else {

      insertIntoGrid(placementArr);
      
    }
  }

  //local functions
  function insertIntoGrid(arr) {
    for (i=0; i<arr.length; i++) {
      placementEl = that.table.children[arr[i][0]].children[arr[i][1]].children[0];
      placementCell = placementEl.cell
      placementCell.hasShip = true;
      placementCell.setShip(ship.name);
      
      //for debug: seeing the enemy ships.
      placementEl.style.backgroundColor = '#cdcdcd';
    }
  }
};

//for now, only horizontal
function _checkNeighborsAndReturnPlacementArr (coordinates, shipSize, size) {
  var shipCoordinates = [],
      xCoord,
      i;

  if (!(coordinates[0]+shipSize > size)) {
    for (i=0; i<shipSize; i++) {
      shipCoordinates.push([i + coordinates[0], coordinates[1]]);
    }
  } else {
    console.log("Out of bounds, trying again...");
    // this.checkNeighborsAndReturnPlacementArr(coordinates, shipSize);
  }
  return shipCoordinates;
};

function _generateRandomCoordinates (size) {
  return [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
};

function _generateRandomOrientation () {
  return Math.round(Math.random());
};
