'use strict';

angular.module('wecookApp')
  .controller('homeNavigationCtrl', function($scope, $location, Client, AuthService) {

    $scope.orders = Client.getOrders();
    $scope.cartOrders = Client.getCartOrders();
    $scope.profile = Client.getUserProfile();

    $scope.contains = function(viewLocation) {
      return $location.path().indexOf(viewLocation) !== -1;
    };

    $scope.logout = function() {

      AuthService.logout(Client.getSessionId())
        .success(function() {})
        .error(function() {});
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
