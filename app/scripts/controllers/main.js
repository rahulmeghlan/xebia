'use strict';

/**
 * @ngdoc function
 * @name xebiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xebiaApp
 */
angular.module('xebiaApp')
  .controller('MainCtrl', ['fruits', function (fruits) {
    var self = this;
    self.fruits = fruits;
  }]);
