var Ship = function(name, size, orientation) {
  this.shipName = shipName;
  this.size = size;
  this.orientation = orientation;
  this.discovered = false;
  this.coordinates = [];
}

// x1 5 Aircraft carrier
// x1 4 Battleship
// x1 3 Submarine
// x2 2 Destroyer (or Cruiser)
// x2 1 Patrol boat (or destroyer)
