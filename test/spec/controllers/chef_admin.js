'use strict';

describe('Controller: ChefAdminCtrl', function () {

  // load the controller's module
  beforeEach(module('wecookApp'));

  var ChefAdminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChefAdminCtrl = $controller('ChefAdminCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
