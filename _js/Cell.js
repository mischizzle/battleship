'use strict';

var Cell = function (coordinates) {
  this.value = "";
  this.hasShip = false;
  this.ship = {};
  this.coordinates = coordinates;
};

Cell.prototype.hasShip = function () {
  // console.log(this.ship.constructor.prototype);
  return false;
  // return  ( === "Ship");
};

