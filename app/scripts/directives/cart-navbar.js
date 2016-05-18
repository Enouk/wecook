'use strict';

angular.module('wecookApp')
  .controller('cartNavbarCtrl', function($scope, Client) {

    $scope.cartOrders = Client.getCartOrders();
    $scope.orders = Client.getOrders();

    $scope.calculateSum = function() {
      var totalSum = 0;
      for (var i = 0; i < $scope.cartOrders.length; i++) {
        totalSum += $scope.cartOrders[i].adultPrice;
      }
      
      return totalSum;
    };
  });

angular.module('wecookApp')
  .directive('cartNavbar', function() {
    return {
      controller: 'cartNavbarCtrl',
      templateUrl: 'views/cart-navbar.html',
      restrict: 'E', // (2)
      replace: true, // (3)
      transclude: true // (4)
    };
  });
