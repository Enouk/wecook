'use strict';

angular.module('wecookApp')
  .controller('homeNavigationCtrl', function($scope, $location, Client) {

    $scope.contains = function(viewLocation) {
      return $location.path().indexOf(viewLocation) !== -1;
    };

    $scope.orders = Client.getOrders();

  });

angular.module('wecookApp')
  .directive('homeNavigation', function () {
    return {
      controller: 'homeNavigationCtrl',
      templateUrl: 'views/home-navigation.html',
      restrict: 'E', // (2)
      replace: true, // (3)
      transclude: true // (4)
    };
  });
