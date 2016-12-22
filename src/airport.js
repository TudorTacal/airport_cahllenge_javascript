/*jshint esversion: 6 */
var Airport = function (defaultCapacity=20, weather = new Weather()) {
  this.planes = [];
  this.weather = weather;
  this.MAXIMUM_CAPACITY = 20;
  this.capacity = defaultCapacity;
};

Airport.prototype.land = function(plane){
  if (this.planes.length === this.MAXIMUM_CAPACITY) throw "Cannot land plane: airport at full capacity.";
  if (this.weather.isStormy() === true) throw "Cannot land plane: weather is stormy.";
  this.planes.push(plane);

};

Airport.prototype.takeOff = function(plane) {
  if(this.weather.isStormy() === true) throw("Cannot take off plane: weather is stormy.");
  for (var i=0 ;i<=this.planes.length; i++) {
    if(this.planes[i] === plane) {
      this.planes.splice(i,1);
    }
  }
};
