'use strict';


angular.module('wecookApp')
  .service('OrderService', function($http) {

    this.getAllOrders = function() {
      return $http.get('/api/wecook/order');
    };

    this.getGuestOrders = function(guestId) {
      return $http.get('/api/wecook/guest/' + guestId + '/order');
    };

    this.createOrders = function(orders) {
      return $http.post('/api/wecook/order/', orders);
    };

  });
