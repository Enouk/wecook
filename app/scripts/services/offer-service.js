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

    this.groupOffersByDeliveryDates = function(offers) {

      var deliveryDates = this.uniqueDeliveryDatesOf(offers);

      var groupBy = [];

      for (var i = 0; i < deliveryDates.length; i++) {

        var date = deliveryDates[i];

        var dateAndOffers = {
          date: date,
          sortDate: this.parseDate(date),
          moment: this.formatDate(date),
          offers: []
        };

        groupBy.push(dateAndOffers);

        for (var j = 0; j < offers.length; j++) {
          var offer = offers[j];

          if (offer.deliveryDate === dateAndOffers.date) {
            dateAndOffers.offers.push(offer);
          }
        }
      }

      return groupBy;
    };

  });
