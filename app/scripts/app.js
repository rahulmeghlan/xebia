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
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true
    }).hashPrefix('!');
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
      .when('/products/:name', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'product',
        resolve: {
          fruit: ['storeService', '$route', function (storeService, $route) {
            return storeService.getDetails($route.current.params.name);
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
