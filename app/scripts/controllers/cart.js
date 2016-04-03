'use strict';

angular.module('wecookApp')
  .controller('CartCtrl', function($scope, $location, Client, OrderService) {

    $scope.cartOrders = Client.getCartOrders();

    $scope.calculateSum = function() {

      var totalSum = 0;

      for (var i = 0; i < $scope.cartOrders.length; i++) {
        totalSum += $scope.cartOrders[i].adultPrice;
      }

      return totalSum;
    };

    $scope.placeOrders = function() {

      angular.forEach($scope.cartOrders, function(order) {

        var data = {
          offerId: order.id
        };

        OrderService.createOrders(data)
          .success(function() {

            Client.clearCartOrders();

            $location.path('/orders');
          })
          .error(function() {
            $scope.info = undefined;
            $scope.error = 'Kunde ej skapa beställningen';
          });

      });
    };
  });
