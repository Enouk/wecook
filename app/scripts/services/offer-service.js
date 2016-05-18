'use strict';


angular.module('wecookApp')
  .service('OfferService', function($http) {

    this.getAllOffers = function() {
      // return $http.get('/data/offers.json');
      return $http.get('/api/wecook/offer');
    };

    this.getChefOffers = function(chefId) {
      return $http.get('/api/wecook/chef/' + chefId + '/offer');
    };

    this.saveOffer = function(offer) {
      return $http.post('/api/wecook/offer', offer);
    };

    this.removeOffer = function(offer) {
      return $http.delete('/api/wecook/offer/' + offer.id);
    };

    this.nextState = function(offer, nextState) {
      return $http.post('/api/wecook/offer/' + offer.id + '/action/' + nextState); 
    };

  });