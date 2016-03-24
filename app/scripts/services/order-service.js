'use strict';


angular.module('wecookApp')
  .service('orderService', function($http) {

    this.getAllOrders = function() {
      return $http.get('/api/wecook/order');
    };

    this.getGuestOrders = function(guestId) {
      return $http.get('/api/wecook/guest/' + guestId + '/order');
    };

  });