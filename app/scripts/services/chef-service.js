'use strict';

angular.module('wecookApp')
  .service('ChefService', function($http) {

    this.getChefs = function() {
      return $http.get('/data/chefs.json');
    };

  });
