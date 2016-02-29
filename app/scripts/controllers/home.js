'use strict';


angular.module('wecookApp')
  .controller('HomeCtrl', function($scope, ProductService, ChefService, OfferService, Client) {

    $scope.init = function() {

      ChefService.getChefs()
        .success(function(chefs) {
          Client.setChefs(chefs);
          $scope.chefs = Client.getChefs();
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej hämta kockarna';
        });

      ProductService.getProducts()
        .success(function(products) {

          Client.setProducts(products);
          $scope.products = Client.getProducts();
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej hämta produktlistan';
        });

      OfferService.getOffers()
        .success(function(offers) {

          Client.setOffers(offers);
          $scope.offers = Client.getOffers();
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej hämta erbjudanden';
        });
    };

    $scope.init();

    $scope.order = function(offer) {
      Client.addOrder(offer);
    };

  });
