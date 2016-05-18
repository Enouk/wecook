'use strict';

angular.module('wecookApp')
  .controller('InterestedCtrl', function($scope, AuthService) {

    $scope.hasSubmitted = false;

    $scope.submit = function() {

      AuthService.interested($scope.user.email)
        .success(function() {
          $scope.hasSubmitted = true;
        })
        .error(function() {
          $scope.error = 'Kunde ej ta emot intresseanmälan, vänligen försök senare';
        });

    };

  });
