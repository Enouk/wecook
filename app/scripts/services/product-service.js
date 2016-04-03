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

    this.updateProduct = function(id, name, description, ingredients) {

      var operations = [];

      if (name !== undefined) {
        operations.push(this.createPatchOp('name', name));
      }

      if (description !== undefined) {
        operations.push(this.createPatchOp('description', description));
      }

      if (ingredients !== undefined) {
        operations.push(this.createPatchOp('ingredients', ingredients));
      }

      var options = {
        headers: {
          'Content-Type': 'application/json-patch'
        }
      };

      return $http.put('/api/wecook/product/' + id, operations, options);
    };

    // TODO move to util class
    this.createPatchOp = function(name, value) {
      var replace = {
        op: 'replace',
        path: name,
        value: value
      };

      return replace;
    };

  });
