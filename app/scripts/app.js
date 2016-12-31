'use strict';

/**
 * @ngdoc overview
 * @name xebiaApp
 * @description
 * # xebiaApp
 *
 * Main module of the application.
 */
angular
  .module('xebiaApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'products'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
