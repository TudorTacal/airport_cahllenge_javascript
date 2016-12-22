var Plane = function () {
  this.flying = true;
};

Plane.prototype.land = function(airport){
  this.flying = false;
  airport.land(this);
};

Plane.prototype.takeOff = function(airport){
  this.flying = true;
  airport.takeOff(this);
};
