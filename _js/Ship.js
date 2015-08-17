'use strict';

var Ship = function(name, size, id) {
  this.name = name;
  this.size = size;
  this.id = id;
  this.orientation = 0;
  this.discovered = false;
  this.coordinates = [];
}

Ship.prototype.setCoordinates = function(coordinates) {
  this.coordinates = coordinates;
};

Ship.prototype.setOrientation = function(orientation) {
  this.orientation = orientation;
}
