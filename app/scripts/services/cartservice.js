'use strict';

/**
 * @ngdoc service
 * @name xebiaApp.cartService
 * @description
 * # cartService
 * Service in the xebiaApp.
 */
angular.module('xebiaApp')
  .service('cartService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;

    self.cart = typeof window.localStorage.cart !== "undefined" ? JSON.parse(window.localStorage.cart) : {};

    self.addToCart = function (key, item) {
      if (self.cart[key]) {
        ++self.cart[key].qty
      } else {
        self.cart[key] = item;
        self.cart[key].qty = 1;
      }
      self.save();
    };

    self.incrementQty = function (key) {
      ++self.cart[key].qty;
      self.save();
    };

    self.decrementQty = function (key) {
      if (self.cart[key].qty > 1) {
        --self.cart[key].qty;
        self.save();
      }
    };

    self.removeItem = function (key) {
      delete self.cart[key];
      self.save();
    };

    self.clearCart = function () {
      self.cart = {};
      self.save();
    };

    self.save = function () {
      getTotalPrice();
      window.localStorage.cart = JSON.stringify(self.cart);
    };

    function getTotalPrice() {
      self.totalPrice = 0;
      self.totalQty = 0;
      angular.forEach(self.cart, function (val, key) {
        self.totalPrice += (val.qty * val.price);
        self.totalQty += val.qty;
      });
    }

    getTotalPrice();
  });
