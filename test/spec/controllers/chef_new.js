'use strict';

describe('Controller: ChefNewCtrl', function () {

  // load the controller's module
  beforeEach(module('wecookApp'));

  var ChefNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChefNewCtrl = $controller('ChefNewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
