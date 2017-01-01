'use strict';

/**
 * @ngdoc function
 * @name xebiaApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the xebiaApp
 */
angular.module('xebiaApp')
  .controller('ProductsCtrl', ['fruit', 'cartService', '$location', '$scope', function (fruit, cartService, $location, $scope) {
    var self = this;
    self.fruitName = fruit.name;
    self.fruit = fruit.detail;
    self.totalCartItems = cartService.totalQty;
    self.totalCartPrice = cartService.totalPrice;
    self.isInCart = cartService.cart[fruit.name];

    self.addToCart = function () {
      cartService.addToCart(self.fruitName, self.fruit);
      $location.url("/cart");
    };

    self.removeFromCart = function () {
      cartService.removeItem(self.fruitName);
    };

    function bindEvents() {
      $scope.$watch(function () {
        return cartService.totalPrice;
      }, function () {
        self.totalCartItems = cartService.totalQty;
        self.totalCartPrice = cartService.totalPrice;
        self.isInCart = cartService.cart[fruit.name];
      });
    }

    bindEvents();
  }]);
