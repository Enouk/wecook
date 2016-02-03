'use strict';


angular.module('wecookApp')
  .controller('HomeCtrl', function($scope, ProductService, Client) {

    $scope.init = function() {

      ProductService.getProducts()
        .success(function(products) {

          Client.setProducts(products);
          $scope.products = Client.getProducts();
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej hämta produktlistan';
        });
    };

    $scope.init();

    $scope.order = function(product) {
      Client.addOrder(product);
    };

  });
