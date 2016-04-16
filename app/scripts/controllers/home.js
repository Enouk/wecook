'use strict';

angular.module('wecookApp')
  .controller('HomeCtrl', function($scope, moment, ProductService, ChefService, OfferService, Client) {

    $scope.init = function() {

      OfferService.getAllOffers()
        .success(function(offers) {

          Client.setOffers(offers);

          var deliveryDates = $scope.uniqueDeliveryDatesOf(offers);

          $scope.dateAndOffers = $scope.groupByDeliveryDates(deliveryDates, offers);
        })
        .error(function() {
          $scope.info = undefined;
          $scope.error = 'Kunde ej hämta erbjudanden';
        });
    };

    $scope.init();

    $scope.order = function(offer) {
      Client.addCartOrder(offer);
    };

    $scope.uniqueDeliveryDatesOf = function(offers) {

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

    $scope.groupByDeliveryDates = function(deliveryDates, offers) {

      var groupBy = [];

      for (var i = 0; i < deliveryDates.length; i++) {

        var date = deliveryDates[i];

        var dateAndOffers = {
          date: date,
          sortDate: $scope.parseDate(date),
          moment: $scope.formatDate(date),
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

    $scope.parseDate = function(dateStr) {
      var dateComp = dateStr.split('-');
      return new Date(parseInt(dateComp[0]), parseInt(dateComp[1]) - 1, parseInt(dateComp[2]));
    };

    $scope.formatDate = function(dateStr) {

      var today = moment().startOf('day');

      var dateComp = dateStr.split('-');
      var date = new Date(parseInt(dateComp[0]), parseInt(dateComp[1]) - 1, parseInt(dateComp[2]));
      var dateMoment = moment(date);

      var beforeText = '';
      if ($scope.isToday(dateMoment) === true) {
        beforeText = 'Idag';
      } else if ($scope.isTomorrow(dateMoment) === true) {
        beforeText = 'Imorgon';
      } else {
        beforeText = moment(today).to(dateMoment);
      }

      return beforeText + ' (' + moment(date).format('dddd, Do') + ')';
    };

    $scope.isToday = function(momentDate) {
      var REFERENCE = moment(); // fixed just for testing, use moment();
      var TODAY = REFERENCE.clone().startOf('day');
      return momentDate.isSame(TODAY, 'd');
    };

    $scope.isTomorrow = function(momentDate) {
      var REFERENCE = moment();
      var YESTERDAY = REFERENCE.clone().add(1, 'days').startOf('day');
      return momentDate.isSame(YESTERDAY, 'd');
    };

  });
