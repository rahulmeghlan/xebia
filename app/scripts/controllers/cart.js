'use strict';

/**
 * @ngdoc function
 * @name xebiaApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the xebiaApp
 */
angular.module('xebiaApp')
  .controller('CartCtrl', ['cartService', '$scope', '$window', function (cartService, $scope, $window) {
    var self = this;

    self.goBack = function () {
      $window.history.back()
    };

    function initScopeItems() {
      self.items = cartService.cart;
      self.totalItems = cartService.totalQty;
      self.totalPrice = cartService.totalPrice;
      self.incrementQty = cartService.incrementQty;
      self.decrementQty = cartService.decrementQty;
      self.removeItem = cartService.removeItem;
      self.clearCart = function(){
        cartService.clearCart();
        self.goBack();
      }
    }

    function bindEvents() {
      $scope.$watch(function () {
        return cartService.totalPrice;
      }, function (nVal, oVal) {
        self.items = cartService.cart;
        self.totalItems = cartService.totalQty;
        self.totalPrice = cartService.totalPrice;
      });
    }

    function init() {
      initScopeItems();
      bindEvents();
    }

    init();

  }]);
