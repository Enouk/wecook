'use strict';


angular.module('wecookApp')
  .controller('ChefAdminCtrl', function($scope, $routeParams,
    Client, ProfileService, ChefService, OfferService, ProductService, OfferUtil) {

    $scope.TABS = {
      MENU: 0,
      PRODUCTS: 1
    };

    $scope.TYPE = {
      VIEW: 0,
      ADMIN: 1
    };

    $scope.type = $scope.TYPE.ADMIN;
    $scope.tab = $scope.TABS.MENU;
    $scope.menu = [];

    $scope.chef = Client.getUserChef();
    $scope.profile = Client.getUserProfile();

    OfferService.getChefOffers($scope.chef.id)
      .success(function(offers) {
        // Pick out the first
        $scope.dateAndOffers = OfferUtil.groupOffersByDeliveryDates(offers);
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

    $scope.beginEditProfile = function() {
      $scope.chef.$edit = true;
      $scope.chef.$firstname = $scope.profile.firstname;
      $scope.chef.$lastname = $scope.profile.lastname;
      $scope.chef.$bio = $scope.chef.bio;
    };

    $scope.cancelEditProfile = function() {
      $scope.chef.$edit = undefined;
    };

    $scope.commitEditProfile = function() {
      $scope.chef.$edit = undefined;
      $scope.profile.firstname = $scope.chef.$firstname;
      $scope.profile.lastname = $scope.chef.$lastname;
      $scope.chef.bio = $scope.chef.$bio;

      $scope.updateProfile($scope.profile);
    };

    $scope.updateProfile = function(profile) {

      ProfileService.updateProfile(profile.id, profile.firstname, profile.lastname)
        .success(function(updatedProfile) {
          Client.setUserProfile(updatedProfile);
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej updatera profil';
        });
    };

    $scope.updateChef = function(chef) {

      ChefService.updateChef(chef.id, chef.bio)
        .success(function(updatedChef) {
          Client.setUserChef(updatedChef);
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej updatera kock';
        });
    };

    $scope.createProduct = function() {
      $scope.newProduct = {};
    };

    $scope.cancelProduct = function() {
      $scope.newProduct = undefined;
    };

    $scope.beginEditProduct = function(product) {
      product.$edit = true;
      product.$name = product.name;
      product.$description = product.description;
      product.$ingredients = product.ingredients;
    };

    $scope.commitEditProduct = function(product) {
      product.$edit = undefined;
      product.name = product.$name;
      product.description = product.$description;
      product.ingredients = product.$ingredients;

      return $scope.updateProduct(product);
    };

    $scope.cancelEditProduct = function(product) {
      product.$edit = undefined;
    };

    $scope.addProduct = function(product) {

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

    $scope.updateProduct = function(product) {

      ProductService.updateProduct(product.id, product.name, product.description, product.ingredients)
        .success(function(updatedProduct) {

          product = updatedProduct;
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej updatera produkt';
        });
    };

    $scope.removeProduct = function(product) {
      ProductService.removeProduct(product)
        .success(function() {

          var index = $scope.products.indexOf(product);
          $scope.products.splice(index, 1);

        })
        .error(function(data) {
          $scope.info = undefined;
          if (data.error == 'offer_exist_for_product') {
            $scope.error = 'Kan ej abort en rätt som ingår i en meny';
          } else {
            $scope.error = 'Kunde ej tabort';
          }
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

          $scope.error = undefined;
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej tabort';
        });
    };

  });
