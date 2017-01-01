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
    };

    self.search = function (evt) {
      var temp = {};
      if (self.searchTerm.length > 2 && evt.keyCode !== 8) {
        angular.forEach(self.fruits, function (val, key) {
          if (key.match(self.searchTerm)) {
            temp[key] = val;
          }
        });
      } else {
        temp = fruitDetail;
      }
      self.fruits = temp;
    };

  }]);
