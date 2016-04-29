'use strict';

describe('Service: PerchImageEval', function () {

  // load the service's module
  beforeEach(module('perchMltrainerApp'));

  // instantiate service
  var PerchImageEval;
  beforeEach(inject(function (_PerchImageEval_) {
    PerchImageEval = _PerchImageEval_;
  }));

  it('should do something', function () {
    expect(!!PerchImageEval).toBe(true);
  });

});
