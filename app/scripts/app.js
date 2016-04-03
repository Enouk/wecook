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
    'ngTouch',
    'facebook'
  ])
  .config(function($routeProvider, FacebookProvider) {
    // Set your appId through the setAppId method or
    // use the shortcut in the initialize method directly.
    FacebookProvider.init('966757563410792');

    $routeProvider
    // Public routes
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl'
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
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
      .when('/kitchen', {
        templateUrl: 'views/kitchen.html',
        controller: 'KitchenCtrl'
      })
      .when('/chef/:id', {
        templateUrl: 'views/chef.html',
        controller: 'ChefCtrl'
      })
      .when('/chefs', {
        templateUrl: 'views/chefs.html',
        controller: 'ChefsCtrl'
      })
      // Private routes
      .when('/chef_admin', {
        templateUrl: 'views/chef_admin.html',
        controller: 'ChefAdminCtrl',
        data: {
          access: 'private'
        }
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        data: {
          access: 'private'
        }
      })
      .when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl',
        data: {
          access: 'private'
        }
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        data: {
          access: 'private'
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('wecookApp').config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});
