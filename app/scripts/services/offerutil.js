'use strict';


angular.module('wecookApp')
  .service('OfferUtil', function(DateUtil) {

    this.uniqueDeliveryDatesOf = function(offers) {

      var dates = [];

      for (var i = 0; i < offers.length; i++) {

        var offer = offers[i];
        var index = dates.indexOf(offer.deliveryDate);

        if (index === -1) {
          dates.push(offer.deliveryDate);
        }
      }

      return dates;
    };

    this.groupOffersByDeliveryDates = function(offers) {

      var deliveryDates = this.uniqueDeliveryDatesOf(offers);

      var groupBy = [];

      for (var i = 0; i < deliveryDates.length; i++) {

        var date = deliveryDates[i];

        var dateAndOffers = {
          date: date,
          sortDate: DateUtil.parseDate(date),
          moment: DateUtil.formatDate(date),
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
