'use strict';

angular.module('wecookApp')
  .controller('ChefNewCtrl', function ($scope, Facebook, ChefService) {

    $scope.facebookLogin = function() {
      Facebook.login(function(response) {
        if (response.status == 'connected') {
          $scope.logged = true;
          $scope.me();
        }

      });
    };

    $scope.me = function() {

      Facebook.api('/me', {fields: ['id', 'first_name', 'last_name']}, function(response) {
        /**
         * Using $scope.$apply since this happens outside angular framework.
         */
        $scope.$apply(function() {
          $scope.user = {
            facebookid: response.id,
            firstname: response.first_name,
            lastname: response.last_name
          };

        });

      });
    };

    $scope.$watch(function() {
      // This is for convenience, to notify if Facebook is loaded and ready to go.
      return Facebook.isReady();
    }, function(newVal) {
      // You might want to use this to disable/show/hide buttons and else
      $scope.facebookReady = true;
    });

    $scope.register = function() {

      ChefService.register($scope.user)
      .success(function(response) {

      })
      .error(function() {
        $scope.info = undefined;
        $scope.error = 'Kunde ej registrera kock';
      });

    };

  });
