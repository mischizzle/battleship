'use strict';

var Ship = function(name, size) {
  this.name = name;
  this.size = size;
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
