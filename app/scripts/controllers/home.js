'use strict';


angular.module('wecookApp')
  .controller('HomeCtrl', function($scope, ProductService, ChefService, OfferService, Client) {

    $scope.init = function() {

      // ChefService.getChefs()
      //   .success(function(chefs) {
      //     Client.setChefs(chefs);
      //     $scope.chefs = Client.getChefs();
      //   })
      //   .error(function() {
      //     $scope.info = undefined;
      //     $scope.error = 'Kunde ej hämta kockarna';
      //   });

      // ProductService.getAllProducts()
      //   .success(function(products) {

      //     Client.setProducts(products);
      //     $scope.products = Client.getProducts();
      //   })
      //   .error(function() {
      //     $scope.info = undefined;
      //     $scope.error = 'Kunde ej hämta produktlistan';
      //   });

      OfferService.getAllOffers()
        .success(function(offers) {

          Client.setOffers(offers);
          $scope.offers = Client.getOffers();

          $scope.deliveryDates = $scope.uniqueDeliveryDatesOf(offers);
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej hämta erbjudanden';
        });
    };

    $scope.init();

    $scope.order = function(offer) {
      Client.addCartOrder(offer);
    };

    $scope.uniqueDeliveryDatesOf = function(offers) {

      var dates = [];

      for (var i = 0; i < offers.length; i++) {

        var offer = offers[i];
        var index = dates.indexOf(offer.deliveryDate);

        if (index == -1) {
          dates.push(offer.deliveryDate);
        }
      }

      return dates;
    }

  });
