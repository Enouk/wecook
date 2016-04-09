'use strict';

describe('Controller: CartPaymentCtrl', function () {

  // load the controller's module
  beforeEach(module('wecookApp'));

  var CartPaymentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CartPaymentCtrl = $controller('CartPaymentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
