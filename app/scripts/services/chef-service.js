'use strict';

angular.module('wecookApp')
  .service('ChefService', function($http) {

    this.register = function(chef) {
      return $http.post('/api/wecook/chef', chef);
    };

    this.getChef = function(id) {
      return $http.get('/api/wecook/chef/' + id);
    };

    this.getChefs = function() {
      return $http.get('/data/chefs.json');
    };

    this.updateChef = function(id, bio) {

      var operations = [];

      if (bio !== undefined) {
        operations.push(this.createPatchOp('bio', bio));
      }

      var options = {
        headers: {
          'Content-Type': 'application/json-patch'
        }
      };

      return $http.put('/api/wecook/chef/' + id, operations, options);
    };

  });
