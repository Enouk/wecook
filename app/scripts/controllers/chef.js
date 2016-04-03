'use strict';


angular.module('wecookApp')
  .controller('ChefCtrl', function($scope, $routeParams, Client, ChefService, OfferService, ProductService) {

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

    var id = $routeParams.id;

    ChefService.getChef(id)
      .success(function(chef) {
        $scope.chef = chef;
      })
      .error(function() {
        $scope.info = undefined;
        $scope.error = 'Kunde ej hämta kocken';
      });

    OfferService.getChefOffers(id)
      .success(function(offers) {
        // Pick out the first
        $scope.menu = offers;
      })
      .error(function() {
        $scope.info = undefined;
        $scope.error = 'Kunde ej hämta menyerna';
      });

    ProductService.getChefProducts(id)
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

    $scope.addNewProduct = function() {
      $scope.newProduct = {};
    };

    $scope.cancelProduct = function() {
      $scope.newProduct = undefined;
    };

    $scope.saveProduct = function(product) {
      //Client.addProduct(product);
      $scope.products.push(product);
      $scope.newProduct = undefined;
    };

    $scope.order = function(offer) {
      Client.addCartOrder(offer);
    };

  });