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
    var self = this;
    self.fruitName = fruit.name;
    self.fruit = fruit.detail;
  }]);
