'use strict';

describe('Service: VisionModel', function () {

  // load the service's module
  beforeEach(module('perchMltrainerApp'));

  // instantiate service
  var VisionModel;
  beforeEach(inject(function (_VisionModel_) {
    VisionModel = _VisionModel_;
  }));

  it('should do something', function () {
    expect(!!VisionModel).toBe(true);
  });

});
