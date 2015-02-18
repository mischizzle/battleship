'use strict';

var battleship = function (table, size) {
  this.grid = table;
  this.size = size;
  this._createGrid();
}

battleship.prototype._createGrid = function() {

  var row,
      cell,
      checkbox,
      fragment = document.createDocumentFragment();

  this.grid.innerHTML = '';
  this.checkboxes = [];

  for (var i=0; i<this.size; i++) {
    row = document.createElement('tr');
    this.checkboxes[i] = [];

    for (var j=0; j<this.size; j++) {
      cell = document.createElement('td');
      checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener("click", clickHandler, false);
      checkbox.cell = new Cell([i, j]);
      this.checkboxes[i][j] = checkbox;

      cell.appendChild(checkbox);
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }
  this.grid.appendChild(fragment);
}

function clickHandler() {
  console.log(this.cell);
}

var enemy = new battleship(document.getElementById('enemyBoard'), 12);
var player = new battleship(document.getElementById('playerBoard'), 12);

// var playerBoard = new Board();
// var enemyBoard = new Board();
var battleship = new Game();
battleship.initBoard();

