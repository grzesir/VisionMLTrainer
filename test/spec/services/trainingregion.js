'use strict';

describe('Service: TrainingRegion', function () {

  // load the service's module
  beforeEach(module('perchMltrainerApp'));

  // instantiate service
  var TrainingRegion;
  beforeEach(inject(function (_TrainingRegion_) {
    TrainingRegion = _TrainingRegion_;
  }));

  it('should do something', function () {
    expect(!!TrainingRegion).toBe(true);
  });

});
