'use strict';

/**
 * @ngdoc function
 * @name xebiaApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the xebiaApp
 */
angular.module('xebiaApp')
  .controller('ProductsCtrl', ['fruit', function (fruit) {
    console.log(fruit);
  }]);
