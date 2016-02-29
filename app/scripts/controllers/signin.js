'use strict';


angular.module('wecookApp')
  .controller('SigninCtrl', function($scope, $location) {

    $scope.signin = function() {
      $location.path('/home');
    };

  });
