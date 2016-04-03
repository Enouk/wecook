'use strict';


angular.module('wecookApp')
  .factory('AuthInterceptor', function($rootScope, $q, $log, $location, Client) {

    $rootScope.$on('$routeChangeStart', function(scope, next) {
      // Check athat the user is logged in to access a private path
      // otherwise redirect to signin.
      if (!Client.isLoggedIn() && next.data !== undefined && next.data.access === 'private') {

        var current = $location.path();

        $location.path('/signin').search('redirect', current);
      }
    });

    return {
      request: function(config) {
        config.headers = config.headers || {};
        var token = Client.getSessionId('Token');
        if (token) {
          config.headers.Authorization = 'Token ' + token;
        }
        return config;
      },

      responseError: function(response) {
        if (response.status === 401) {
          // handle the case where the user is not authenticated
          //$location.path('/signin');
        }
        return $q.reject(response);
      }
    };
  });
