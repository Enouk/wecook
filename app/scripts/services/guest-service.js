'use strict';

angular.module('wecookApp')
  .service('GuestService', function($http) {

    this.register = function(chef) {
      return $http.post('/api/wecook/guest', chef);
    };

  });
