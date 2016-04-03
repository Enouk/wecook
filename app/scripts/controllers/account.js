'use strict';


angular.module('wecookApp')
  .controller('AccountCtrl', function ($scope, Client) {

    $scope.profile = Client.getUserProfile();
    
  });
