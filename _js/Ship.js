'use strict';

var Ship = function(name, size, orientation) {
  this.name = name;
  this.size = size;
  this.orientation = orientation;
  this.discovered = false;
  this.coordinates = [];
}

Ship.prototype.setCoordinates = function(coordinates) {
  this.coordinates = coordinates;
};

