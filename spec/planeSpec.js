describe('Plane', function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['land','takeOff']);
  });
  describe('#land', function () {

    beforeEach(function() {
      plane.land(airport);
    });

    it('should not be flying', function () {
      expect(plane.flying).toBeFalsy();
    });

    it('should land the plane', function(){
      expect(airport.land).toHaveBeenCalledWith(plane);
    });

  });
  describe('#takeOff', function(){
    beforeEach(function(){
      plane.takeOff(airport);
    });

    it('should be flying',function(){
      expect(plane.flying).toBeTruthy();
    });
    it('should take off the plane', function(){
      expect(airport.takeOff).toHaveBeenCalledWith(plane);
    });
  });

});
