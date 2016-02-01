'use strict';

/**
 * @ngdoc function
 * @name wecookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wecookApp
 */
angular.module('wecookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
