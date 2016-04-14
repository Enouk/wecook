'use strict';

angular.module('wecookApp')
  .controller('ChefNewCtrl', function($scope, $location, Facebook, ChefService, AuthService, Client) {

    // $scope.facebookLogin = function() {
    //   Facebook.login(function(response) {
    //     if (response.status == 'connected') {
    //       $scope.logged = true;
    //       $scope.me();
    //     }

    //   });
    // };

    // $scope.me = function() {

    //   Facebook.api('/me', { fields: ['id', 'first_name', 'last_name'] }, function(response) {
    //     $scope.$apply(function() {
    //       $scope.user = {
    //         facebookid: response.id,
    //         firstname: response.first_name,
    //         lastname: response.last_name
    //       };

    //     });

    //   });
    // };

    // $scope.$watch(function() {
    //   return Facebook.isReady();
    // }, function(newVal) {
    //   $scope.facebookReady = true;
    //});

    $scope.register = function() {

      $scope.user.displayName = $scope.user.username;

      ChefService.register($scope.user)
        .success(function() {

          $scope.error = undefined;

          // After the register login the user
          AuthService.login($scope.user.username, $scope.user.password)
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
              $scope.error = 'Kunde ej logga in';
            });
        })
        .error(function(data) {
          if (data.error === 'invalid_email') {
            $scope.error = 'Ogiltig email';
          } else if (data.error === 'email_exist') {
            $scope.error = 'Email addressen finns redan';
          } else if (data.error === 'invalid_password') {
            $scope.error = 'Ogiltigt lösenord';
          } else if (data.error === 'short_password') {
            $scope.error = 'Lösenordet måste vara minst 6 tecken';
          } else if (data.error === 'long_password') {
            $scope.error = 'Lösenordet måste vara mindre än 100 tecken';
          } else if (data.error === 'invalid_username') {
            $scope.error = 'Username är ogiltigt';
          } else if (data.error === 'long_username') {
            $scope.error = 'Username är för långt';
          } else if (data.error === 'username_exist') {
            $scope.error = 'Username finns redan, vänligen välj ett annat';
          } else {
            $scope.error = 'Internt fel, vänligen försök senare';
          }
        });

    };

  });
