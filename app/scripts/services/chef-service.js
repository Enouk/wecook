'use strict';

angular.module('wecookApp')
  .service('ChefService', function($http) {

  	this.register = function(chef) {

		return $http.post('/api/wecook/chef', chef);
  	};

    this.getChefs = function() {
      return $http.get('/data/chefs.json');
    };

  });
