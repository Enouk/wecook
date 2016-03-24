'use strict';


angular.module('wecookApp')
  .controller('SigninCtrl', function($scope, $location, Facebook, AuthService, Client, ChefService) {

    $scope.facebookLogin = function() {
      Facebook.login(function(response) {
        if (response.status === 'connected') {
          $scope.logged = true;
          $scope.me();
        }

      });
    };

    $scope.me = function() {

      Facebook.api('/me', {
        fields: ['id', 'first_name', 'last_name']
      }, function(response) {
        /**
         * Using $scope.$apply since this happens outside angular framework.
         */
        $scope.$apply(function() {
          $scope.user = response;
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

    $scope.signin = function() {

      AuthService.login($scope.username, $scope.password)
        .success(function(result) {

          $scope.error = null;

          Client.setUser(result.user);
          Client.setSessionId(result.sessionId);

          ChefService.getChef(result.user.id)
            .success(function(chef) {
              Client.setUserChef(chef)
              $location.path('/home');
            })
            .error(function() {
              // Ingen kock
            });

        })
        .error(function(data) {
          if (data.error === 'invalid_password') {
            $scope.error = 'Fel lösenord';
          } else if (data.error === 'invalid_username_password') {
            $scope.error = 'Ogiltigt username/lösenord';
          } else if (data.error === 'user_locked') {
            $scope.error = 'Användaren är låst';
          } else {
            $scope.error = 'Internt fel, försök igen senare';
          }
        });
    };

  });
