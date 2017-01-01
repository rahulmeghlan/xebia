'use strict';

/**
 * @ngdoc function
 * @name xebiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xebiaApp
 */
angular.module('xebiaApp')
  .controller('MainCtrl', ['fruitDetail', function (fruitDetail) {
    var self = this;
    self.fruits = fruitDetail;
  }]);
