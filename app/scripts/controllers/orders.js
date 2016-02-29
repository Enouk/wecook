'use strict';

angular.module('wecookApp')
  .controller('OrdersCtrl', function($scope, Client) {

  	$scope.orders = Client.getOrders();

    $scope.calculateSum = function() {

      var totalSum = 0;

      for (var i = 0; i < $scope.orders.length; i++) {
        totalSum += $scope.orders[i].price;
      }

      return totalSum;
    };

  });
