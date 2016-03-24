'use strict';

angular.module('wecookApp')
  .service('AuthService', function ($http) {
    
    this.login = function(Username, Pass) {
      var data = {
        'username': Username,
        'password': Pass
      };
      return $http.post('/api/auth/login', data);
    };

    this.currentSession = function() {
      var data = {};
      return $http.post('/api/auth/current_session', data);
    };

    this.logout = function(SessionId) {
      return $http.post('/api/auth/logout', SessionId);
    };

    this.createToken = function(ProviderId) {
      return $http.get('/api/auth/token/' + ProviderId);
    };

    this.forgotPassword = function(Email) {
      var data = {
        'email': Email
      };
      return $http.post('/api/auth/forgot_password', data);
    };

    this.updatePassword = function(Pass) {
      var data = {
        'password': Pass
      };
      return $http.post('/api/auth/change_password', data);
    };

    this.changePassword = function(Pass, Token) {
      var data = {
        'password': Pass,
        'token': Token
      };
      return $http.post('/api/auth/change_password', data);
    };

  });
