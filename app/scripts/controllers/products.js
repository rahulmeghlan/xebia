'use strict';

/**
 * @ngdoc function
 * @name xebiaApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the xebiaApp
 */
angular.module('xebiaApp')
  .controller('ProductsCtrl', ['fruit', 'fruitDetail', function (fruit, fruitDetail) {
    var self = this;
    self.fruitName = fruit;
    self.fruit = fruitDetail[fruit.toLowerCase()];
  }]);
