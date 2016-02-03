'use strict';


angular.module('wecookApp')
  .service('ProductService', function($http) {

    this.getProducts = function() {
      return $http.get('/data/products.json');
    };

  });
