'use strict';

describe('Controller: InterestedCtrl', function () {

  // load the controller's module
  beforeEach(module('wecookApp'));

  var InterestedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InterestedCtrl = $controller('InterestedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
