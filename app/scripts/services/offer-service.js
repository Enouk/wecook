'use strict';


angular.module('wecookApp')
  .service('OfferService', function($http) {

    this.getOffers = function() {
      return $http.get('/data/offers.json');
    };

  });
