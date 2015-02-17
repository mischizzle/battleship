'use strict';

var LifeView = function (table, size) {
  this.grid = table;
  this.size = size;

  this.createGrid();
}

LifeView.prototype.createGrid = function() {

  var row,
      cell,
      checkbox;
  var fragment = document.createDocumentFragment();

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

var enemy = new LifeView(document.getElementById('enemyBoard'), 12);
var player = new LifeView(document.getElementById('playerBoard'), 12);

