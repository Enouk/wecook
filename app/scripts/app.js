'use strict';

/**
 * @ngdoc overview
 * @name wecookApp
 * @description
 * # wecookApp
 *
 * Main module of the application.
 */
angular
  .module('wecookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl'
      })
      .when('/kock/ny', {
        templateUrl: 'views/chef_new.html',
        controller: 'ChefNewCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
