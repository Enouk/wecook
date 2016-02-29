'use strict';


angular.module('wecookApp')
  .service('MenuService', function($http) {

    this.getMenus = function() {
      return $http.get('/data/menus.json');
    };

  });
