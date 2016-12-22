describe('Features Tests', function () {
  var airport;
  var plane;

  beforeEach(function () {
    airport = new Airport();
    plane = new Plane();
  });

  describe('User story 1,4', function (){

    it('a plane will land at an airport', function () {
      spyOn(airport.weather, "isStormy").and.returnValue(false);
      plane.land(airport);
      expect(airport.planes.length).toEqual(1);
    });
    it('prevents plane from landing off when wheather is stormy', function(){
      spyOn(airport.weather, "isStormy").and.returnValue(true);
      expect(function () {
        airport.land(plane);}).toThrow("Cannot land plane: weather is stormy.");
      });
  });

  describe('User story 2,3 ', function (){
    it('a plane will take off from an airport', function(){
      spyOn(airport.weather, "isStormy").and.returnValue(false);
      plane.land(airport);
      airport.takeOff(plane);
      expect(airport.planes.length).toEqual(0);
    });

    it('a plane will not take off from an airport if weather is stormy', function(){
      spyOn(airport.weather, "isStormy").and.returnValue(true);
      expect(function () {
        airport.takeOff(plane);}).toThrow("Cannot take off plane: weather is stormy.");
      });
    });
  });
