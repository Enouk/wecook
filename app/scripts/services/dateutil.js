'use strict';

angular.module('wecookApp')
  .service('DateUtil', function(moment) {

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

    this.parseDate = function(dateStr) {
      var dateComp = dateStr.split('-');
      return new Date(parseInt(dateComp[0]), parseInt(dateComp[1]) - 1, parseInt(dateComp[2]));
    };

    this.formatDate = function(dateStr) {

      var today = moment().startOf('day');

      var dateComp = dateStr.split('-');
      var date = new Date(parseInt(dateComp[0]), parseInt(dateComp[1]) - 1, parseInt(dateComp[2]));
      var dateMoment = moment(date);

      var beforeText = '';
      if (this.isToday(dateMoment) === true) {
        beforeText = 'Idag';
      } else if (this.isTomorrow(dateMoment) === true) {
        beforeText = 'Imorgon';
      } else {
        beforeText = moment(today).to(dateMoment);
      }

      return beforeText + ' (' + moment(date).format('dddd, Do') + ')';
    };

    this.isToday = function(momentDate) {
      var REFERENCE = moment();
      var TODAY = REFERENCE.clone().startOf('day');
      return momentDate.isSame(TODAY, 'd');
    };

    this.isTomorrow = function(momentDate) {
      var REFERENCE = moment();
      var YESTERDAY = REFERENCE.clone().add(1, 'days').startOf('day');
      return momentDate.isSame(YESTERDAY, 'd');
    };
  });
