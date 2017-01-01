'use strict';

/**
 * @ngdoc function
 * @name xebiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xebiaApp
 */
angular.module('xebiaApp')
  .controller('MainCtrl', ['fruitDetail', 'cartService', '$location', function (fruitDetail, cartService, $location) {
    var self = this;
    self.fruits = fruitDetail;

    self.totalCartItems = cartService.totalQty;
    self.totalCartPrice = cartService.totalPrice;
    self.addToCart = function (key, val) {
      cartService.addToCart(key, val);
      $location.url("/cart");
    }
  }]);
