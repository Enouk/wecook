'use strict';

angular.module('wecookApp')
  .controller('OrdersCtrl', function($scope, $location, Client, OrderService) {

    $scope.guest = Client.getUserGuest();

    OrderService.getGuestOrders($scope.guest.id)
      .success(function(orders) {
        $scope.orders = orders;
      })
      .error(function() {
        $scope.info = undefined;
        $scope.error = 'Kunde ej hämta beställningar';
      });

    $scope.removeOrder = function(order) {

      OrderService.deleteOrder(order)
        .success(function() {
          var index = $scope.orders.indexOf(order);
          $scope.orders.splice(index, 1);
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej tabort beställningen';
        });
    }

  });
