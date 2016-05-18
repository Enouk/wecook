'use strict';

angular.module('wecookApp')
  .service('DateUtil', function(moment) {

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
