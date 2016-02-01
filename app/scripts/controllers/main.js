'use strict';

/**
 * @ngdoc function
 * @name wecookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wecookApp
 */
angular.module('wecookApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
