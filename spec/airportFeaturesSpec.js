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

    describe('User story 4', function () {
      it('plane cannot land if aiport capacity is full',function (){
        spyOn(airport.weather, "isStormy").and.returnValue(false);
        for(var i=0;i<20;i++) {
          airport.land(plane);
        }
        expect(function() {
          airport.land(plane);}).toThrow("Cannot land plane: airport at full capacity.");
      });
    });

    describe('User story 5', function() {
      it('airport capacity can be overridden as appropriate', function(){
        var airport_2 = new Airport(25);
        spyOn(airport_2.weather, "isStormy").and.returnValue(false);
        for(var i=0;i<25;i++) {
          airport_2.land(plane);
        }
        expect(airport_2.planes.length).toEqual(25);
      });
    });
  });
