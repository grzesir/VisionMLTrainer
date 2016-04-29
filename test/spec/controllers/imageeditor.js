'use strict';

describe('Controller: ImageeditorCtrl', function () {

  // load the controller's module
  beforeEach(module('perchMltrainerApp'));

  var ImageeditorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImageeditorCtrl = $controller('ImageeditorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ImageeditorCtrl.awesomeThings.length).toBe(3);
  });
});
