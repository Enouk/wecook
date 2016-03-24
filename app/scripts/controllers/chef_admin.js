'use strict';


angular.module('wecookApp')
  .controller('ChefAdminCtrl', function($scope, $routeParams, Client, ChefService, OfferService, ProductService) {

    $scope.TABS = {
      MENU: 0,
      PRODUCTS: 1
    };

    $scope.TYPE = {
      VIEW: 0,
      ADMIN: 1
    };

    $scope.DAYS = [{
      id: 0,
      name: 'Måndag',
    }, {
      id: 1,
      name: 'Tisdag',
    }, {
      id: 2,
      name: 'Onsdag',
    }, {
      id: 3,
      name: 'Torsdag',
    }, {
      id: 5,
      name: 'Fredag',
    }, {
      id: 6,
      name: 'Lördag',
    }, {
      id: 7,
      name: 'Söndag',
    }]

    $scope.type = $scope.TYPE.ADMIN;
    $scope.tab = $scope.TABS.MENU;

    var id = '0';

    $scope.chef = Client.getUserChef();

    OfferService.getChefOffers($scope.chef.id)
      .success(function(offers) {
        // Pick out the first
        $scope.menu = offers;
      })
      .error(function() {
        $scope.info = undefined;
        $scope.error = 'Kunde ej hämta menyn';
      });

    ProductService.getChefProducts($scope.chef.id)
      .success(function(products) {
        // Pick out the first
        $scope.products = products;
      })
      .error(function() {
        $scope.info = undefined;
        $scope.error = 'Kunde ej hämta produkterna';
      });

    $scope.editProfile = function() {
      $scope.chef.$edit = true;
      $scope.chef.$firstname = $scope.chef.firstname;
      $scope.chef.$lastname = $scope.chef.lastname;
      $scope.chef.$bio = $scope.chef.bio;
    };

    $scope.cancelProfile = function() {
      $scope.chef.$edit = false;
    };

    $scope.saveProfile = function() {
      $scope.chef.$edit = false;
      $scope.chef.firstname = $scope.chef.$firstname;
      $scope.chef.lastname = $scope.chef.$lastname;
      $scope.chef.bio = $scope.chef.$bio;
    };

    $scope.createProduct = function() {
      $scope.newProduct = {};
    };

    $scope.cancelProduct = function() {
      $scope.newProduct = undefined;
    };

    $scope.saveProduct = function(product) {

      ProductService.addProduct(product)
        .success(function(createdProduct) {

          $scope.products.push(createdProduct);
          $scope.newProduct = undefined;
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej spara produkt';
        });
    };

    $scope.removeProduct = function(product) {
      ProductService.removeProduct(product)
        .success(function() {

          var index = $scope.products.indexOf(product);
          $scope.products.splice(index, 1);

        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej tabort produkt';
        });
    };

    $scope.createOffer = function() {
      $scope.newOffer = {};
      $scope.error = undefined;
    };

    $scope.cancelOffer = function() {
      $scope.newOffer = undefined;
    };

    $scope.saveOffer = function(offer) {

      offer.productId = offer.product.id;
      offer.childPrice = offer.adultPrice;

      OfferService.saveOffer(offer)
        .success(function(createdOffer) {
          $scope.menu.push(createdOffer);
          $scope.newOffer = undefined;
        })
        .error(function(data) {
          if (data.error === 'invalid_product_id') {
            $scope.error = 'Ingen produkt vald';
          } else if (data.error === 'invalid_adult_price') {
            $scope.error = 'Inget pris angivet';
          } else if (data.error === 'invalid_last_order_date') {
            $scope.error = 'Inget giltigt beställningsdatum angivet';
          } else if (data.error === 'invalid_delivery_date') {
            $scope.error = 'Inget giltigt leveransdatum angivet';
          } else {
            $scope.error = 'Internt fel, vänligen försök senare';
          }
        });
    };

    $scope.removeOffer = function(offer) {
      OfferService.removeOffer(offer)
        .success(function() {
          var index = $scope.menu.indexOf(offer);
          $scope.menu.splice(index, 1);

        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej tabort';
        });
    };

  });