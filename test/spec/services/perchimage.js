'use strict';

describe('Service: PerchImage', function () {

  // load the service's module
  beforeEach(module('perchMltrainerApp'));

  // instantiate service
  var PerchImage;
  beforeEach(inject(function (_PerchImage_) {
    PerchImage = _PerchImage_;
  }));

  it('should do something', function () {
    expect(!!PerchImage).toBe(true);
  });

});
