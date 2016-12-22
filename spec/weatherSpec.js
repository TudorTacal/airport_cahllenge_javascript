describe('Weather',function(){
  var sunnyWeather;
  var stormyWeather;
  beforeEach(function(){
    sunnyWeather = new Weather();
    stormyWeather = new Weather();
  });

  it('should return true when the weather is stormy', function () {
    spyOn(Math, "random").and.returnValue(0.5);
    expect(stormyWeather.isStormy()).toBeTruthy();
  });

  it('should return false when the weather is sunny', function(){
    spyOn(Math, "random").and.returnValue(0.9);
    expect(sunnyWeather.isStormy()).toBeFalsy();
  });
});
