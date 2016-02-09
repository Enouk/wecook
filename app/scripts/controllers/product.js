'use strict';


angular.module('wecookApp')
  .controller('ProductCtrl', function($scope, $routeParams, Client) {

    $scope.product = Client.getProduct($routeParams.id);

    $scope.order = function(product) {
      Client.addOrder(product);
    };

  });
