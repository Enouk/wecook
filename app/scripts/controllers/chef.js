'use strict';


angular.module('wecookApp')
  .controller('ChefCtrl', function($scope, $routeParams, Client, ChefService, MenuService, ProductService) {

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

    ChefService.getChefs()
      .success(function(chefs) {
        for (var i = 0; i < chefs.length; i++) {
          var chef = chefs[i];
          if (chef.id === id) {

            $scope.chef = chef;
          }
        }
      })
      .error(function() {
        $scope.info = undefined;
        $scope.error = 'Kunde ej hämta kockarna';
      });

    MenuService.getMenus()
      .success(function(menus) {
        // Pick out the first
        $scope.menu = menus[0];
      })
      .error(function() {
        $scope.info = undefined;
        $scope.error = 'Kunde ej hämta menyerna';
      });

    ProductService.getProducts()
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

    $scope.addNewDay = function() {
      $scope.newDay = {};
    };

    $scope.cancelNewDay = function() {
      $scope.newDay = undefined;
    };

    $scope.saveNewDay = function(day) {
      $scope.newDay = undefined;
    };

    $scope.order = function(product) {
      Client.addOrder(product);
    };

  });
