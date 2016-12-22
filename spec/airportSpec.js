describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    plane = jasmine.createSpy('plane');
    airport = new Airport();
  });

  describe('#land', function(){

    it('should land a plane', function(){
      spyOn(airport.weather, "isStormy").and.returnValue(false);
      airport.land(plane);
      expect(airport.planes).toEqual([plane]);
    });

    it('should not land a plane when the weather is stormy',function () {
        spyOn(airport.weather, "isStormy").and.returnValue(true);
        expect(function () {
        airport.land(plane);}).toThrow("Cannot land plane: weather is stormy.");
      });
    });
    describe('#takeOff', function (){
      it('should take off a plane', function (){
        spyOn(airport.weather, "isStormy").and.returnValue(false);
        airport.takeOff(plane);
        expect(airport.planes.length).toEqual(0);
      });
      it('should not take off a plane if weather is stormy',function (){
        spyOn(airport.weather, "isStormy").and.returnValue(true);
        expect(function () {
          airport.takeOff(plane);}).toThrow("Cannot take off plane: weather is stormy.");
        });
      });
    });
