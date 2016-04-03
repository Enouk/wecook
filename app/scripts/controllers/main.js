'use strict';


angular.module('wecookApp')
  .controller('MainCtrl', function($scope, $location, Client, AuthService) {

    $scope.autologin = function() {

      AuthService.currentSession()
        .success(function(data) {

          $scope.error = null;

          Client.setUser(data.user);
          Client.setSessionId(data.sessionId);
          Client.setUserProfile(data.profile);
          Client.setUserChef(data.chef);
          Client.setUserGuest(data.guest);

          $location.path('/home');
        })
        .error(function() {
        	// No session exist's
        });
    };

    // Try to do a autologin
    $scope.autologin();

  });
