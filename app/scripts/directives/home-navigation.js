'use strict';

angular.module('wecookApp')
  .controller('homeNavigationCtrl', function($scope, $location, Client, AuthService) {

    $scope.orders = Client.getOrders();
    $scope.isLoggedIn = Client.isLoggedIn();
    $scope.cartOrders = Client.getCartOrders();
    $scope.profile = Client.getUserProfile();
    $scope.isChef = Client.isChefUser();
    $scope.isGuest = Client.isGuestUser();

    $scope.contains = function(viewLocation) {
      return $location.path().indexOf(viewLocation) !== -1;
    };

    $scope.logout = function() {

      AuthService.logout(Client.getSessionId())
        .success(function() {
          $location.path('/');
        })
        .error(function() {
          $location.path('/');
        });
    };

  });

angular.module('wecookApp')
  .directive('homeNavigation', function() {
    return {
      controller: 'homeNavigationCtrl',
      templateUrl: 'views/home-navigation.html',
      restrict: 'E', // (2)
      replace: true, // (3)
      transclude: true // (4)
    };
  });
