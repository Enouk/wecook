'use strict';

angular.module('wecookApp')
  .controller('CartCtrl', function($scope, $location, Client) {

    $scope.cartOrders = Client.getCartOrders();

    $scope.calculateSum = function() {

      var totalSum = 0;

      for (var i = 0; i < $scope.cartOrders.length; i++) {
        totalSum += $scope.cartOrders[i].adultPrice;
      }

      return totalSum;
    };

    $scope.placeOrders = function() {

      $location.path('/cart_payment');
    };

    $scope.removeOrder = function(offer) {
      Client.removeCartOrder(offer);
    };

  });
