'use strict';


angular.module('wecookApp')
  .service('ProductService', function($http) {

    this.getAllProducts = function() {
      return $http.get('/api/wecook/product');
    };

    this.getChefProducts = function(chefId) {
      return $http.get('/api/wecook/chef/' + chefId + '/product');
    };

    this.addProduct = function(product) {
      return $http.post('/api/wecook/product', product);
    };

    this.removeProduct = function(product) {
      return $http.delete('/api/wecook/product/' + product.id);
    };

  });